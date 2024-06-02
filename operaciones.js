const fs = require('fs');

// Función para leer los datos del archivo JSON
function readData() {
    if (!fs.existsSync('citas.json')) { // Verifica si el archivo existe
        return []; // Si no existe, devuelve un arreglo vacío
    }
    const data = fs.readFileSync('citas.json', 'utf8'); // Lee el archivo
    return JSON.parse(data); // Convierte el contenido a un objeto JavaScript
}

// Función para escribir datos en el archivo JSON
function writeData(data) {
    fs.writeFileSync('citas.json', JSON.stringify(data, null, 2)); // Escribe el contenido en el archivo
}

// Función para registrar una nueva cita
function registrar(nombre, edad, animal, color, enfermedad) {
    const data = readData(); // Lee los datos actuales
    const nuevaCita = { // Crea un nuevo objeto de cita
        nombre,
        edad,
        animal,
        color,
        enfermedad
    };
    data.push(nuevaCita); // Añade la nueva cita al arreglo
    writeData(data); // Escribe el nuevo arreglo en el archivo
    console.log('Cita registrada:', nuevaCita); // Imprime la nueva cita
}

// Función para leer todas las citas
function leer() {
    const data = readData(); // Lee los datos actuales
    console.log('Citas registradas:', data); // Imprime todas las citas
}

// Exportar las funciones
module.exports = {
    registrar,
    leer
};
