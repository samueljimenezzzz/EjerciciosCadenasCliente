function tieneLetra(cadena, letra){
    let tiene = false;

    if(cadena.indexOf(letra) != -1){
        tiene = true;
    }
    return tiene;
}

console.log(tieneLetra("Samuel", "m"));
console.log(tieneLetra("Samuel", "S"));
console.log(tieneLetra("Samuel", "s"));
