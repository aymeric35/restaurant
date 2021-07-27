import './home.css';
import { createElement, content } from "../../components/shared/elementCreator";
import Dough from './pate.jpg';
import Pizza from './pizza.jpg';

const createBody = (() => {
    const bodyContent = content.id;

    const appendSection1 = () => {

        const section = createElement('section');
        section.classList.add("sec-1");
        bodyContent.appendChild(section);

        const container = createElement('div');
        container.classList.add("container", "sec-1__content");
        section.appendChild(container);

        const imgContainer = createElement('div');
        imgContainer.classList.add("sec-1__img");
        container.appendChild(imgContainer);

        const img = createElement('img');
        img.src = Dough;
        img.setAttribute("alt", "Une boule de pâte à pizza entreprosée dans des mains");
        imgContainer.appendChild(img);

        const text = createElement('div');
        text.classList.add("sec-1__text");
        container.appendChild(text);

        const h2 = createElement('h2');
        h2.textContent = "Lorem ipsum";
        text.appendChild(h2);

        const p = createElement('p');
        p.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus placerat a eget dui molestie vitae sit.";
        text.appendChild(p);
    }

    const appendSection2 = () => {
        const section = createElement('section');
        section.classList.add("sec-2");
        bodyContent.appendChild(section);

        const container = createElement('div');
        container.classList.add("container", "sec-2__content");
        section.appendChild(container);

        const imgContainer = createElement('div');
        imgContainer.classList.add("sec-2__img");
        container.appendChild(imgContainer);

        const img = createElement('img');
        img.src = Pizza;
        img.setAttribute("alt", "Pizza posée devant un four");
        imgContainer.appendChild(img);

        const text = createElement('div');
        text.classList.add("sec-2__text");
        container.appendChild(text)

        const h2 = createElement('h2');
        h2.textContent = "Lorem ipsum";
        text.appendChild(h2);

        const p = createElement('p')
        p.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus placerat a eget dui molestie vitae sit.";
        text.appendChild(p);
    }

    return { appendSection1, appendSection2 };
})();

export { createBody };