import './header.css';
import { createElement, content } from "../shared/elementCreator";
import { menu } from '../menu/navMenu';

const createHeader = (() => {

    const appendHeader = () => {
        const headerDOM = document.body.insertBefore(createElement('header'), content.id);
        headerDOM.classList.add("hero");

        const heroContainer = headerDOM.appendChild(createElement('div'));
        heroContainer.classList.add("hero__container");

        const heroSubContainer = heroContainer.appendChild(createElement('div'));
        heroSubContainer.classList.add("container", "hero__subcontainer");

        const h1 = heroSubContainer.appendChild(createElement('h1'));
        h1.textContent = 'Breizh Pizza';

        const menu = heroSubContainer.appendChild(createElement('div'));
        menu.id = "menu";
        menu.classList.add("hero__menu");

        menu.insertAdjacentHTML('afterBegin',
        `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 18H4M20 12H12M20 6L4 6" stroke="#F97316" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>`);

        const nav = heroSubContainer.appendChild(createElement('nav'));
        nav.classList.add("hero__menu-toggle--hidden");
        const ul = nav.appendChild(createElement('ul'));
        const li = ul.append(
            createElement('li'),
            createElement('li'),
            createElement('li')
        );
        document.querySelector('li:nth-child(1)').textContent = "Accueil";
        document.querySelector('li:nth-child(2)').textContent = "Menu";
        document.querySelector('li:nth-child(3)').textContent = "À Propos";

    }



    return { appendHeader };
})();

createHeader.appendHeader();
menu.toggleMenu();
menu.switchPage();