import caesarCipher from './cipher.js';
// index.js

document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('text');
    const shiftSelect = document.getElementById('shift');
    const encodeBtn = document.getElementById('encodeBtn');
    const decodeBtn = document.getElementById('decodeBtn');
    const clearBtn = document.getElementById('clearBtn');
    const encodedText = document.getElementById('encodedText');
    const decodedText = document.getElementById('decodedText');

    encodeBtn.addEventListener('click', () => {
        const text = textInput.value;
        const shift = parseInt(shiftSelect.value);
        const encoded = caesarCipher(text, shift);
        encodedText.textContent = encoded;
    });

    decodeBtn.addEventListener('click', () => {
        const text = textInput.value;
        const shift = parseInt(shiftSelect.value);
        const decoded = caesarCipher(text, 26 - shift); // To decode, use the inverse shift.
        decodedText.textContent = decoded;
    });

    clearBtn.addEventListener('click', () => {
        textInput.value = '';
        encodedText.textContent = '';
        decodedText.textContent = '';
    });
});
