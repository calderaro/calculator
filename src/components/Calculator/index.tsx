import React, { useState } from 'react';
import CalculatorKeys from '../CalculatorKeys';
import styles from './styles.module.css';

export interface CalculatorProps {}

export const Calculator: React.FC = () => {
  const [displayValue, setDisplayValue] = useState<string>('0');
  const [firstValue, setFirstValue] = useState<string>('0');
  const [secondValue, setSecondValue] = useState<string>('0');
  const [justChanged, setJustChanged] = useState(false);
  const [justOperated, setJustOperated] = useState(false);
  const [operation, setOperation] = useState('');

  console.log({
    displayValue,
    firstValue,
    secondValue,
    operation,
    justChanged,
    justOperated
  });

  //console.log(Number(firstValue as string), Number(secondValue as string));

  return (
    <div className={styles.calculator}>
      <div className={styles.value}>
        <span>{displayValue}</span>
      </div>
      <CalculatorKeys
        onKeyDown={(e) => {
          const hasFirst = Number(firstValue) > 0;
          const hasSecond = Number(secondValue) > 0;
          const hasOperation = operation.length > 0;

          if (e.type === 'digit') {
            if (!justOperated && hasFirst && hasOperation) {
              let nval = justChanged ? '0' : secondValue;

              if (e.value === '.' && /\./.test(secondValue || '')) {
                return; //value already has a dot
              }

              nval = nval + e.value;

              if (/^0[0-9]/.test(nval)) {
                // check if value starts with zero and remove it
                nval = nval.slice(1);
              }

              setSecondValue(nval);
              setDisplayValue(nval);
              setJustChanged(false);
            } else {
              let nval = justOperated ? '0' : firstValue;

              if (e.value === '.' && /\./.test(nval || '')) {
                return; //value already has a dot
              }

              nval = nval + e.value;

              if (/^0[0-9]/.test(nval)) {
                // check if value starts with zero and remove it
                nval = nval.slice(1);
              }

              setFirstValue(nval);
              //setSecondValue(nval);
              setDisplayValue(nval);
              return;
            }
          }

          if (e.value === 'ac') {
            // clean
            setDisplayValue('0');
            setFirstValue('0');
            setSecondValue('0');
            setOperation('');
            setJustChanged(false);
            setJustOperated(false);
            return;
          }

          if (e.value === '%') {
            const val = String(Number(firstValue as string) / 100);
            setDisplayValue(val);
            setFirstValue(val);
            //setSecondValue('0');
            //setOperation('');
            return;
          }

          if (e.value === 'invert') {
            const val = String(Number(firstValue as string) * -1);
            setDisplayValue(val);
            setFirstValue(val);
            //setSecondValue('0');
            //setOperation('');
            return;
          }

          // if (e.value === '=' && !hasOperation) {
          //   setJustOperated(true);
          //   return;
          // }

          if (e.value === '=' && hasOperation) {
            let nval = '0';

            if (operation === 'addition') {
              nval = String(Number(firstValue as string) + Number(secondValue as string));
            } else if (operation === 'subtraction') {
              nval = String(Number(firstValue as string) - Number(secondValue as string));
            } else if (operation === 'multiplication') {
              nval = String(Number(firstValue as string) * Number(secondValue as string));
            } else if (operation === 'division') {
              nval = String(Number(firstValue as string) / Number(secondValue as string));
            }

            setFirstValue(nval);
            setDisplayValue(nval);
            setJustOperated(true);
            //setJustChanged(true);
            return;
          }

          if (e.type === 'operator' && e.value !== '=') {
            if (justOperated) {
              setOperation(e.value);
              setJustOperated(false);
              setJustChanged(true);
              return;
            }

            if (!hasOperation) {
              setOperation(e.value);
              setSecondValue(firstValue);
              setJustChanged(true);
              return;
            }

            let nval = '0';

            if (operation === 'addition') {
              nval = String(Number(firstValue as string) + Number(secondValue as string));
            } else if (operation === 'subtraction') {
              nval = String(Number(firstValue as string) - Number(secondValue as string));
            } else if (operation === 'multiplication') {
              nval = String(Number(firstValue as string) * Number(secondValue as string));
            } else if (operation === 'division') {
              nval = String(Number(firstValue as string) / Number(secondValue as string));
            }

            setOperation(e.value);
            setDisplayValue(nval);
            setFirstValue(nval);
            //setSecondValue(firstValue);
            setJustChanged(true);
            return;
          }
        }}
      />
    </div>
  );
};
