import caesarCipher from './cipher.js';
// index.js

const inputTextElement = document.getElementById('inputText');
const shiftAmountElement = document.getElementById('shiftAmount');
const encodeTextElement = document.getElementById('encodeText');
const decodeTextElement = document.getElementById('decodeText');

function encode() {
  const inputText = inputTextElement.value;
  const shiftAmount = parseInt(shiftAmountElement.value);
  const encodeText = caesarCipher(inputText, shiftAmount);
  encodeTextElement.value = encodeText;
  decodeTextElement.value = ''; // Limpiamos el campo de texto "Decode Text" al hacer clic en "Encode"
}

function decode() {
  // Simplemente asignamos el valor del campo de texto de entrada al campo de texto "Decode Text"
  decodeTextElement.value = inputTextElement.value;
}

function clearText() {
  inputTextElement.value = '';
  encodeTextElement.value = '';
  decodeTextElement.value = '';
}
