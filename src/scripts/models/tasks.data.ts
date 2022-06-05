import { iTaskModel, TaskModel } from './task.js';

export const TASKS: Array<iTaskModel> = [
    new TaskModel('Hacer el header', 'Maria'),
    new TaskModel('Hacer el footer', 'Joan'),
    new TaskModel('Hacer el main', 'Javier'),
];

TASKS[0].isCompleted = true;

// Mock de datos
