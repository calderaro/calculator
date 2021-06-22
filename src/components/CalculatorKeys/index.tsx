import React from "react";
import { faDivide } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CalculatorButton from "../CalculatorButton";
import styles from './styles.module.css';

interface Props {
  onKeyDown?: (event: { type: string; value: string }) => void;
}

const CalculatorKeys: React.FC<Props> = ({ onKeyDown }) => {
  return (
    <div className={styles.calculatorKeys}>
      <CalculatorButton
        theme="lightGray"
        onClick={() => onKeyDown?.({ type: "operator", value: "ac" })}
      >
        AC
      </CalculatorButton>
      <CalculatorButton
        theme="lightGray"
        onClick={() => onKeyDown?.({ type: "operator", value: "ac" })}
      >
        +/-
      </CalculatorButton>
      <CalculatorButton
        theme="lightGray"
        onClick={() => onKeyDown?.({ type: "operator", value: "ac" })}
      >
        %
      </CalculatorButton>
      <CalculatorButton
        theme="orange"
        onClick={() => onKeyDown?.({ type: "operator", value: "division" })}
      >
        <FontAwesomeIcon icon={faDivide} />
      </CalculatorButton>

      <CalculatorButton
        theme="darkGray"
        onClick={() => onKeyDown?.({ type: "digit", value: "7" })}
      >
        7
      </CalculatorButton>
      <CalculatorButton
        theme="darkGray"
        onClick={() => onKeyDown?.({ type: "digit", value: "8" })}
      >
        8
      </CalculatorButton>
      <CalculatorButton
        theme="darkGray"
        onClick={() => onKeyDown?.({ type: "digit", value: "9" })}
      >
        9
      </CalculatorButton>
      <CalculatorButton
        onClick={() =>
          onKeyDown?.({ type: "operator", value: "multiplication" })
        }
      >
        x
      </CalculatorButton>

      <CalculatorButton
        theme="darkGray"
        onClick={() => onKeyDown?.({ type: "digit", value: "4" })}
      >
        4
      </CalculatorButton>
      <CalculatorButton
        theme="darkGray"
        onClick={() => onKeyDown?.({ type: "digit", value: "5" })}
      >
        5
      </CalculatorButton>
      <CalculatorButton
        theme="darkGray"
        onClick={() => onKeyDown?.({ type: "digit", value: "6" })}
      >
        6
      </CalculatorButton>
      <CalculatorButton
        onClick={() => onKeyDown?.({ type: "operator", value: "subtraction" })}
      >
        -
      </CalculatorButton>

      <CalculatorButton
        theme="darkGray"
        onClick={() => onKeyDown?.({ type: "digit", value: "1" })}
      >
        1
      </CalculatorButton>
      <CalculatorButton
        theme="darkGray"
        onClick={() => onKeyDown?.({ type: "digit", value: "2" })}
      >
        2
      </CalculatorButton>
      <CalculatorButton
        theme="darkGray"
        onClick={() => onKeyDown?.({ type: "digit", value: "3" })}
      >
        3
      </CalculatorButton>
      <CalculatorButton
        onClick={() => onKeyDown?.({ type: "operator", value: "addition" })}
      >
        +
      </CalculatorButton>

      <CalculatorButton
        theme="darkGray"
        onClick={() => onKeyDown?.({ type: "digit", value: "0" })}
      >
        0
      </CalculatorButton>
      <CalculatorButton
        theme="darkGray"
        onClick={() => onKeyDown?.({ type: "digit", value: "." })}
      >
        .
      </CalculatorButton>
      <div />
      <CalculatorButton
        onClick={() => onKeyDown?.({ type: "operator", value: "=" })}
      >
        =
      </CalculatorButton>
    </div>
  );
};

export default CalculatorKeys;
