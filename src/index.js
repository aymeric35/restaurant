import './components/baseCSS/remedy.css';
import './components/baseCSS/root.css';
import './components/header/header.css';
import './components/footer/footer.css';
import './pages/home/home.css';
import './pages/menu/menu.css';
import './pages/about/about.css';
import { menu } from './components/menu/menu';

const init = (() => {

    const initBody = () => {
    const div = document.createElement('div');

    const content = document.body.appendChild(div);
    content.id = "content";
    }

    return { initBody };
})();

// init.initBody();

menu.toggleMenu();