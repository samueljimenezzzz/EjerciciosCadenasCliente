function generarNombre3(cadenaA, cadenaB, cadenaC){
    let nombre = "";

    if(cadenaA.length < 5 || cadenaB.length < 5 || cadenaC.length < 5){
        nombre = "error";
    }
    else{
        nombre = cadenaA.substring(cadenaA.length-3) + cadenaB.substring(cadenaB.length-3) + cadenaC.substring(cadenaC.length-3);
    }
    return nombre;
}

console.log(generarNombre3("Samuel", "Manolo", "Daniela"));
console.log(generarNombre3("Pepe", "Manuel", "Daniel"));
