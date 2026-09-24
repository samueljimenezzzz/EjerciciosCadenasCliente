function validateDNI(dni){

let validDNI = false;
let letters = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"]
let numeros =dni.slice(0, 8)
numeros=parseInt(numeros);
let letterSelected=letters[numeros % 23]

    if(letterSelected === dni.charAt(8).toUpperCase()){
        validDNI = true;
    }

return valid;
}

console.log(validateDNI("77873441H"));  