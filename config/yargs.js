const descripcion = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'descripcion de la tarea por hacer'
    }
}
const completado = {
    completado: {
        default: true,
        alias: 'c',
        desc: 'marca como pendioente la tarea'
    }
}
const argv = require('yargs')
        .command('crear', 'imprime en consola la tabla multiplicar', { descripcion})   
        .command('actualizar', 'actualiza los datos', {completado})
        .command('borrar', 'elimina los datos', {descripcion})
.help()
.argv;

module.exports = {
    argv
}