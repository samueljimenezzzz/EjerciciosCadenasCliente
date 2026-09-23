function devuelveMasLarga2(cadenaA, cadenaB, cadenaC){
    let masLarga = "";

    if(cadenaA.length == cadenaB.length || cadenaA.length == cadenaC.length || cadenaB.length == cadenaC.length){
        masLarga = "Hay al menos dos cadenas iguales";
    }
    else if(cadenaA.length > cadenaB.length && cadenaA.length > cadenaC.length){
        masLarga = cadenaA;
    }
    else if(cadenaB.length > cadenaC.length){
        masLarga = cadenaB;
    }
    else{
        masLarga = cadenaC;
    }
    return masLarga;
}

console.log(devuelveMasLarga2("Hola", "Adios", "Bienvenido"));
console.log(devuelveMasLarga2("Pepe", "Juan", "Samuel"));
