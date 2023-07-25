import caesarCipher from './cipher.js';
// index.js

describe('cipher', () => {

    it('should be an object', () => {
        expect(typeof cipher).toBe('object');
    });

    describe('cipher.encode', () => {

        it('should be a function', () => {
            expect(typeof cipher.encode).toBe('function');
        });

        it('should throw TypeError when invoked with wrong argument types', () => {
            expect(() => cipher.encode()).toThrow(TypeError);
            expect(() => cipher.encode(0)).toThrow(TypeError);
            expect(() => cipher.encode(null, [])).toThrow(TypeError);
            expect(() => cipher.encode(0, 0)).toThrow(TypeError);
        });

        it('should return "HIJKLMNOPQRSTUVWXYZABCDEFG" for "ABCDEFGHIJKLMNOPQRSTUVWXYZ" with offset 33', () => {
            expect(cipher.encode(33, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ')).toBe('HIJKLMNOPQRSTUVWXYZABCDEFG');
        });

        it('should return "hijklmnopqrstuvwxyzabcdefg" for "abcdefghijklmnopqrstuvwxyz" with offset 33', () => {
            expect(cipher.encode(33, 'abcdefghijklmnopqrstuvwxyz')).toBe('hijklmnopqrstuvwxyzabcdefg');
        });

        it('should return " !@" for " !@"', () => {
            expect(cipher.encode(33, ' !@')).toBe(' !@');
        });
    });

    describe('cipher.decode', () => {

        it('should be a function', () => {
            expect(typeof cipher.decode).toBe('function');
        });

        it('should throw TypeError when invoked with wrong argument types', () => {
            expect(() => cipher.decode()).toThrow(TypeError);
            expect(() => cipher.decode(0)).toThrow(TypeError);
            expect(() => cipher.decode(null, [])).toThrow(TypeError);
            expect(() => cipher.decode(0, 0)).toThrow(TypeError);
        });

        it('should return "ABCDEFGHIJKLMNOPQRSTUVWXYZ" for "HIJKLMNOPQRSTUVWXYZABCDEFG" with offset 33', () => {
            expect(cipher.decode(33, 'HIJKLMNOPQRSTUVWXYZABCDEFG')).toBe('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
        });

        it('should return "abcdefghijklmnopqrstuvwxyz" for "hijklmnopqrstuvwxyzabcdefg" with offset 33', () => {
            expect(cipher.decode(33, 'hijklmnopqrstuvwxyzabcdefg')).toBe('abcdefghijklmnopqrstuvwxyz');
        });

        it('should return " !@" para " !@"', () => {
            expect(cipher.decode(33, ' !@')).toBe(' !@');
        });
    });

});


document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('text');
    const shiftSelect = document.getElementById('shift');
    const encodeBtn = document.getElementById('encodeBtn');
    const decodeBtn = document.getElementById('decodeBtn');
    const clearBtn = document.getElementById('clearBtn');
    const encodeText = document.getElementById('encodeText');
    const decodeText = document.getElementById('decodeText');

    encodeBtn.addEventListener('click', () => {
        const text = textInput.value;
        const shift = parseInt(shiftSelect.value);
        const encode = caesarCipher(text, shift);
        encodeText.textContent = encode;
    });

    decodeBtn.addEventListener('click', () => {
        const text = textInput.value;
        const shift = parseInt(shiftSelect.value);
        const decode = caesarCipher(text, 26 - shift); // To decode, use the inverse shift.
        decodeText.textContent = decode;
    });

    clearBtn.addEventListener('click', () => {
        textInput.value = '';
        encodeText.textContent = '';
        decodeText.textContent = '';
    });
});
