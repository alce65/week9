import { Footer } from './components/footer.js';
import { Header } from './components/header.js';
import { TodoList } from './components/todo-list.js';

(() => {
    document.addEventListener('DOMContentLoaded', () => {
        const path = location.pathname.split('/');
        if (
            path[path.length - 1] === '' ||
            path[path.length - 1] === 'index.html'
        ) {
            commonComponents();
        } else if (path[path.length - 1] === 'about.html') {
            commonComponents();
        } else if (path[path.length - 1] === 'tasks.html') {
            commonComponents();
            new TodoList('slot.main');
        }
    });
})();

function commonComponents() {
    new Header('slot.header');
    new Footer('slot.footer');
}
