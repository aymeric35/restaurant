import './about.css';
import { createElement, content } from "../../components/shared/elementCreator";
import About from "./about.jpg"

export const createAbout = (() => {
    const bodyContent = content.id;

    const appendSection = () => {
        const section = bodyContent.appendChild(createElement('section'));
        section.classList.add("sec-about");

        const container = section.appendChild(createElement('div'));
        container.classList.add("container");
        const title = container.appendChild(createElement('h2'))
        title.textContent = "À Propos";
        const img = container.appendChild(createElement('img'));
        img.src = About;
        const paragraph = container.appendChild(createElement('p'));
        paragraph.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam turpis ac interdum a. Rhoncus
        pellentesque cras sodales posuere adipiscing sed urna pharetra gravida. Mauris porttitor tempus
        pharetra, libero ullamcorper commodo diam ut. Bibendum interdum risus luctus non ullamcorper arcu
        enim proin at. Sem eleifend arcu lacus, viverra. Egestas ipsum platea eu nec.`
    }

    return { appendSection };
})();