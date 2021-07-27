import './about.css';
import { createElement, content } from "../../components/shared/elementCreator";
import About from "./about.jpg"

export const createAbout = (() => {
    const bodyContent = content.id;

    const appendSection = () => {
        const section = createElement('section');
        section.classList.add("sec-about");
        bodyContent.appendChild(section);

        const container = createElement('div');
        container.classList.add("container");
        section.appendChild(container);
        const title = createElement('h2');
        title.textContent = "À Propos";
        container.appendChild(title);
        const img = createElement('img');
        img.src = About;
        container.appendChild(img);
        const paragraph = createElement('p');
        paragraph.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam turpis ac interdum a. Rhoncus
        pellentesque cras sodales posuere adipiscing sed urna pharetra gravida. Mauris porttitor tempus
        pharetra, libero ullamcorper commodo diam ut. Bibendum interdum risus luctus non ullamcorper arcu
        enim proin at. Sem eleifend arcu lacus, viverra. Egestas ipsum platea eu nec.`;
        container.appendChild(paragraph);
    }

    return { appendSection };
})();