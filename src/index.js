import './components/shared/remedy.css';
import './components/shared/root.css';

const init = (() => {

    const body = () => {
        const div = document.createElement('div');

        const content = document.body.appendChild(div);
        content.id = "content";
    }

    return { body };
})();

init.body();