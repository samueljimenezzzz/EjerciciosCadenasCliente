function addGuiones(cadena){
    let nuevaCadena = "";

    for(let i = 0; i < cadena.length; i++){
        nuevaCadena += cadena[i] + "-";
    }
    return nuevaCadena;
}

console.log(addGuiones("Samuel"));
