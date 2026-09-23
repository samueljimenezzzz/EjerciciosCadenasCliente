function generarNombre(cadenaA, cadenaB, cadenaC){
    let nombre = "";

    if(cadenaA.length < 5 || cadenaB.length < 5 || cadenaC.length < 5){
        nombre = "error";
    }
    else{
        nombre = cadenaA.substring(0, 3) + cadenaB.substring(0, 3) + cadenaC.substring(0, 3);
    }
    return nombre;
}

console.log(generarNombre("Samuel", "Manuel", "Daniel"));
console.log(generarNombre("Pepe", "Manuel", "Daniel"));
