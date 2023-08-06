**Cifrador/Descifrador de Cifrado César**

¡Bienvenido al proyecto Cifrador/Descifrador de Cifrado César! Esta es una aplicación web sencilla que te permite cifrar y descifrar texto utilizando la técnica de cifrado César. Este README servirá como un manual de aprendizaje para entender el uso de variables, objetos y todos los comandos necesarios para que la página web funcione correctamente.

**1. Estructura del Proyecto:**

El proyecto consta de tres archivos principales:

- `index.html`: Este archivo contiene la estructura de la página web, incluyendo los campos de entrada, botones y áreas de texto.
- `styles.css`: Este archivo contiene los estilos CSS para hacer que la página web sea visualmente atractiva.
- `cipher.js`: Este archivo contiene la función JavaScript para el cifrado y descifrado del Cifrado César.
- `index.js`: Este archivo contiene el código JavaScript que importa `cipher.js` y maneja las interacciones con la página web.

**2. Entendiendo las Variables:**

En el código JavaScript, encontrarás varias variables. Veamos su propósito:

- `inputTextElement`: Esta variable almacena una referencia al elemento de entrada donde el usuario ingresa el texto que se va a cifrar o descifrar.
- `shiftAmountElement`: Esta variable almacena una referencia al elemento select que permite al usuario elegir el desplazamiento (de 1 a 25).
- `encodeTextElement`: Esta variable almacena una referencia al elemento textarea donde se mostrará el texto cifrado.
- `decodeTextElement`: Esta variable almacena una referencia al elemento textarea donde se mostrará el texto descifrado.

**3. Entendiendo los Objetos:**

La lógica de cifrado y descifrado del Cifrado César está encapsulada en un objeto llamado `cipher`. Sin embargo, en este proyecto, estamos utilizando una versión simplificada con una sola función llamada `caesarCipher`.

**4. La Función `caesarCipher`:**

La función `caesarCipher` toma dos argumentos: `text` (el texto de entrada que se va a cifrar o descifrar) y `shift` (la cantidad de posiciones que se desplazará el alfabeto para el cifrado o descifrado).

- `text`: El texto de entrada proporcionado por el usuario que necesita ser cifrado o descifrado.
- `shift`: El número de posiciones que se desplazará el alfabeto para el cifrado o descifrado.

**5. Funcionalidad de la Página Web:**

Aquí se explica cómo funciona la página web:

- El usuario ingresa una cadena de texto en el campo de entrada.
- El usuario selecciona un valor de desplazamiento del menú desplegable (de 1 a 25).
- Cuando se hace clic en el botón "Cifrar", se ejecuta la función `encode()`.
- Cuando se hace clic en el botón "Descifrar", se ejecuta la función `decode()`.
- Las funciones `encode()` y `decode()` utilizan la función `caesarCipher` para realizar el cifrado o descifrado correspondiente.
- El texto cifrado y descifrado se muestra en sus respectivos elementos textarea.
- El botón "Limpiar" permite al usuario restablecer los campos de texto y empezar de nuevo.

**6. Ejecutar el Proyecto:**

Para ejecutar el proyecto, simplemente abre el archivo `index.html` en un navegador web. La página web se cargará y podrás comenzar a cifrar y descifrar texto utilizando la técnica de cifrado César.

**7. Puntos de Aprendizaje:**

Al estudiar este proyecto, aprenderás sobre:
- La estructura HTML para páginas web, incluyendo campos de entrada, botones y áreas de texto.
- Estilos CSS para mejorar la apariencia visual de los elementos web.
- Variables en JavaScript y su uso para almacenar y manipular datos.
- Funciones en JavaScript y cómo definirlas y llamarlas.
- Importar archivos JavaScript externos y utilizar funciones de los mismos.
- Encapsulación de la lógica en funciones y objetos.

**8. Que es y para que sirve:**
- Los elementos <input> de tipo text crean campos de texto básicos de una sola línea.
        input type="text"
- Un placeholder es un código de «ocupante de espacio»
	      placeholder="Enter your text">
- El Elemento HTML <label> representa una etiqueta, el atributo for, o ubicando el control dentro del elemento label.
	     <label for="shiftAmount">
- La cantidad máxima de cambio
	    "shiftAmount"
- Devuelve una referencia al elemento por su ID
	    const shiftAmountElement = document.getElementById('shiftAmount');

-<option> se usa para representar un item dentro de un <select>
     option.text = i.toString();
        option.value = i;
        shiftAmountElement.appendChild(option);

- Bucles e iteración: forma rápida y sencilla de hacer algo repetidamente.
        for (let i = 0; i < text.length; i++) {
                let char = text[i];


**9. Mejoras Adicionales:**

Siéntete libre de expandir este proyecto agregando más algoritmos de cifrado o creando una interfaz de usuario para diferentes cifrados. También puedes explorar conceptos más avanzados de desarrollo web, como el manejo de validación de formularios y manejo de errores.

**¡Feliz aprendizaje y codificación!**




**Caesar Cipher Encoder/Decoder**

Welcome to the Caesar Cipher Encoder/Decoder project! This is a simple web application that allows you to encode and decode text using the Caesar Cipher encryption technique. This README will serve as a learning manual to understand the usage of variables, objects, and all the necessary commands to make the web page function properly.

**1. Project Structure:**

The project consists of three main files:

- `index.html`: This file contains the structure of the webpage, including the input fields, buttons, and text areas.
- `styles.css`: This file contains the CSS styles to make the webpage visually appealing.
- `cipher.js`: This file contains the JavaScript function for the Caesar Cipher encryption and decryption.
- `index.js`: This file contains the JavaScript code that imports the `cipher.js` and handles the interactions with the webpage.

**2. Understanding Variables:**

In the JavaScript code, you will encounter several variables. Let's understand their purpose:

- `inputTextElement`: This variable stores a reference to the input element where the user enters the text to be encoded or decoded.
- `shiftAmountElement`: This variable stores a reference to the select element that allows the user to choose the shift amount (1 to 25).
- `encodeTextElement`: This variable stores a reference to the textarea element where the encoded text will be displayed.
- `decodeTextElement`: This variable stores a reference to the textarea element where the decoded text will be displayed.

**3. Understanding Objects:**

The Caesar Cipher encoding and decoding logic is encapsulated in an object called `cipher`. However, in this project, we are using a simplified version with only a single function called `caesarCipher`.

**4. The `caesarCipher` Function:**

The `caesarCipher` function takes two arguments: `text` (the input text to be encoded/decoded) and `shift` (the shift amount).

- `text`: The input text provided by the user that needs to be encoded or decoded.
- `shift`: The number of positions the alphabet should be shifted for encryption or decryption.

**5. Web Page Functionality:**

Here's a breakdown of how the web page works:

- The user enters a text string in the input field.
- The user selects a shift amount from the dropdown list (1 to 25).
- When the "Encode" button is clicked, the `encode()` function is executed.
- When the "Decode" button is clicked, the `decode()` function is executed.
- The `encode()` and `decode()` functions utilize the `caesarCipher` function to perform the corresponding encryption or decryption.
- The encoded and decoded text is displayed in their respective textarea elements.
- The "Clear" button allows the user to reset the input and output text areas to start fresh.

**6. Running the Project:**

To run the project, simply open the `index.html` file in a web browser. The webpage will load, and you can start encrypting and decrypting text using the Caesar Cipher technique.

**7. Learning Points:**

By studying this project, you'll learn about:
- HTML structure for webpages, including input fields, buttons, and text areas.
- CSS styles to enhance the visual appearance of web elements.
- JavaScript variables and their use in storing and manipulating data.
- JavaScript functions and how to define and call them.
- Importing external JavaScript files and using functions from them.
- Encapsulation of logic in functions and objects.

**8. Additional Improvements:**

Feel free to expand upon this project by adding more encryption algorithms or creating a user interface for different ciphers. You can also explore more advanced web development concepts, such as handling form validation and error handling.

**Happy learning and coding!**
