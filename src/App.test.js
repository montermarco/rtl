import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'change to blue' });
  expect(colorButton).toHaveStyle({ backgroundColor: 'red'});
  
  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });
  // expect(colorButton.textContent).toBe('change to red');

});

test('button has correct initial text', () => {
});

test('button turns to blue when clicked', () => {
});