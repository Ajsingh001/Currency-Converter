import { useCallback, useState } from "react";
import "./App.css";
import Page from "./Page";
import usecurrencyInfo from "./hooks/usecurrencyhook";

function App() {
  const [Amount, setAmount] = useState();
  const [From, setFrom] = useState("usd"); //this is for from//
  const [To, setTo] = useState("inr"); //this is for 2
  const [convertedAmount, setconvertedAmount] = useState(0); //this for result UI//
  const currencyinfo = usecurrencyInfo(From); //it return data of particular currency
  const options = Object.keys(currencyinfo);
  //this is the array of the currency list//
  
  // console.log(usecurrencyInfo(From));
  // console.log(currencyinfo[To]);

  const swap = () => {
    setTo(From);
    setFrom(To);
    setconvertedAmount(Amount);
    setAmount(convertedAmount);
  };

  // usecurrencyInfo();

  return (
    <>
      <Page
        amount={Amount} //0
        Amountchange={setAmount}
        oncurrencychange={(currency) => setAmount(Amount)}
        selectcurrency={From} //from
        setfrom={setFrom}
        seTTo={setTo}
        to={To} //to
        currencyoptions={options} //array of currency
        swap={swap} //swap funtion
        convertedAmount={convertedAmount}
        setconvertedAmount={setconvertedAmount}
        currencyinfo={currencyinfo}
      />
    </>
  );
}

export default App;
