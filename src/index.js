import caesarCipher from './cipher.js';
// index.js

const inputTextElement = document.getElementById('inputText');
const shiftAmountElement = document.getElementById('shiftAmount');
const encodedTextElement = document.getElementById('encodedText');
const decodedTextElement = document.getElementById('decodedText');

function encode() {
  const inputText = inputTextElement.value;
  const shiftAmount = parseInt(shiftAmountElement.value);
  const encodedText = caesarCipher(inputText, shiftAmount);
  encodedTextElement.value = encodedText;
  decodedTextElement.value = ''; // Limpiamos el campo de texto "Decoded Text" al hacer clic en "Encode"
}

function decode() {
  // Simplemente asignamos el valor del campo de texto de entrada al campo de texto "Decoded Text"
  decodedTextElement.value = inputTextElement.value;
}

function clearText() {
  inputTextElement.value = '';
  encodedTextElement.value = '';
  decodedTextElement.value = '';
}
