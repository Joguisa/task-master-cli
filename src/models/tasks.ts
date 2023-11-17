import { Task } from "./task";
import { v4 as uuidv4 } from 'uuid';

export class Tasks {
    _list: Task[] = [];

    get listArr() {
        let list: Task[] = [];
        this._list.forEach( task =>{
            list.push( task );
        })
        return list;
    }

    constructor() {
        this._list = [];
    }

    uploadTasksFromArray( tasks : Task[] ){
        tasks.forEach( task => {
            this._list.push(task);
        })
    }
    
    createTask( desc : string){
        let task = new Task(desc);
        this._list.push(task);
    }

    completeList() {

        console.log();
        this.listArr.forEach((task, i) =>{
            let idx = `${i + 1 +'.'}`.green;
            let {desc, completed} = task;
            let status = (completed)
                                ? 'Completada'.green
                                : 'Pendiente'.red;
            console.log(`${idx} ${desc} :: ${status}`);

        });
    }

    listPendingCompleted( completeTask = true ) {
        console.log();
        this._list.forEach((task, i) => {
            let idx = `${i + 1 +'.'}`.green;
            let {desc, completed} = task;
            let status = (completed)
                                ? 'Completada'.green
                                : 'Pendiente'.red;
            if (completeTask) {
                if (completed) {
                    console.log(`${idx} ${desc} :: ${status}`);
                }
            } else {
                if (!completed) {
                    console.log(`${idx} ${desc} :: ${status}`);
                }
            }
        })
        
    }

    deleteTask( id : string){
        this._list = this._list.filter( task => task.id !== id);
    }
}