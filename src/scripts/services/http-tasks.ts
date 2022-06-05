import { iTaskModel } from '../models/task';

export class HttpTasks {
    url: string;
    constructor() {
        this.url = 'http://localhost:3542/tasks/';
    }
    getAllTasks(): Promise<Array<iTaskModel>> {
        return fetch(this.url).then((resp) => resp.json());
    }
    setTask(task: iTaskModel): Promise<iTaskModel> {
        return fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(task),
            headers: { 'Content-Type': 'application/json' },
        }).then((resp) => resp.json());
    }
    updateTask(task: iTaskModel): Promise<iTaskModel> {
        return fetch(this.url + task.id, {
            method: 'PATCH',
            body: JSON.stringify(task),
            headers: { 'Content-Type': 'application/json' },
        }).then((resp) => resp.json());
    }
    deleteTask(task: iTaskModel) {
        return fetch(this.url + task.id, {
            method: 'DELETE',
        });
    }
}
