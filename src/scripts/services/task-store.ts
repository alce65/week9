import { iTaskModel } from '../models/task.js';
import { TASKS } from '../models/tasks.data.js';

export class TaskStore {
    store: string;
    constructor() {
        this.store = 'Tasks';
    }

    getTask(): Array<iTaskModel> {
        return localStorage.getItem(this.store)
            ? JSON.parse(localStorage.getItem(this.store) as string)
            : TASKS;
    }

    setTak(tasks: Array<iTaskModel>) {
        localStorage.setItem(this.store, JSON.stringify(tasks));
    }

    removeTask() {
        localStorage.removeItem(this.store);
    }
}
