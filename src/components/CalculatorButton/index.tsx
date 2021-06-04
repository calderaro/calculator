import React from "react";
import styles from "./styles.module.css";

export type CalculatorButtonTheme = "lightGray" | "darkGray" | "orange";

export interface CalculatorButtonProps {
  theme?: CalculatorButtonTheme;
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
}) => {
  return (
    <div
      className={styles.calculatorButton}
      style={backgroundColors[theme || "orange"]}
    >
      <span>{children}</span>
    </div>
  );
};

export default CalculatorButton;
