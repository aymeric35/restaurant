import './header.css';
import { createElement, content } from "../shared/elementCreator";
import { menu } from '../menu/navMenu';

const createHeader = (() => {

    const appendHeader = () => {
        const headerDOM = createElement('header');
        headerDOM.classList.add("hero");
        document.body.insertBefore(headerDOM, content.id);

        const heroContainer = createElement('div');
        heroContainer.classList.add("hero__container");
        headerDOM.appendChild(heroContainer);

        const heroSubContainer = createElement('div');
        heroSubContainer.classList.add("container", "hero__subcontainer");
        heroContainer.appendChild(heroSubContainer);

        const h1 = createElement('h1');
        h1.textContent = 'Breizh Pizza';
        heroSubContainer.appendChild(h1);

        const menu = createElement('div');
        menu.id = "menu";
        menu.classList.add("hero__menu");
        heroSubContainer.appendChild(menu);

        menu.insertAdjacentHTML('afterBegin',
        `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 18H4M20 12H12M20 6L4 6" stroke="#F97316" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>`);

        const nav = createElement('nav');
        nav.classList.add("hero__menu-toggle--hidden");
        heroSubContainer.appendChild(nav);

        const ul = createElement('ul');
        nav.appendChild(ul);
        const liHome = createElement('li');
        const liMenu = createElement('li');
        const liAbout = createElement('li');
        ul.append( liHome, liMenu, liAbout);
        liHome.textContent = "Accueil";
        liMenu.textContent = "Menu";
        liAbout.textContent = "À Propos";

    }

    return { appendHeader };
})();

createHeader.appendHeader();
menu.toggleMenu();
menu.switchPage();