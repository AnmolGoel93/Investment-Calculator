import React, { useState } from "react";
import styles from "./DetailsForm.module.css";

const initialState = {
  current_savings: 10000,
  yearly_savings: 1000,
  expected_interest: 7,
  investment_duration: 5,
};

const DetailsForm = ({ onCalculate }) => {
  const [userInput, setUserInput] = useState(initialState);

  const submitHandler = (event) => {
    event.preventDefault();

    const userInputData = {
      current_savings: +userInput.current_savings,
      yearly_savings: +userInput.yearly_savings,
      expected_interest: +userInput.expected_interest,
      investment_duration: +userInput.investment_duration,
    };

    onCalculate(userInputData);
    setUserInput(initialState);
  };

  const resetHandler = () => {
    setUserInput(initialState);
  };

  const inputChangeHandler = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: +value,
      };
    });
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <div className={styles["detail-form__controls"]}>
        <div className={styles["input-form__control"]}>
          <label htmlFor="current_savings">Current Savings ($)</label>
          <input
            value={userInput.current_savings}
            onChange={(event) =>
              inputChangeHandler("current_savings", event.target.value)
            }
            type="number"
            id="current_savings"
            name="current_savings"
          ></input>
        </div>

        <div className={styles["input-form__control"]}>
          <label htmlFor="yearly_savings">Yearly Savings ($)</label>
          <input
            value={userInput.yearly_savings}
            onChange={(event) =>
              inputChangeHandler("yearly_savings", event.target.value)
            }
            type="number"
            id="yearly_savings"
            name="yearly_savings"
          ></input>
        </div>
      </div>

      <div className={styles["detail-form__controls"]}>
        <div className={styles["input-form__control"]}>
          <label htmlFor="expected_interest">
            Expected Interest(%, Per Year)
          </label>
          <input
            value={userInput.expected_interest}
            onChange={(event) =>
              inputChangeHandler("expected_interest", event.target.value)
            }
            type="number"
            id="expected_interest"
            name="expected_interest"
          ></input>
        </div>
        <div className={styles["input-form__control"]}>
          <label htmlFor="investment_duration">
            Investment Duration (Years)
          </label>
          <input
            value={userInput.investment_duration}
            onChange={(event) =>
              inputChangeHandler("investment_duration", event.target.value)
            }
            type="number"
            id="investment_duration"
            name="investment_duration"
          ></input>
        </div>
      </div>

      <div className={styles["detail_form__actions"]}>
        <button type="reset" className={styles.reset} onClick={resetHandler}>
          Reset
        </button>
        <button type="submit" className={styles.submit}>
          Calculate
        </button>
      </div>
    </form>
  );
};

export default DetailsForm;
