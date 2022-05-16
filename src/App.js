import { useState } from 'react';
import './App.css';

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
};

function App() {
  const [buttonColor, setButtonColor] = useState('MediumVioletRed');
  const [checkBox, setCheckBox] = useState(false);
  
  const newButtonColor = buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';

  return (
    <div>
      <input 
        type="checkbox" 
        checked={checkBox}
        onChange={ () => setCheckBox(!checkBox)}
        id='disable-button-checkbox'
        />
      <label htmlFor='disable-button-checkbox'>disable button</label>  
      <button 
        style={{ backgroundColor: checkBox ? 'gray' : buttonColor }}
        onClick={ () => setButtonColor(newButtonColor)}
        disabled={checkBox}
        >
        change to {replaceCamelWithSpaces(newButtonColor)}
      </button>
    </div>
  );
}

export default App;
