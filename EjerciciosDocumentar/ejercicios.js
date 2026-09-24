// @ts-check

// ─────────────────────────────────────────────
// 1. Variables y constantes
// ─────────────────────────────────────────────

/**
 * URL base de la API a la que se hacen las peticiones.
 * @type {string}
 */
const API_URL = "https://api.example.com";

/**
 * Contador numérico que empieza en 0 y puede ir incrementándose.
 * @type {number}
 */
let contador = 0;

/**
 * Indica si el usuario está activo.
 * @type {boolean}
 */
const usuarioActivo = true;

// ─────────────────────────────────────────────
// 2. Función 1
// ─────────────────────────────────────────────

/**
 * Calcula el área de un rectángulo.
 * @param {number} base - Base del rectángulo.
 * @param {number} altura - Altura del rectángulo.
 * @returns {number} El área del rectángulo (base * altura).
 */
function areaRectangulo(base, altura) {
    return base * altura;
}

// ─────────────────────────────────────────────
// 3. Función 2
// ─────────────────────────────────────────────

/**
 * Convierte un texto a mayúsculas.
 * @param {string} texto - Texto que se quiere convertir.
 * @returns {string} El texto en mayúsculas.
 */
function convertirEnMayusculas(texto) {
    return texto.toUpperCase();
}

// ─────────────────────────────────────────────
// 4. Función 3
// ─────────────────────────────────────────────

/**
 * Genera el nombre completo uniendo nombre y apellido con un espacio.
 * @param {string} nombre - Nombre de la persona.
 * @param {string} apellido - Apellido de la persona.
 * @returns {string} El nombre completo.
 */
function generarNombreCompleto(nombre, apellido) {
    return nombre + " " + apellido;
}

// ─────────────────────────────────────────────
// 5. Función 4 (retorna booleano)
// ─────────────────────────────────────────────

/**
 * Comprueba si una persona es mayor de edad (18 años o más).
 * @param {number} edad - Edad de la persona.
 * @returns {boolean} true si es mayor de edad, false en caso contrario.
 */
function esMayorDeEdad(edad) {
    return edad >= 18;
}

// ─────────────────────────────────────────────
// 6. Objeto con propiedades
// ─────────────────────────────────────────────

/**
 * Representa un coche.
 * @typedef {Object} Coche
 * @property {string} marca - Marca del coche.
 * @property {string} modelo - Modelo del coche.
 * @property {number} año - Año de fabricación.
 */

/**
 * Coche de ejemplo.
 * @type {Coche}
 */
const coche = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020
};

// ─────────────────────────────────────────────
// 7. Función con objeto como parámetro
// ─────────────────────────────────────────────

/**
 * Devuelve una descripción del coche en formato "marca modelo (año)".
 * @param {Coche} coche - Coche que se quiere mostrar.
 * @returns {string} Texto con la marca, el modelo y el año del coche.
 */
function mostrarCoche(coche) {
    return `${coche.marca} ${coche.modelo} (${coche.año})`;
}

// ─────────────────────────────────────────────
// Pruebas
// ─────────────────────────────────────────────

console.log(API_URL, contador, usuarioActivo);
console.log(areaRectangulo(5, 3));                    // 15
console.log(convertirEnMayusculas("hola mundo"));      // HOLA MUNDO
console.log(generarNombreCompleto("Samuel", "Jiménez")); // Samuel Jiménez
console.log(esMayorDeEdad(20));                        // true
console.log(esMayorDeEdad(15));                        // false
console.log(mostrarCoche(coche));                      // Toyota Corolla (2020)

// Con // @ts-check activado, VS Code marcaría en rojo líneas como estas:
// areaRectangulo("5", 3);        // Error: "5" es string, se esperaba number
// esMayorDeEdad("veinte");       // Error: se esperaba number
// mostrarCoche({ marca: "Seat" }); // Error: faltan las propiedades modelo y año
