import './components/shared/remedy.css';
import './components/shared/root.css';
import './components/header/header.css';
import './components/footer/footer.css';
import './pages/home/home.css';
import './pages/menu/menu.css';
import './pages/about/about.css';
import { menu } from './components/menu/menu';

const init = (() => {

    const body = () => {
        const div = document.createElement('div');

        const content = document.body.appendChild(div);
        content.id = "content";
    }

    return { body };
})();

init.body();

// menu.toggleMenu();