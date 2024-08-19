import React, { useEffect, useState } from "react";

("use strict");
export default function usecurrencyInfo(currency='usd') {
  const [data, setdata] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`
    )
      .then((response) => response.json())
      .then((jsondata) => setdata(jsondata[currency])); //access of object through bracket
  }, [currency]);
  //array dependence will run again if the curreny is changed//


  return data;
}
