import 'colors';
import * as readline from 'readline';
import { Task } from '../models/task';

export const showMenu = () => {
    return new Promise((resolve) => {
        console.log('==========================='.green);
        console.log('||          MENU         ||'.green);
        console.log('===========================\n'.green);
        console.log(`${'1.'.green} Create task`);
        console.log(`${'2.'.green} List task`);
        console.log(`${'3.'.green} List completed tasks`);
        console.log(`${'4.'.green} List pending tasks`);
        console.log(`${'5.'.green} Complete task`);
        console.log(`${'6.'.green} Delete task`);
        console.log(`${'0.'.red} Go out \n`);

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        rl.question('Select an option: '.green, (opt) => {
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
        name: '0. '.red + 'Cancel'.red,
    })

    console.log('Tasks:'.cyan);
    choices.forEach((choice) => console.log(choice.name));

    const selectedTaskId = await askUser('Select a task: '.magenta, choices);
    selectedTaskId !== '0' ? console.log('You selected task with ID:'.blue, selectedTaskId) : console.log('You selected to cancel'.red);
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
                if (selectedTaskIndex == '0') {
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


export const listTasksToChange = async (tasks: Task[] = []) => {
    let choices = tasks.map((task, i) => {
        let idx = `${i + 1}.`.green;
        let isCompleted = task.completed ? 'Completed'.green : 'Pending'.red;
        let completionInfo = task.completed ? `on: ${task.completedDate}`.green : '';
        return {
            value: task.id,
            name: `${idx} ${task.desc} :: ${isCompleted} ${completionInfo}`,
            checked: task.completed,
        };
    });

    console.log('Tasks:'.cyan);
    choices.forEach((choice) => console.log(choice.name));

    const selectedTaskId = await askUser('Complete Task: '.magenta, choices);
    selectedTaskId !== '0' ? console.log('You selected task with ID:'.blue, selectedTaskId) : console.log('You selected to cancel'.red);
    return selectedTaskId;
};

export const changeStateTask = async ( taskId : string, tasks: Task[] ) => {
    let task = tasks.find( task => task.id === taskId);
    if (task) {
        task.completed = !task.completed;
        task.completedDate = new Date().toISOString().split('T')[0];
        console.log(`Task with ID: ${taskId} changed to ${task.completed ? 'Completed'.green : 'Pending'.red}`);
    } else {
        console.log(`Task with ID: ${taskId} not found`);
    }
}