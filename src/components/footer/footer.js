import './footer.css';
import { createElement, content } from "../shared/elementCreator";

const createFooter = (() => {
    const appendFooter = () => {
        const footer = document.body.insertBefore(createElement('footer'), content.id.nextSibling);
        const container = footer.appendChild(createElement('div'));
        container.classList.add("container");
        const p = container.appendChild(createElement('p'));
        p.textContent = "Copyright © 2021 Aymeric35";
    }

    return { appendFooter }

})();

createFooter.appendFooter();