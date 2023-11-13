"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showMenu = void 0;
require("colors");
const showMenu = () => {
    console.clear();
    console.log('==========================='.green);
    console.log('   Seleccione una opción'.green);
    console.log('===========================\n'.green);
    console.log(`${'1.'.green} Crear tarea`);
    console.log(`${'2.'.green} Listar tarea`);
    console.log(`${'3.'.green} Listar tareas completadas`);
    console.log(`${'4.'.green} Listar tareas pendientes`);
    console.log(`${'5.'.green} Completar tarea(s)`);
    console.log(`${'6.'.green} Borrar tarea`);
    console.log(`${'7.'.green} Salir \n`);
};
exports.showMenu = showMenu;
