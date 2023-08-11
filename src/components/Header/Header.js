import React from "react";
import styles from "./Header.module.css";
import investmentLogo from "../../assets/investment-calculator-logo.png";

const Header = () => {
  return (
    <header className={styles["logo-header"]}>
      <img src={investmentLogo} alt="Investment Logo" />
      <h2>Investment Calculator</h2>
    </header>
  );
};

export default Header;
