const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    let splitted = text.split(" ");
    let totalWords = 0;
    for(let i = 0; i < splitted.length; i++) {
        if (splitted[i] !== "") {
            totalWords++;
        }
    }
    return totalWords;
  },
  getCharacterCount: (text) => {
    return text.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
      let expresion = /[^\W\d]/g;
      let onlyL = text.match(expresion);
      let countingLetters = 0;
      for (let i = 0; i < onlyL.length; i++) {
          countingLetters++;
      }
      return countingLetters;
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
      let splitted = text.split(" ");
      let totalWords = 0;
      let lengthWords = 0;
      let average = 0;
      for(let i = 0; i < splitted.length; i++) {
          if (splitted[i] !== "") {
              totalWords++;
              lengthWords = lengthWords + splitted[i].length;
              average = lengthWords / totalWords;
          }
      } //si el promedio tiene decimales entonces tofixed

      if (average % 1 != 0) {
        return average.toFixed(2);
      }

      return average;
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
      let matchingNumbers = /\d+([/.]\d+)?\b/g;
      let numbers = text.match(matchingNumbers);
      let numberCount = 0;
      if (numbers !== null) {
          for (let i = 0; i < numbers.length; i++) {
            numberCount++;
          }
      }
      return numberCount;
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    let matchingNumbers = /\d+([/.]\d+)?\b/g;
    let numbers = text.match(matchingNumbers);
    let numberSum = 0;
    if (numbers !== null) {
      for (let i = 0; i < numbers.length; i++) {
        numberSum = parseFloat(numberSum) + parseFloat(numbers[i]);
      }
    }
  return numberSum;
  },
};

export default analyzer;
