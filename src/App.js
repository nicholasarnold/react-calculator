import React, { useState } from 'react';
import { Display } from './components/Display/Display';
import { BackspaceButton } from './components/BackspaceButton/BackspaceButton';
import { ClearButton } from './components/ClearButton/ClearButton';
import { AllClearButton } from './components/AllClearButton/AllClearButton';
import { NumberButton } from './components/NumberButton/NumberButton';
import { FunctionButton } from './components/FunctionButton/FunctionButton';
import { DecimalButton } from './components/DecimalButton/DecimalButton';
import { EqualsButton } from './components/EqualsButton/EqualsButton';

const styles = {
  app: {
    width: 600
  },
  currentValue: {
    border: 1,
    borderColor: 'lightgray',
    borderRadius: 10,
    borderStyle: 'solid',
    fontSize: '2rem',
    padding: 10,
    textAlign: 'right',
    width: '100%',
  }
}

const App = () => {
  const [currentValueIsPlaceholder, setCurrentValueIsPlaceholder] = useState(true);
  const [currentValue, setCurrentValue] = useState('0');
  const [currentResult, setCurrentResult] = useState('0');
  const [entries, setEntries] = useState([]);
  
  //console.log(`|${currentValue}|` + typeof currentValue);
  console.log(`entries: ${entries}\ncurrentValue: ${currentValue}\ncurrentResult: ${currentResult}\ncurrentValueIsPlaceholder: ${currentValueIsPlaceholder}`);

  const handleNumberOnClick = value => {
    if (currentValueIsPlaceholder) {
      setCurrentValue(value);
      setCurrentValueIsPlaceholder(false);
    } else {
      setCurrentValue(`${currentValue}${value}`);
    }
  }

  const handleDecimalOnClick = () => {
    if (currentValueIsPlaceholder) {
      setCurrentValue(`0.`);
      setCurrentValueIsPlaceholder(false);
    } else {
      if (!currentValue.includes('.')) {
        setCurrentValue(`${currentValue}.`);
        setCurrentValueIsPlaceholder(false);
      }
    }
  }

  const handleBackspaceOnClick = () => {
    if (currentValue.length === 1) {
      setCurrentValue('0');
    } else {
      setCurrentValue(currentValue.slice(0, currentValue.length - 1));
    }
  }

  const handleClearEntryOnClick = () => {
    setCurrentValue('0');
    setCurrentValueIsPlaceholder(true);
  }

  const handleAllClearOnClick = () => {
    setCurrentValue('0');
    setCurrentResult('0');
    setEntries([]);
    setCurrentValueIsPlaceholder(true);
  }

  const handleFunctionOnClick = calcFunction => {
    if (Number(entries[entries.length - 1]) || Number(currentValue) || entries.length === 0) {
      setEntries(entries.concat(currentValue, calcFunction));
      setCurrentValue('');
    } else {
      entries.pop();
      setEntries(entries.concat(calcFunction));
      setCurrentValue('');
    }
  }

  const handleEqualsOnClick = () => {
    setCurrentValue(eval(entries.concat(currentValue).join('')).toString());
    setCurrentResult(`${entries.concat(currentValue).join(' ')} =`);
    setCurrentValueIsPlaceholder(true);
    setEntries([]);
  }

  return (
    <div className="App container" style={styles.app}>
      <div className="row">
        <div className="col">
          <h1>Calculator w/ React</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Display currentValue={currentValue} currentResult={currentResult} entries={entries} />
        </div>
      </div>
      <div className="row">
        <div className="col">
        </div>
        <div className="col">          
        </div>
        <div className="col">
          <ClearButton handleClearEntryOnClick={handleClearEntryOnClick} />
        </div>
        <div className="col">
          <AllClearButton handleAllClearOnClick={handleAllClearOnClick} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <NumberButton value="7" handleNumberOnClick={handleNumberOnClick} />
        </div>
        <div className="col">
          <NumberButton value="8" handleNumberOnClick={handleNumberOnClick} />
        </div>
        <div className="col">
          <NumberButton value="9" handleNumberOnClick={handleNumberOnClick} />
        </div>
        <div className="col">
          <FunctionButton value="/" handleFunctionOnClick={handleFunctionOnClick} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <NumberButton value="4" handleNumberOnClick={handleNumberOnClick} />
        </div>
        <div className="col">
          <NumberButton value="5" handleNumberOnClick={handleNumberOnClick} />
        </div>
        <div className="col">
          <NumberButton value="6" handleNumberOnClick={handleNumberOnClick} />
        </div>
        <div className="col">
        <FunctionButton value="*" handleFunctionOnClick={handleFunctionOnClick} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <NumberButton value="1" handleNumberOnClick={handleNumberOnClick} />
        </div>
        <div className="col">
          <NumberButton value="2" handleNumberOnClick={handleNumberOnClick} />
        </div>
        <div className="col">
          <NumberButton value="3" handleNumberOnClick={handleNumberOnClick} />
        </div>
        <div className="col">
          <FunctionButton value="-" handleFunctionOnClick={handleFunctionOnClick} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <NumberButton value="0" handleNumberOnClick={handleNumberOnClick} />
        </div>
        <div className="col">
          <DecimalButton handleDecimalOnClick={handleDecimalOnClick} />
        </div>
        <div className="col">
          <EqualsButton handleEqualsOnClick={handleEqualsOnClick} />
        </div>
        <div className="col">
          <FunctionButton value="+" handleFunctionOnClick={handleFunctionOnClick} />
        </div>
      </div>
      <div>
        <small>
          Copyright &copy; 2019 <a href="https://github.com/nicholasarnold">Nicholas Arnold</a>. MIT License.
        </small>
      </div>
    </div>
  );
}

export default App;