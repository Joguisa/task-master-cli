import { v4 as uuidv4 } from 'uuid';

export class Task {
    id: any;
    desc: string = '';
    completed: boolean = false;

    constructor( desc: string ) {
        this.id = uuidv4();
        this.desc = desc;
        this.completed = false;
    }
}
