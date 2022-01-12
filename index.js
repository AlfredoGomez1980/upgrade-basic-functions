//Iteración #1: Buscar el máximo
//Completa la función que tomando dos números como argumento devuelva el más alto.


function sum(numberOne , numberTwo) {
    if (numberOne > numberTwo) {
        return numberOne;
    } else {
        return numberTwo;
    }
}

console.log(sum(44, 8));


//Iteración #2: Buscar la palabra más larga**

//Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

//Puedes usar este array para probar tu función:


const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(param) {
    longestWord = "";
    for (let i = 0; i < param.length; i++){
        if (longestWord.length < param[i].length) {
            longestWord = param[i];
        }
    }
    return longestWord;
}

console.log(findLongestWord(avengers));


//**Iteración #3: Calcular la suma**

//Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
//Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números de la matriz.

//Puedes usar este array para probar tu función:


const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
    suma = 0;
    for (let i = 0; i < param.length; i++){
        suma += param[i];
    }
    return suma;
}

console.log(sumAll(numbers));

//**Iteración #4: Calcular el promedio**

//Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:


const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(param) {
    suma = 0;
    for (let i = 0; i < param.length; i++){
       suma += param[i];
    }
    media = suma / param.length;
    return media;
}

console.log(average(numbers));


//**Iteración #6: Valores únicos**

//Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:


const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];

function removeDuplicates(param) {
    let unicos = [];
    for (let i = 0; i < param.length; i++){
        let uniqueWords = param[i];
        if (!unicos.includes(param[i])) {
            unicos.push(uniqueWords);
        }
    }
    return unicos
}

console.log(removeDuplicates(duplicates));

//Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función:


const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];


function finderName(param,name) {
    
    for (let i = 0; i < param.length; i++){
        if (param.includes(name)) {
            return true;
        } else {
            return false;
        }
    }
}

console.log(finderName(nameFinder,'Clint'));

//**Iteration #8: Contador de repeticiones**

//Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.  Puedes usar este array para probar tu función:

const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
];

function repeatCounter (words) {
    let countedWords = [];
  
    words.forEach(function (words) {
      if (words in countedWords) {
        countedWords[words]++;
      }
      else {
        countedWords[words] = 1;
      }
    });
  
    return countedWords;
}

console.log(repeatCounter(counterWords));






  


