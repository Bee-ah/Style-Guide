global.ResizeObserver = require('resize-observer-polyfill')
import { render, screen } from '@testing-library/react';
import App from './App';

test('teste do titulo', () => {
  render(<App />);
  const testCase = document.querySelector('.App h1');
  expect(testCase).toHaveTextContent(/meu painel de controle/i);
});
