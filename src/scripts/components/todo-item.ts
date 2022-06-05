import { iComponent } from '../interfaces/component.js';
import { iTaskModel } from '../models/task.js';
import { Component } from './component.js';

export class TodoItem extends Component implements iComponent {
    template: string;
    constructor(public selector: string, public item: iTaskModel) {
        super();
        this.template = this.createTemplate();
        this.render(this.selector);
    }
    createTemplate() {
        return `
        <li>
            <span><input type="checkbox" name="isCompeted" 
                id="isCompeted" data-id="${this.item.id}"
                ${this.item.isCompleted && 'checked'}>
                </span>
            <span>${this.item.name}</span>
            <span> - </span>
            <span>${this.item.responsible}</span>
            <span class="button" role="button" data-id="${
                this.item.id
            }">🗑️</span>
        </li>   
        `;
    }
}
