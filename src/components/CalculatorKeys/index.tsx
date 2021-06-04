import React from "react";
import { faBackspace, faDivide } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CalculatorButton from "../CalculatorButton";
import styles from "./styles.module.css";

interface Props {}

const CalculatorKeys: React.FC<Props> = () => {
  return (
    <div className={styles.calculatorKeys}>
      <CalculatorButton theme="lightGray">AC</CalculatorButton>
      <CalculatorButton theme="lightGray">+/-</CalculatorButton>
      <CalculatorButton theme="lightGray">
        <FontAwesomeIcon icon={faDivide} />
      </CalculatorButton>
      <CalculatorButton theme="orange">
        <FontAwesomeIcon icon={faBackspace} />
      </CalculatorButton>

      <CalculatorButton theme="darkGray">7</CalculatorButton>
      <CalculatorButton theme="darkGray">8</CalculatorButton>
      <CalculatorButton theme="darkGray">9</CalculatorButton>
      <CalculatorButton>x</CalculatorButton>

      <CalculatorButton theme="darkGray">4</CalculatorButton>
      <CalculatorButton theme="darkGray">5</CalculatorButton>
      <CalculatorButton theme="darkGray">6</CalculatorButton>
      <CalculatorButton>-</CalculatorButton>

      <CalculatorButton theme="darkGray">1</CalculatorButton>
      <CalculatorButton theme="darkGray">2</CalculatorButton>
      <CalculatorButton theme="darkGray">3</CalculatorButton>
      <CalculatorButton>+</CalculatorButton>

      <CalculatorButton theme="darkGray">0</CalculatorButton>
      <CalculatorButton theme="darkGray">.</CalculatorButton>
      <div />
      <CalculatorButton>=</CalculatorButton>
    </div>
  );
};

export default CalculatorKeys;
