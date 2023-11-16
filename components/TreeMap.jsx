import { DataContext } from "@/provider/DataProvider";
import React from "react";

export const TreeMap = () => {
  const { incomeValues, expensesValues } = React.useContext(DataContext);

  console.log("incomeValues no pai", incomeValues);
  console.log("expensesValues no pai", expensesValues);

  let totalExpense = 0;

  for (let i = 0; i < expensesValues.length; i++) {
    const value = parseFloat(expensesValues[i].value);
    if (!isNaN(value)) {
      totalExpense += value;
    }
  }

  let totalIncome = 0;

  for (let i = 0; i < incomeValues.length; i++) {
    const value = parseFloat(incomeValues[i].value);
    if (!isNaN(value)) {
      totalIncome += value;
    }
  }

  console.log("Total de totalIncome:", totalIncome);
  console.log("Total de totalExpenses:", totalExpense);

  const total = totalIncome + totalExpense;

  const calculatePercentage = (value, total) => {
    const numericValue = parseFloat(value);
    return (numericValue / total) * 100;
  };

  const incomePercentage = calculatePercentage(totalIncome, total);
  const expensePercentage = calculatePercentage(totalExpense, total);

  console.log("Porcentagem de Entradas:", incomePercentage);
  console.log("Porcentagem de Gastos:", expensePercentage);

  const incomeContainerStyle = {
    width: `${incomePercentage}%`,
    background: "green",
    height: "100%", 
  };

  const expenseContainerStyle = {
    width: `${expensePercentage}%`,
    background: "red",
    height: "100%",
  };

  return (
    <div style={{ display: 'flex', width: '100%', height: '100vh', background: 'whitesmoke' }}>
    <div style={incomeContainerStyle}>Entradas</div>
    <div style={expenseContainerStyle}>Gastos</div>
  </div>
  );
};
