import './remedy.css';
import './root.css';
import './hero.css';

const init = (() => {

    const initBody = () => {
    const div = document.createElement('div');

    const content = document.body.appendChild(div);
    content.id = "content";
    }

    return { initBody };
})();

// init.initBody();