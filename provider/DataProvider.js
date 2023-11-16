import React, { useState } from "react";

export const DataContext = React.createContext({});

export const DataProvider = (props) => {
  const [incomeValues, setIncomeValues] = useState({});
  const [expensesValues, setExpensesValues] = useState({});
 

  const values = {
    setIncomeValues,
    incomeValues,
    setExpensesValues,
    expensesValues,
  };
  return (
    <DataContext.Provider value={values}>{props.children}</DataContext.Provider>
  );
};
