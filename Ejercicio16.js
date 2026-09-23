function contadorDeLetras(cadena, letra){
    let contador = 0;

    for(let i = 0; i < cadena.length; i++){
        if(cadena[i] == letra){
            contador++;
        }
    }
    return contador;
}

console.log(contadorDeLetras("Banana", "a"));
console.log(contadorDeLetras("Banana", "B"));
console.log(contadorDeLetras("Banana", "b"));
