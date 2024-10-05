import React, { useState } from 'react';
import './App.css';

function App() {
  const [displayValue, setDisplayValue] = useState('');
  const [operator, setOperator] = useState('');
  const [firstValue, setFirstValue] = useState('');

  const appendNumber = (number) => {
    setDisplayValue(displayValue + number);
  };

  const chooseOperator = (op) => {
    if (displayValue === '') return;
    setOperator(op);
    setFirstValue(displayValue);
    setDisplayValue('');
  };

  const calculate = () => {
    if (firstValue === '' || displayValue === '') return;

    const secondValue = displayValue;
    let result;

    switch (operator) {
      case '+':
        result = parseFloat(firstValue) + parseFloat(secondValue);
        break;
      case '-':
        result = parseFloat(firstValue) - parseFloat(secondValue);
        break;
      case '*':
        result = parseFloat(firstValue) * parseFloat(secondValue);
        break;
      case '/':
        result = parseFloat(firstValue) / parseFloat(secondValue);
        break;
      default:
        return;
    }

    setDisplayValue(result.toString());
    setFirstValue('');
    setOperator('');
  };

  const clearDisplay = () => {
    setDisplayValue('');
    setOperator('');
    setFirstValue('');
  };

  const displayFullName = () => {
    setDisplayValue('Xian Meg Calma');
  };

  return (
    <div className="calculator">
      <div className="calculator-header">
        <h2>Calculator of Xian Meg Calma - IT3A</h2>
      </div>
      <input
        type="text"
        className="display"
        value={displayValue}
        disabled
      />
      <div className="buttons">
        <button onClick={() => appendNumber('7')}>7</button>
        <button onClick={() => appendNumber('8')}>8</button>
        <button onClick={() => appendNumber('9')}>9</button>
        <button onClick={() => chooseOperator('/')}>÷</button>

        <button onClick={() => appendNumber('4')}>4</button>
        <button onClick={() => appendNumber('5')}>5</button>
        <button onClick={() => appendNumber('6')}>6</button>
        <button onClick={() => chooseOperator('*')}>×</button>

        <button onClick={() => appendNumber('1')}>1</button>
        <button onClick={() => appendNumber('2')}>2</button>
        <button onClick={() => appendNumber('3')}>3</button>
        <button onClick={() => chooseOperator('-')}>−</button>

        <button onClick={() => appendNumber('0')}>0</button>
        <button onClick={clearDisplay}>C</button>
        <button onClick={calculate}>=</button>
        <button onClick={() => chooseOperator('+')}>+</button>

        {/* Custom Surname Button */}
        <button className="surname-btn" onClick={displayFullName}>Calma</button>
      </div>
    </div>
  );
}

export default App;
