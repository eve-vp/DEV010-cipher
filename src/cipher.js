//function caesarCipher(text, shift) { ... }: Esta línea define una función llamada caesarCipher que toma dos argumentos: //
// text (el texto que deseas cifrar o descifrar) y //
// shift (el número de posiciones para desplazar cada letra).//
  
function caesarCipher(text, shift) {
  //let result = '';: Declara una variable llamada result y la inicializa con una cadena vacía. 
  Esta variable se utilizará para almacenar el resultado del cifrado César.//
  let result = '';
//Inicia un bucle for que recorre cada carácter en la cadena de texto text.//
  for (let i = 0; i < text.length; i++) {
    let char = text[i];
// Declara una variable llamada char y la inicializa con el carácter actual en la posición i del texto.//    
    if (char.match(/[a-z]/i)) {
// Verifica si el carácter es una letra mayúscula o minúscula utilizando una expresión regular.// 
//Esto se hace para asegurarse de que solo se cifren las letras y no otros caracteres, como espacios o símbolos.//
      const code = text.charCodeAt(i);
//Obtiene el valor Unicode (el código) del carácter actual en la posición i del texto.//
// Comprueba si el código corresponde a una letra mayúscula en el alfabeto (códigos Unicode 65 a 90 representan A-Z).//
      if (code >= 65 && code <= 90) {
// Resta 65 al código Unicode. Esto normaliza el código de la letra de modo que 'A' tenga un valor de 0, 'B' tenga un valor de 1, y así sucesivamente.//
        char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
// Comprueba si el código corresponde a una letra minúscula en el alfabeto (códigos Unicode 97 a 122 representan a-z).//
      } else if (code >= 97 && code <= 122) {
        char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
      }
    }
//Agrega el carácter cifrado o sin cambios al resultado result//
    result += char;
  }
// Devuelve el resultado final del cifrado César después de procesar todo el texto de entrada.//
  return result;
}
