function tieneLetra(cadena, letra){
    let tiene = false;

    if(cadena.toLowerCase().indexOf(letra.toLowerCase()) != -1){
        tiene = true;
    }
    return tiene;
}

console.log(tieneLetra("Samuel", "M"));
console.log(tieneLetra("Samuel", "s"));
console.log(tieneLetra("Samuel", "z"));
