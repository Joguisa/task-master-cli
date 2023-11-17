import 'colors';
import * as readline from 'readline';
import { Task } from '../models/task';

export const showMenu = () => {
    return new Promise((resolve) => {
        console.log('==========================='.green);
        console.log('||          MENU         ||'.green);
        console.log('===========================\n'.green);
        console.log(`${'1.'.green} Crear tarea`);
        console.log(`${'2.'.green} Listar tarea`);
        console.log(`${'3.'.green} Listar tareas completadas`);
        console.log(`${'4.'.green} Listar tareas pendientes`);
        console.log(`${'5.'.green} Completar tarea(s)`);
        console.log(`${'6.'.green} Borrar tarea`);
        console.log(`${'0.'.red} Salir \n`);

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        rl.question('Select an option: '.blue, (opt) => {
            rl.close();
            resolve(opt);
        });
    });
};

export const pause = () => {
    return new Promise((resolve) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        rl.question(`\nPress ${'ENTER'.green} to continue\n`, (opt) => {
            rl.close();
            resolve(opt);
        });
    });
};

export const readInput = async (message: string): Promise<string> => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise((resolve) => {
        const askQuestion = () => {
            rl.question(message, (answer) => {
                if (!answer || answer.trim().length === 0) {
                    console.log('Please enter a valid value');
                    askQuestion();
                } else {
                    rl.close();
                    resolve(answer);
                }
            });
        };
        askQuestion();
    });
};

export const listTasksToDelete = async (tasks: Task[] = []) => {
    let choices = tasks.map((task, i) => {
        let idx = `${i + 1}.`.green;
        return {
            value: task.id,
            name: `${idx} ${task.desc}`,
        }
    });

    choices.unshift({
        value: '0',
        name: '0. ' + 'Cancel'.red,
    })

    console.log('Tasks:'.magenta.bold);
    choices.forEach((choice) => console.log(choice.name));

    const selectedTaskId = await askUser('Select a task: '.magenta, choices);
    console.log('You selected task with ID:'.blue.bold, selectedTaskId);
    return selectedTaskId;
};

const askUser = (question: string, choices: any[]) => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise<string>((resolve) => {
        const promptUser = () => {
            rl.question(question, (selectedTaskIndex) => {
                const selectedTaskId = choices[Number(selectedTaskIndex) - 1]?.value;
                // if (selectedTaskId) {
                //     rl.close();
                //     resolve(selectedTaskId);
                // } else {
                //     console.log('Please enter a valid value');
                //     promptUser();
                // }
                if (selectedTaskIndex == '0') {
                    // Resolve with '0' for cancellation
                    rl.close();
                    resolve('0');
                } else if (selectedTaskId !== undefined) {
                    rl.close();
                    resolve(selectedTaskId);
                } else {
                    console.log('Please enter a valid value');
                    promptUser();
                }
            });
        };
        promptUser();
    });
};
