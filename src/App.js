import React, { useState } from "react";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import DetailsForm from "./components/DetailForm/DetailsForm";
import InvestmentTable from "./components/InvestmentTable/InvestmentTable";

const App = () => {
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = [];

  if (userInput) {
    let currentSavings = userInput["current_savings"];
    const yearlyContribution = userInput["yearly_savings"];
    const expectedReturn = userInput["expected_interest"] / 100;
    const duration = userInput["investment_duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header />
      <DetailsForm onCalculate={calculateHandler} />
      {!userInput && (
        <p
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "1.5rem",
          }}
        >
          No Investment Calculated..
        </p>
      )}
      {userInput && (
        <InvestmentTable
          results={yearlyData}
          initialInvestment={userInput["current_savings"]}
        />
      )}
    </div>
  );
};

export default App;
