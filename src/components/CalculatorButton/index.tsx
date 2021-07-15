import React from 'react';
import styles from './styles.module.css';

export type CalculatorButtonTheme = 'lightGray' | 'darkGray' | 'orange' | 'blue';

export interface CalculatorButtonProps {
  theme?: CalculatorButtonTheme;
  onClick?: () => void;
  wide?: boolean;
}

const backgroundColors: Record<CalculatorButtonTheme, Record<string, string>> = {
  lightGray: { background: '#808080', color: '#FFF' },
  darkGray: { background: '#333333', color: '#FFF' },
  orange: { background: '#FBB03B', color: '#FFF' },
  blue: { background: '#3589E7', color: '#FFF' }
};

const CalculatorButton: React.FC<CalculatorButtonProps> = ({ children, theme, wide, onClick }) => {
  return (
    <div
      className={styles.calculatorButton}
      style={{ ...backgroundColors[theme || 'blue'], gridColumn: wide ? '1 / 3' : '' }}
    >
      <button onClick={onClick}>
        <span>{children}</span>
      </button>
    </div>
  );
};

export default CalculatorButton;
