import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

//____________
//Esta función recarga la página entera con el event listener onclick del boton
function buttonReset() {
    window.location.reload();
}

//_____________
//Obteniendo el valor de text area
//Declaro la variable text vacía, e inputText que toma ta de HTML
//a inputText le aplico el método addEventListener
//con el tipo de evento input y la función getText
//que inicializa mi variable text con el valor de inputText (gebi"ta")
// luego ejecuta las funciones

let text;
let inputText = document.getElementById("ta");
inputText.addEventListener("input", function getText() {
    text = inputText.value;
    document.querySelector('[data-testid="word-count"]').innerHTML=analyzer.getWordCount(text) + " Palabras";
    document.querySelector('[data-testid="character-count"]').innerHTML=analyzer.getCharacterCount(text) + " Caracteres";
    document.querySelector('[data-testid="character-no-spaces-count"]').innerHTML=analyzer.getCharacterCountExcludingSpaces(text) + " Letras";
    document.querySelector('[data-testid="word-length-average"]').innerHTML=analyzer.getAverageWordLength(text) + " Promedio";
    document.querySelector('[data-testid="number-count"]').innerHTML=analyzer.getNumberCount(text) + " Números";
    document.querySelector('[data-testid="number-sum"]').innerHTML=analyzer.getNumberSum(text) + " Suma";
});



























//Lamados a las funciones de prueba
// countCaracters(text);
    // countWords();
    // numberCounting();
    // numberAdding();
    // averageCalculation();
    // onlyLetters()

// //_____________
// //Funcion para contar caracteres
// //Esta función cuenta los caracteres llamando a la variable text antes declarada
// //querySelector llama al primer elemento que contenga lo que se le pasa de argumento
// // que en este caso es el data-testid para que con
// //innethtml le escriba el largo de text + palabras

// //Funcion para contar caracteres ____________
// function countCaracters(text) {
//     document.querySelector('[data-testid="character-count"]').innerHTML=text.length + " Caracteres";
// }

// //__________________
// //Funcion para contar palabras
// //Dentro de la función declaro las variables
// //sptlitted que vale el texto spliteado (me convierte el texto en un arreglo que se separa en los indicas cada que hay un espacio)
// //totalWords esta inicializada en 0 y está dentro de la función para que se inicialice en 0 en cada iteración
// //si la dejo global concerva el conteo
// //Entro al for con el largo de splitted
// //si splitted en el indice dado no es igual a 0 entonces se suma 1 a totalWords
// //si no nada
// //y se escribe el resultado en el Dom con el innerHTML


// function countWords() {
//     let splitted = text.split(" ");
//     let totalWords = 0;
//     for(let i = 0; i < splitted.length; i++) {
//         if (splitted[i] !== "") {
//             totalWords++;
//         }
//     }
//     document.querySelector('[data-testid="word-count"]').innerHTML=totalWords + " Palabras";
// }

// //______________
// //Funciones para números ej: [1, 2, 12. 1.2]
// //number count = 4
// //number sum = 16.2

// //Funcion para contar numeros_________
// function numberCounting() {
//     let matchingNumbers = /\d+/g;
//     let numbers = text.match(matchingNumbers);
//     let numberCount = 0;
//     if (numbers.length !== null) {
//         for (let i = 0; i < numbers.length; i++) {
//          numberCount++;
//         }
//     }
//     document.querySelector('[data-testid="number-count"]').innerHTML=numberCount + " Números";
// }

// //Funcion para sumar numeros _____________
// function numberAdding() {
//     let matchingNumbers = /\d+/g;
//     let numbers = text.match(matchingNumbers);
//     let numberSum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         numberSum = parseFloat(numberSum) + parseFloat(numbers[i]);
//     }
//     document.querySelector('[data-testid="number-sum"]').innerHTML=numberSum + " Suma";
// }

// //Funcion para sacar el promedio___________
// function averageCalculation() {
//     let splitted = text.split(" ");
//     let totalWords = 0;
//     let lengthWords = 0;
//     let average = 0;
//     for(let i = 0; i < splitted.length; i++) {
//         if (splitted[i] !== "") {
//             totalWords++;
//             lengthWords = lengthWords + splitted[i].length;
//             average = lengthWords / totalWords;
//         }
//     }
//     document.querySelector('[data-testid="word-length-average"]').innerHTML=average + " Promedio";
// }

// //Funcion para contar solo letras____________
// function onlyLetters() {
//     let expresion = /[^\W\d]/g;
//     let onlyL = text.match(expresion);
//     let countingLetters = 0;
//     for (let i = 0; i < text.length; i++) {
//         countingLetters++;
//     }
//     document.querySelector('[data-testid="character-no-spaces-count"]').innerHTML=countingLetters + " Letras";
// }