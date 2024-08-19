import React, { useId } from "react";
import "./hooks/One.css";
export default function Page({
  amount /*amount*/,
  Amountchange /*Setamount*/,
  currencyoptions = [], //these are only the keys of currency//
  selectcurrency,
  to,
  setfrom,
  seTTo,
  amountdisable = false,
  swap,
  convertedAmount,
  setconvertedAmount,
  currencyinfo,
}) {
  console.log(amount);
  let inputbox1id = useId();
  return (
    <>
      <div className="max-w-[1280px] bg-orange-400 h-screen flex justify-center place-items-center overflow-hidden">
        <div className="bg-slate-600 w-1/2 h-3/4 flex justify-center relative">
          <div>
            <h1 className="text-2xl font-semibold ">Curreny Converter</h1>
          </div>
          <div className="bg-black w-3/4 h-1/3 absolute left-[75px] top-[30px] flex p-1">
            <div className="bg-green-400 w-2/4 h-full relative">
              <div className="text-left ml-[5px]" id="INPUT1">
                <label
                  htmlFor={inputbox1id}
                  id="number"
                  className=" text-black text-[22px]"
                >
                  From
                </label>
              </div>
              <div className="overflow-hidden flex align-bottom place-items-end absolute left-0 bottom-3">
                <input
                  type="number"
                  className="w-full text-white text-center"
                  placeholder="Amount"
                  value={amount}
                  disabled={amountdisable} //disable
                  currencyoptions={currencyoptions}
                  htmlFor={inputbox1id}
                  onChange={(e) =>
                    Amountchange && Amountchange(Number(e.target.value))
                  }
                />
              </div>
            </div>
            <div className="bg-white w-2/4 h-full relative">
              <div className="text-right mr-[5px]">
                <label id="numberz" className=" text-black text-[22px]">
                  Currency Type
                </label>
              </div>
              <div className="overflow-hidden flex align-bottom place-items-end absolute right-0 bottom-3">
                <select
                  id="simpleDropdown"
                  value={selectcurrency}
                  onChange={(e) => setfrom(e.target.value)}
                >
                  {currencyoptions.map((options) => (
                    <option
                      key={options}
                      className="text-center h-3/4"
                      // onChange={(e) => setfrom(e.target.value)}
                    >
                      <li className="w-[200px] h-1/2"> {options}</li>
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div>
            <button
              onClick={() => swap()}
              className="w-1/4 h-[40px] bg-blue-400 text-black absolute left-[230px] top-48 text-2xl rounded-[5px] z-[1] hover:bg-orange-500 hover:text-white active:bg-green-500 active:text-white transition ease-in-out delay-10 duration-0.50 hover:scale-[1.1] active:scale-[0.90]"
            >
              Swap
            </button>
          </div>
          <div className="bg-black w-3/4 h-1/3 absolute left-[75px] bottom-[120px] flex p-1 z-[0]">
            <div className="bg-green-400 w-2/4 h-full relative">
              <div className="text-left ml-[5px]">
                <label id="numbere" className=" text-black text-[22px]">
                  To
                </label>
              </div>
              <div className="overflow-hidden flex align-bottom place-items-end absolute left-0 bottom-3">
                <input
                  type="number"
                  className="w-full text-white text-center"
                  placeholder="Amount"
                  value={convertedAmount}
                  disabled={amountdisable} //disable
                  onChange={(e) =>
                    Amountchange && Amountchange(Number(e.target.value))
                  }
                />
              </div>
            </div>
            <div className="bg-white w-2/4 h-full relative">
              <div className="text-right mr-[5px]">
                <label htmlFor="number" className=" text-black text-[22px]">
                  Currency Type
                </label>
              </div>
              <div className="overflow-hidden flex align-bottom place-items-end absolute right-0 bottom-3 ">
                <select
                  className="w-[140px] font-semibold text-2xl"
                  id="simpleDropdown"
                  value={to}
                  onChange={(e) => seTTo(e.target.value)}
                >
                  {currencyoptions.map((options) => (
                    <option key={options} className="text-center ">
                      {options}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div>
            <button
              onClick={() => setconvertedAmount(amount * currencyinfo[to])}
              className="w-1/4 h-[40px] bg-blue-400 rounded-[5px] absolute left-[35%] bottom-16 text-1xl font-bold text-black   hover:bg-orange-500 hover:text-white active:bg-green-500 active:text-white transition ease-in-out delay-10 duration-0.50 hover:scale-[1.1] active:scale-[0.90]"
            >
              Covert {selectcurrency} To {to}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
