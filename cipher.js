
function caesarCipher(text, shift) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const textUpperCase = text.toUpperCase();
    let result = '';

    for (let i = 0; i < textUpperCase.length; i++) {
        const char = textUpperCase[i];
        if (char === ' ') {
            result += ' ';
        } else {
            const charIndex = alphabet.indexOf(char);
            const encodedIndex = (charIndex + shift) % 26;
            result += alphabet[encodedIndex];
        }
    }

    return result;
}
