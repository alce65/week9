export interface iTaskModel {
    id: number;
    name: string;
    responsible: string;
    isCompleted: boolean;
}

export class TaskModel implements iTaskModel {
    id: number;
    isCompleted: boolean;
    static generateId() {
        return Math.floor(Math.random() * 100_000);
    }
    constructor(public name: string, public responsible: string) {
        this.id = TaskModel.generateId();
        this.isCompleted = false;
    }
}
