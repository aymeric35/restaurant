import './home.css';
import { createElement, content } from "../../components/shared/elementCreator";
import Dough from './pate.jpg';
import Pizza from './pizza.jpg';

const createBody = (() => {
    const bodyContent = content.id;

    const appendSection1 = () => {

        const section = bodyContent.appendChild(createElement('section'));
        section.classList.add("sec-1")

        const container = section.appendChild(createElement('div'));
        container.classList.add("container", "sec-1__content");

        const imgContainer = container.appendChild(createElement('div'));
        imgContainer.classList.add("sec-1__img");

        const img = imgContainer.appendChild(createElement('img'));
        img.src = Dough;
        img.setAttribute("alt", "Une boule de pâte à pizza entreprosée dans des mains");

        const text = container.appendChild(createElement('div'));
        text.classList.add("sec-1__text");

        const h2 = text.appendChild(createElement('h2'));
        h2.textContent = "Lorem ipsum";

        const p = text.appendChild(createElement('p'));
        p.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus placerat a eget dui molestie vitae sit."
    }

    const appendSection2 = () => {
        const section = bodyContent.appendChild(createElement('section'));
        section.classList.add("sec-2");

        const container = section.appendChild(createElement('div'));
        container.classList.add("container", "sec-2__content");

        const imgContainer = container.appendChild(createElement('div'));
        imgContainer.classList.add("sec-2__img");

        const img = imgContainer.appendChild(createElement('img'));
        img.src = Pizza;
        img.setAttribute("alt", "Pizza posée devant un four");

        const text = container.appendChild(createElement('div'));
        text.classList.add("sec-2__text");

        const h2 = text.appendChild(createElement('h2'));
        h2.textContent = "Lorem ipsum";

        const p = text.appendChild(createElement('p'));
        p.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus placerat a eget dui molestie vitae sit."
    }



    return { appendSection1, appendSection2 };
})();

createBody.appendSection1();
createBody.appendSection2();

export { createBody };