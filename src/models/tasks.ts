import { Task } from "./task";

export class Tasks {
    _list: Task[] = [];

    constructor() {
        this._list = [];
    }

    get listArr() {
        let list: Task[] = [];
        this._list.forEach( (task ) =>{
            list.push( task );
        })
        return list;
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
        console.log('List of tasks:'.cyan.bold);
        this.listArr.forEach((task, i) =>{
            let idx = `${i + 1 +'.'}`.green;
            let {desc, completed} = task;
            let status = (completed)
                                ? 'Completed'.green
                                : 'Pending'.red;
            console.log(`${idx} ${desc} :: ${status}`);
        });
    }

    listPendingCompleted( completeTask = true ) {
        this._list.forEach((task, i) => {
            let idx = `${i + 1 +'.'}`.green;
            let {desc, completed, completedDate} = task;
            let status = (completed)
                                ? 'Completed'.green
                                : 'Pending'.red;
            let date = (completedDate)
                                ? `on ${completedDate}`.green
                                : '';

            if ((completeTask && completed) || (!completeTask && !completed)) {
                console.log(`${idx} ${desc} :: ${status} ${date}`);
            }
        });
    }

    deleteTask( id : string ) {
        if (this._list.length) {
            this._list = this._list.filter( task => task.id !== id);
        }
    }
}