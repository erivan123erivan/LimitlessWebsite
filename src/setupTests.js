// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import { TextDecoder, TextEncoder } from 'util';
import '@testing-library/jest-dom';
import './i18n';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
window.scrollTo = jest.fn();

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  configurable: true,
  value: query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  }),
});
