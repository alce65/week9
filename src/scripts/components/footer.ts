import { iComponent } from '../interfaces/component.js';
import { Component } from './component.js';

export class Footer extends Component implements iComponent {
    template: string;
    constructor(public selector: string) {
        super();
        this.template = this.createTemplate();
        this.outRender(this.selector);
    }
    createTemplate() {
        return `
            <footer>
                <address>ISDI Coders</address>      
            </footer>
        `;
    }
}
