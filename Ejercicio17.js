//Parte 1: contadorDeLetras sin tener en cuenta mayusculas y minusculas
function contadorDeLetras(cadena, letra){
    let contador = 0;

    for(let i = 0; i < cadena.length; i++){
        if(cadena[i].toLowerCase() == letra.toLowerCase()){
            contador++;
        }
    }
    return contador;
}

console.log(contadorDeLetras("Banana", "b"));
console.log(contadorDeLetras("Banana", "A"));

//Parte 2: contadorDeLetras2 devuelve la cadena donde mas aparece la letra
function contadorDeLetras2(cadenaA, cadenaB, letra){
    let contadorA = 0;
    let contadorB = 0;
    let cadenaMasLetras = "";

    for(let i = 0; i < cadenaA.length; i++){
        if(cadenaA[i].toLowerCase() == letra.toLowerCase()){
            contadorA++;
        }
    }

    for(let i = 0; i < cadenaB.length; i++){
        if(cadenaB[i].toLowerCase() == letra.toLowerCase()){
            contadorB++;
        }
    }

    if(contadorA >= contadorB){
        cadenaMasLetras = cadenaA;
    }
    else{
        cadenaMasLetras = cadenaB;
    }
    return cadenaMasLetras;
}

console.log(contadorDeLetras2("Banana", "Manzana", "A"));
console.log(contadorDeLetras2("Pera", "Aguacate", "a"));
