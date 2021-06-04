import React from "react";
import CalculatorKeys from "../../components/CalculatorKeys";
import styles from "./styles.module.css";

const Calculator: React.FC = () => {
  return (
    <div className={styles.calculator}>
      <div className={styles.operation}>
        <span>123123</span>
      </div>
      <div className={styles.result}>
        <span>123123</span>
      </div>
      <CalculatorKeys />
    </div>
  );
};

export default Calculator;
