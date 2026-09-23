function devuelveMasLarga(cadenaA, cadenaB){
    let masLarga = "";

    if(cadenaA.length >= cadenaB.length){
        masLarga = cadenaA;
    }
    else{
        masLarga = cadenaB;
    }
    return masLarga;
}

console.log(devuelveMasLarga("Hola", "Adios"));
console.log(devuelveMasLarga("Pepe", "Juan"));
