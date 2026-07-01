
//datatypes => tipos de datos

//let edades = [12, 34, 56, 99, 11, 5, 7, 34];
//let htmlContent = "";

//for (let i = 0; i < edades.length; i++) {
  //htmlContent += "<li>" + edades[i] + "</li>\n";
//}

//let htmlList = "<ul>\n" + htmlContent + "</ul>";

//edades.forEach(function (item)) {
 // htmlContent += "<li>" + item + "</li>\n";
//}

//let edadesFiltradas = edades.filter(function(elem){
   //if (elem>10) return false
   //else return true
//  })

//let newList = edadesFiltradas.map (function(elem){
  //return "<li>" + (elem+1) + "</li>"
  
//})

//console.log(newList.join(""))

//let frutas = ["banana", "orange","apple", "mango"];
   // frutas.sort();
   // console.log(frutas);
   // frutas.reverse();
   // console.log(frutas);



//   let autos = [
    //{tipo:'Volvo', año:2016},
    //{tipo:'Saab', año:2001},
    //{tipo:'BMW', año:2010}];
    //autos.sort(function(a, b) {return a.año - b.año});
    //console.log(autos);

    function getPromedio(array) {
	let suma = array.reduce((a, b) => a + b, 0);
	return suma / array.length;
}

function getMasJoven(array) {
	return array.reduce((a, b) => a.age < b.age ? a : b);
}

function getInfoPersona(nombre, personas) {
	return personas.find(persona => persona.name === nombre);
}

let promedio = getPromedio([2, 4, 5, 12, 7]);

// Corrección: Definir un array adecuado de objetos para la función getMasJoven
let personas = [{ name: "John", age: 20 }, { name: "Mary", age: 21 }];
let masJoven = getMasJoven(personas);

let john = getInfoPersona("John", personas);
let mary = getInfoPersona("Mary", personas);

console.log({ promedio, masJoven, john, mary });