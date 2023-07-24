import cipher from './cipher.js';

console.log(cipher);
const inputTextElement = document.getElementById('inputText');
const shiftAmountElement = document.getElementById('shiftAmount');
const encodedTextElement = document.getElementById('encodedText');
const decodedTextElement = document.getElementById('decodedText');

function encode() {
  const inputText = inputTextElement.value;
  const shiftAmount = parseInt(shiftAmountElement.value);
  const encodedText = caesarCipher(inputText, shiftAmount);
  encodedTextElement.value = encodedText;
  decodedTextElement.value = ''; // Clear the decoded text area
}

function decode() {
  const inputText = inputTextElement.value;
  const shiftAmount = parseInt(shiftAmountElement.value);
  // Decoding is just encoding with a negative shift
  const decodedText = caesarCipher(inputText, -shiftAmount);
  decodedTextElement.value = decodedText;
}

function clearText() {
  inputTextElement.value = '';
  encodedTextElement.value = '';
  decodedTextElement.value = '';
}
