import React from "react";
import styles from "./styles.module.css";

export type CalculatorButtonTheme = "lightGray" | "darkGray" | "orange";

export interface CalculatorButtonProps {
  theme?: CalculatorButtonTheme;
  onClick?: () => void;
}

const backgroundColors: Record<CalculatorButtonTheme, Record<string, string>> =
  {
    lightGray: { background: "#A5A5A5", color: "#000" },
    darkGray: { background: "#333333", color: "#FFF" },
    orange: { background: "#FF9502", color: "#FFF" },
  };

const CalculatorButton: React.FC<CalculatorButtonProps> = ({
  children,
  theme,
  onClick,
}) => {
  return (
    <div
      className={styles.calculatorButton}
      style={backgroundColors[theme || "orange"]}
    >
      <button onClick={onClick}>
        <span>{children}</span>
      </button>
    </div>
  );
};

export default CalculatorButton;
