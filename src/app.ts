import 'colors';
import { showMenu, pause, readInput, listTasksToDelete } from './helpers/mensajes';
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
        console.log();

        switch (opt) {
            case '1':
                const desc = await readInput('Description: ');
                tasks.createTask(desc);
            break;

            case '2':
                tasks.completeList();
            break;

            case '3':
                console.log('Completed Tasks:'.cyan.bold);
                tasks.listPendingCompleted(true);
            break;

            case '4':
                console.log('Pending Tasks:'.cyan.bold);
                tasks.listPendingCompleted(false);
            break;

            case '5':
                // completar tareas
            break;

            case '6':
                console.log('Delete Task:'.cyan.bold);
                let id = await listTasksToDelete(tasks.listArr);
                if (id !== '0') {
                    const ok = await readInput('Are you sure? (y/n): '.red);
                    if (ok === 'y') {
                        tasks.deleteTask(id);
                        console.log('Task deleted'.red.bold);
                    }
                }
            break;

            case '0':
                console.log('Saliendo del programa');
            break;
        }

        saveDB(tasks.listArr);
        if (opt !== '0') {
            await pause();
        }
    } while (opt !== '0');
}

main();
