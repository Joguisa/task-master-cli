import { v4 as uuidv4 } from 'uuid';

export class Task {
    id: string;
    desc: string = '';
    completed: boolean = false;
    completedDate?: Date | string;

    constructor( desc: string ) {
        this.id = uuidv4();
        this.desc = desc;
        this.completed = false;
    }
}
