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

  const calculateColor = (value, isIncome) => {
    // Define a cor base para recebimentos e gastos
    const baseColor = isIncome ? [0, 255, 0] : [255, 0, 0];

    const opacity = 0.2 + (0.8 * value / 1000); 

    const finalColor = [...baseColor, opacity];

    return {
      background: `rgba(${finalColor.join(",")})`,
    };
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100vh",
        background: "whitesmoke",
      }}
    >
      {/* ------ RENDIMENTOS ----- */}
      <div
        style={{
          flex: `${incomePercentage}%`,
          display: "flex",
          border: "1px solid black",
          flexDirection: "column",
            // flexDirection: "row",
            // flexWrap: "wrap",
        }}
      >
        {incomeValues.length > 1 &&
          incomeValues.map((subcategory) => (
            <div
              key={subcategory.key}
              style={{
                flex: `${calculatePercentage(subcategory.value, totalIncome)}%`,
                ...calculateColor(subcategory.value, true),
                border: "1px solid black",
                padding:'12px'
              }}
            >
              {subcategory.name}
            </div>
          ))}
      </div>

      <div
        style={{
          flex: `${expensePercentage}%`,
          border: "1px solid black",
          display: "flex",
            flexDirection: "column",
          // flexDirection: "row",
          // flexWrap: "wrap",
        }}
      >
        {expensesValues.length > 1 &&
          expensesValues.map((subcategory, index) => (
            <div
              key={subcategory.key}
              style={{
                flex: `${calculatePercentage(
                  subcategory.value,
                  totalExpense
                )}%`,
                ...calculateColor(subcategory.value, false),
                border: "1px solid black",
                padding:'12px'
              }}
            >
              {subcategory.name}
            </div>
          ))}
      </div>

    </div>
  );
};
