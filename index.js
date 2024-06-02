const { registrar, leer } = require('./operaciones');

const args = process.argv.slice(2); // Obtener los argumentos de la línea de comando
const operacion = args[0]; // Primer argumento es la operación (registrar o leer)

if (operacion === 'registrar') {
    const [nombre, edad, animal, color, enfermedad] = args.slice(1); // Extraer los detalles de la cita
    registrar(nombre, edad, animal, color, enfermedad); // Llamar a la función registrar
} else if (operacion === 'leer') {
    leer(); // Llamar a la función leer
} else {
    console.log('Comando no reconocido. Usa "registrar" o "leer".'); // Manejo de comandos no reconocidos
}


// Para la creación de citas utilice el sgte comando en base a lo que salia en el desafio en modo de ejemplo
// node index.js registrar Sasha "6 años" coneja café vomitos (Siguiendo la logica del const)