function generarNombre2(cadenaA, cadenaB, cadenaC){
    let nombre = "";

    if(cadenaA.length < 5 || cadenaB.length < 5 || cadenaC.length < 5){
        nombre = "error";
    }
    else{
        nombre = cadenaA[cadenaA.length-1] + cadenaB[cadenaB.length-1] + cadenaC[cadenaC.length-1];
    }
    return nombre;
}

console.log(generarNombre2("Samuel", "Manolo", "Daniela"));
console.log(generarNombre2("Pepe", "Manuel", "Daniel"));
