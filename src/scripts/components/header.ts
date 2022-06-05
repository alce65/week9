import { iComponent } from '../interfaces/component.js';
import { iMenuOptions } from '../interfaces/menu.options.js';
import { Component } from './component.js';
import { Menu } from './menu.js';

export class Header extends Component implements iComponent {
    template: string;
    menuOptions: iMenuOptions;
    constructor(public selector: string) {
        super();
        this.template = this.createTemplate();
        this.outRender(this.selector);
        this.menuOptions = [
            { path: './index.html', label: 'Home' },
            { path: './tasks.html', label: 'Tasks' },
            { path: './about.html', label: 'About' },
        ];
        new Menu('slot.menu', this.menuOptions);
    }
    createTemplate() {
        return `
            <header>   
                <h1>JS en la Web</h1>
                    <slot class="menu"><slot>
            </header>  
        `;
    }
}
