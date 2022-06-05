import { iComponent } from '../interfaces/component.js';
import { iTaskModel, TaskModel } from '../models/task.js';
import { Component } from './component.js';

export class TodoAdd extends Component implements iComponent {
    template: string = '';
    constructor(
        public selector: string,
        public addTask: (task: iTaskModel) => void
    ) {
        super();
        this.render();
    }

    render() {
        this.template = this.createTemplate();
        super.render(this.selector);
        this.manageTemplate();
    }

    createTemplate() {
        return `
        <h3>Añadir tarea</h3>
        <form action="">
            <input type="text" name="name" required
            placeholder="Describe la tarea">
            <input type="text" name="responsible" placeholder="¿Quien hara la tarea?">
            <button type="submit">Guardar</button>
        </form>
        `;
    }
    manageTemplate() {
        document
            .querySelector('form')
            ?.addEventListener('submit', this.handlerSubmit.bind(this));
    }
    handlerSubmit(ev: Event) {
        const inputValues: [string, string] = ['', ''];
        ev.preventDefault();
        (<HTMLFormElement>ev.target)
            .querySelectorAll('input')
            .forEach((element, i) => {
                inputValues[i] = element.value;
            });
        this.addTask(new TaskModel(...inputValues));
    }
}
