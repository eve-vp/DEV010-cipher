import caesarCipher from './cipher.js';
// index.js
// Eventos del Don de atributo ID
const inputTextElement = document.getElementById('inputText');
// campo donde se ingresa un valor numérico, como la cantidad de desplazamiento en un cifrado César.//
const shiftAmountElement = document.getElementById('shiftAmount');
//se usa para acceder a un área o elemento donde se muestra o ingresa texto que se desea cifrar.//
const encodeTextElement = document.getElementById('encodeText');
//se usa para acceder a un área o elemento donde se muestra o ingresa texto que se desea descifrar.//
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
