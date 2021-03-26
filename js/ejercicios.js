//ejercicio 11
const removerVocales = (str) => {
  let arrVocales = [
    "A",
    "Á",
    "a",
    "á",
    "E",
    "É",
    "é",
    "e",
    "I",
    "Í",
    "i",
    "í",
    "O",
    "Ó",
    "o",
    "ó",
    "U",
    "Ú",
    "u",
    "ú",
  ];
  //let arrVocales = [..."aeiouAEIOU"]
  for (let i = 0; i < str.length; i++) {
    if (arrVocales.includes(str[i])) {
      str = str.replace(str[i], "");
      i--;
    }
  }

  return str;
};
// return str.replace(/[aáAÁeéEÉiíIÍoOóÓuúUÚ]/gi, "")
console.log(removerVocales("hola como estas"));
console.log(removerVocales("holaAa como estas"));
console.log(removerVocales("Hola Mundo"));
console.log(removerVocales("Hola URUGUAY"));

//ejercicio 12
const encontrarImpar = (arrNums) => {
  let repeatTime = {};
  arrNums.map((num) => {
    if (!repeatTime[num]) {
      repeatTime[num] = 1;
    } else {
      repeatTime[num]++;
    }
  });
  return Object.keys(repeatTime).find((key) => repeatTime[key] % 2 !== 0);
};

console.log(encontrarImpar([8]));
console.log(encontrarImpar([2, 2, 2, 2, 8, 2, 2]));
console.log(
  encontrarImpar([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])
);

//ejercicio 13
const sumarMultiplos = (num) => {
  let output = 0;

  for (let i = 3; i < num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      output += i;
    }
  }
  return output;
};

console.log(sumarMultiplos(1));
console.log(sumarMultiplos(2));
console.log(sumarMultiplos(3));
console.log(sumarMultiplos(6));
console.log(sumarMultiplos(10));

//ejercicio 14
const caminoOptimo = (camino) => {
  let caminoOptimo = [...camino];
  let opuestos = {
    NORTE: "SUR",
    SUR: "NORTE",
    ESTE: "OESTE",
    OESTE: "ESTE",
  };

  for (let i = 0; i < caminoOptimo.length - 1; i++) {
    if (opuestos[caminoOptimo[i]] === caminoOptimo[i + 1]) {
      caminoOptimo.splice(i, 2);
      i = i - 2;
    }
  }
  return caminoOptimo;
};

console.log(caminoOptimo(["NORTE", "SUR"]));
console.log(caminoOptimo(["NORTE", "SUR", "SUR"]));
console.log(caminoOptimo(["NORTE", "SUR", "SUR", "NORTE"]));
console.log(caminoOptimo(["NORTE", "SUR", "SUR", "SUR"]));
console.log(
  caminoOptimo(["NORTE", "SUR", "SUR", "ESTE", "OESTE", "NORTE", "OESTE"])
);
console.log(caminoOptimo(["NORTE", "OESTE", "SUR", "ESTE"]));

//ejercicio 15
const parentesisCorrectos = (str) => {
  if (str.length % 2 === 1) return false;
  let regExp = /\(\)/g;
  let halfLength = str.length / 2;

  for (let i = 0; i < halfLength; i++) {
    str = str.replace(regExp, "");
  }

  if (str === "") {
    return true;
  } else {
    return false;
  }
};

console.log(parentesisCorrectos("()"));
console.log(parentesisCorrectos(")(()))"));
console.log(parentesisCorrectos("("));
console.log(parentesisCorrectos("(())((()())())"));

//ejercicio 16
const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const encriptar13 = (str, crypt = 13) => {
  let strOutput = "";
  for (let i = 0; i < str.length; i++) {
    if (alphabet.indexOf(str[i]) >= 0) {
      let index = alphabet.indexOf(str[i]);
      // if (index + crypt <= 26) {
      //   strOutput += alphabet[index + crypt];
      // } else {
      //   strOutput += alphabet[index + crypt - 26]; //se puede usar (index+13)%26 me retorna el resto
      // }
      strOutput += alphabet[(index + crypt) % 26];
    } else if (alphabet.indexOf(str[i].toLowerCase()) >= 0) {
      let index = alphabet.indexOf(str[i].toLowerCase());
      strOutput += alphabet[(index + crypt) % 26].toUpperCase();
    } else {
      strOutput += str[i];
    }
  }
  return strOutput;
};

console.log(encriptar13("hola"));
console.log(encriptar13("CHAU"));
console.log(encriptar13("Título"));
console.log(encriptar13("HACK academy 2020"));

//ejercicio 17
const jugar = (userPick) => {
  let randomNum = Math.floor(Math.random() * 3);
  let picks = ["Piedra", "Papel", "Tijera"];
  let botPick = picks[randomNum];

  if (userPick === botPick) {
    console.log(`La computadora eligió ${userPick}. Empataron.`);
  } else if (userPick === "Piedra" && botPick === "Papel") {
    console.log(`La computadora eligió Papel. Perdiste.`);
  } else if (userPick == "Piedra" && botPick == "Tijera") {
    console.log(`La computadora eligió Tijeras. Ganaste.`);
  } else if (userPick == "Papel" && botPick == "Tijera") {
    console.log(`La computadora eligió Tijeras. Perdiste.`);
  } else if (userPick == "Papel" && botPick == "Piedra") {
    console.log(`La computadora eligió Piedra. Ganaste.`);
  } else if (userPick == "Tijera" && botPick == "Papel") {
    console.log(`La computadora eligió Papel. Ganaste.`);
  } else if (userPick == "Tijera" && botPick == "Piedra") {
    console.log(`La computadora eligió Piedra. Perdiste.`);
  }
};

jugar("Piedra");
jugar("Piedra");
jugar("Papel");
jugar("Papel");

//ejercicio 18
const duracionParaHumanos = (segundos) => {
  let strOutput = "";
  let arrOutput = [];

  const oneSecond = 1;
  const oneMinute = oneSecond * 60;
  const oneHour = oneMinute * 60;
  const oneDay = oneHour * 24;
  const oneYear = oneDay * 365;

  let anios = Math.floor(segundos / 31536000); // mejor  Math.floor  XXXXXsegundos / anio = XX anios
  let dias = Math.floor(segundos / 86400); // mejor  Math.floor  XXXXXsegundos / dia  %  365 = XX dias
  let horas = Math.floor(segundos / 3600); // mejor  Math.floor  XXXXXsegundos / hora  %  24 = XX horas
  let minutos = Math.floor((segundos - horas * 3600) / 60); // mejor  Math.floor  XXXXXsegundos / minuto  %  60 = XX minutos
  segundos = segundos - horas * 3600 - minutos * 60; // mejor  Math.floor  XXXXXsegundos %  60 = XX segundos
  if (horas > 23) {
    horas = Math.round((horas / 24 - Math.floor(horas / 24)) * 24);
  }
  if (dias > 364) {
    dias = dias - 365;
  }
  let strAnios = `${anios} anio${checkSandCero(anios)}`;
  if (anios > 0) arrOutput.push(strAnios);

  let strDias = `${dias} dia${checkSandCero(dias)}`;
  if (dias > 0) arrOutput.push(strDias);

  let strHoras = `${horas} hora${checkSandCero(horas)}`;
  if (horas > 0) arrOutput.push(strHoras);

  let strMinutos = `${minutos} minuto${checkSandCero(minutos)}`;
  if (minutos > 0) arrOutput.push(strMinutos);

  let strSegundos = `${segundos} segundo${checkSandCero(segundos)}`;
  if (segundos > 0) arrOutput.push(strSegundos);

  switch (arrOutput.length) {
    case 0:
      strOutput = `ahora`;
      break;
    case 1:
      strOutput = `${arrOutput[0]}`;
      break;
    case 2:
      strOutput = `${arrOutput[0]} y ${arrOutput[1]}`;
      break;
    case 3:
      strOutput = `${arrOutput[0]}, ${arrOutput[1]} y ${arrOutput[2]}`;
      break;
    case 4:
      strOutput = `${arrOutput[0]}, ${arrOutput[1]}, ${arrOutput[2]} y ${arrOutput[3]}`;
      break;
    case 5:
      strOutput = `${arrOutput[0]}, ${arrOutput[1]}, ${arrOutput[2]}, ${arrOutput[3]} y ${arrOutput[4]}`;
      break;
  }

  return strOutput;
};

const checkSandCero = (num) => {
  return num > 1 ? "s" : "";
};

console.log(duracionParaHumanos(0));
console.log(duracionParaHumanos(62));
console.log(duracionParaHumanos(3662));
console.log(duracionParaHumanos(43424234));
console.log(duracionParaHumanos(4342440));

//ejercicio 19

//ejercicio 26
// Crear una función en JavaScript llamada ​ sumarDigitos​ que reciba como
// parámetro un número entero y retorne como resultado otro número entero que se
// calcula sumando los dígitos del número recibido.
// Si el resultado de la suma es un número de más de un dígito, se deberá repetir la
// suma la cantidad de veces que sea necesaria hasta obtener un número de un sólo
// dígito.
const sumarDigitos = (num) => {
  let numOutput = num;

  if (num < 10) return num;

  while (numOutput > 9) {
    let numsSplit = [];
    numsSplit = String(numOutput).split("");
    numOutput = numsSplit.reduce((acc, numero) => acc + Number(numero), 0);
  }

  return numOutput;
};

console.log(sumarDigitos(0)); // 0
console.log(sumarDigitos(4)); //4
console.log(sumarDigitos(62)); // 8
console.log(sumarDigitos(942)); // 6
console.log(sumarDigitos(132189)); // 6
console.log(sumarDigitos(493193)); // 2

//ejercicio27
const serieFibonacci = (num) => {
  if (num === 0) return "tiene que ser entero positivo";
  if (num === 1) return "0";
  let arr = [];
  for (let index = 0; index < num; index++) {
    let largo = arr.length;
    if (largo < 2) arr.push(index);
    if (largo >= 2) {
      arr.push(arr[largo - 1] + arr[largo - 2]);
    }
  }

  return arr.join(", ");
};

console.log(serieFibonacci(1)); //"0"
console.log(serieFibonacci(2)); //"0, 1"
console.log(serieFibonacci(3)); //"0, 1, 1"
console.log(serieFibonacci(4)); //"0, 1, 1, 2"
console.log(serieFibonacci(5)); //"0, 1, 1, 2, 3"
console.log(serieFibonacci(6)); //"0, 1, 1, 2, 3, 5"
console.log(serieFibonacci(7)); //"0, 1, 1, 2, 3, 5, 8"
console.log(serieFibonacci(8)); //"0, 1, 1, 2, 3, 5, 8, 13"

//ejercicio28
const numeroFibonacci = (num) => {
  if (num === 0) return "tiene que ser entero positivo";
  if (num === 1) return "0";
  let arr = [];
  for (let index = 0; index < num; index++) {
    let largo = arr.length;
    if (largo < 2) arr.push(index);
    if (largo >= 2) {
      arr.push(arr[largo - 1] + arr[largo - 2]);
    }
  }

  return arr[arr.length - 1];
};
console.log(numeroFibonacci(5));
console.log(numeroFibonacci(6)); //5
console.log(numeroFibonacci(7)); // 8
console.log(numeroFibonacci(30)); // 514229
//console.log(numeroFibonacci(500));

//ejercicio29
// Crear una función en JavaScript llamada ​ sumarStrings​ que reciba como
// parámetros dos ​ strings ​ (que representan dos números naturales) y retorna un nuevo
// string ​ que representa la suma de los números.
// La dificultad de este ejercicio está en poder sumar números realmente grandes y
// poder mostrar la suma completa (con todos los dígitos). Ver detalles ​ aquí​ .

const sumarStrings = (str1, str2) => {
  let arr = [BigInt(str1), BigInt(str2)];
  let suma = arr.reduce((acc, num) => acc + num, BigInt(0));

  return String(suma);
};

console.log(sumarStrings("1", "6")); //"7"
console.log(sumarStrings("0", "4")); //"4"
console.log(sumarStrings("0034", "000056")); //"90"
console.log(sumarStrings("73283718237137219313432", "8934342432")); //"73283718237146153655864"
