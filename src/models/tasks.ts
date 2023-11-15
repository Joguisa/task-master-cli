import { Task } from "./task";

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

        // Las tareas deben tener un índice en verde
        // Completada en verde
        // Pendiente en rojo

    }

    deleteTask( id : string){
        this._list = this._list.filter( task => task.id !== id);
    }
}