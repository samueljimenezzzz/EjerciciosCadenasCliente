function crearPalabra(letra, numero){
    let palabra = "";

    for(let i = 0; i < numero; i++){
        palabra += letra.toUpperCase();
    }
    return palabra;
}

console.log(crearPalabra("a", 5));
