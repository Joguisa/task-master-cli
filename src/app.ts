import 'colors';
import { showMenu, pause, readInput } from './helpers/mensajes';
import { readDB, saveDB } from './helpers/saveFile';
import { Tasks } from './models/tasks';



const main = async () => {

    let opt;
    let tasks = new Tasks();

    let tasksDB = readDB();

    if (tasksDB) {
        tasks.uploadTasksFromArray(tasksDB);
    }
    
    do {
        opt = await showMenu();
        console.log({ opt });       
        switch (opt) {
            case '1':
                // crear tareas
                const desc = await readInput('Description: ');
                tasks.createTask(desc);
            break;

            case '2':
                tasks.completeList();
            break;

            case '3':
                tasks.listPendingCompleted(true);
            break;

            case '4':
                tasks.listPendingCompleted(false);
            break;

            case '0':
                console.log('Saliendo del programa');
            break;
        }

        saveDB(tasks.listArr);
        await pause();
        // if (opt !== '0') {
        // }

    } while (opt !== '0');
}

main();
