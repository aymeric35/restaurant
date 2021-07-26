import './menu.css';
import { createElement, content } from "../../components/shared/elementCreator";
import Menu from "./menu.jpg";

export const createMenu = (() => {
    const bodyContent = content.id;

    const appendSection = () => {
        const section = bodyContent.appendChild(createElement('section'));
        section.classList.add("sec-menu")

        const container = section.appendChild(createElement('div'));
        container.classList.add("container", "sec-menu__content");

        const h2 = container.appendChild(createElement('h2'));
        h2.textContent = "Menu";

        const imgContainer = container.appendChild(createElement('div'));
        imgContainer.classList.add("sec-menu__img");

        const img = imgContainer.appendChild(createElement('img'));
        img.src = Menu;

        const menuContainer = section.appendChild(createElement('div'));
        menuContainer.classList.add("container", "list-holder");

        const listContainer = document.querySelector(".list-holder");
        listContainer.insertAdjacentHTML('afterbegin',
                `<div class="sec-menu__list">
            <div class="sec-menu__recipe-container">
                <h3 class="sec-menu__recipe-title">Marguerita</h3>
                <div></div>
                <p class="sec-menu__recipe-ingredients">Sauce tomate, Fromage, Olives</p>
            </div>
            <div class="sec-menu__price-container">
                <p>6,00 €</p>
            </div>
        </div>
        <div class="sec-menu__list">
            <div class="sec-menu__recipe-container">
                <h3 class="sec-menu__recipe-title">Prima</h3>
                <div></div>
                <p class="sec-menu__recipe-ingredients">Sauce tomate, Fromage, Jambon</p>
            </div>
            <div class="sec-menu__price-container">
                <p>6,00 €</p>
            </div>
        </div>
        <div class="sec-menu__list">
            <div class="sec-menu__recipe-container">
                <h3 class="sec-menu__recipe-title">Reine</h3>
                <div></div>
                <p class="sec-menu__recipe-ingredients">Sauce tomate, Fromage, Jambon, champignons</p>
            </div>
            <div class="sec-menu__price-container">
                <p>7,00 €</p>
            </div>
        </div>
        <div class="sec-menu__list">
            <div class="sec-menu__recipe-container">
                <h3 class="sec-menu__recipe-title">Romaine</h3>
                <div></div>
                <p class="sec-menu__recipe-ingredients">Sauce tomate, Fromage, Jambon, Œuf, Crème fraîche</p>
            </div>
            <div class="sec-menu__price-container">
                <p>7,50 €</p>
            </div>
        </div>
        <div class="sec-menu__list">
            <div class="sec-menu__recipe-container">
                <h3 class="sec-menu__recipe-title">4 Fromages</h3>
                <div></div>
                <p class="sec-menu__recipe-ingredients">Sauce tomate, Chèvre, Bleu, Emmental, Fromage</p>
            </div>
            <div class="sec-menu__price-container">
                <p>8,00 €</p>
            </div>
        </div>
        <div class="sec-menu__list">
            <div class="sec-menu__recipe-container">
                <h3 class="sec-menu__recipe-title">Bretonne</h3>
                <div></div>
                <p class="sec-menu__recipe-ingredients">Sauce tomate, Oignons, Andouille, Fromage, Crème fraîche
                </p>
            </div>
            <div class="sec-menu__price-container">
                <p>8,50 €</p>
            </div>
        </div>
        <div class="sec-menu__list">
            <div class="sec-menu__recipe-container">
                <h3 class="sec-menu__recipe-title">Flamiche</h3>
                <div></div>
                <p class="sec-menu__recipe-ingredients">Crème Fraîche, Oignons, Lardons, Fromage</p>
            </div>
            <div class="sec-menu__price-container">
                <p>9,00 €</p>
            </div>
        </div>
        <div class="sec-menu__list">
            <div class="sec-menu__recipe-container">
                <h3 class="sec-menu__recipe-title">4 Saisons</h3>
                <div></div>
                <p class="sec-menu__recipe-ingredients">Sauce tomate, Jambon épaule, Fonds d'Artichauts,
                    Champignons, Poivrons, Fromage</p>
            </div>
            <div class="sec-menu__price-container">
                <p>9,50 €</p>
            </div>
        </div>
        <div class="sec-menu__list">
            <div class="sec-menu__recipe-container">
                <h3 class="sec-menu__recipe-title">Brestoise</h3>
                <div></div>
                <p class="sec-menu__recipe-ingredients">Sauce tomate, Oignons, Pommes de Terre, Lardons, Jambon
                    Cru, Crème Fraîche</p>
            </div>
            <div class="sec-menu__price-container">
                <p>9,50 €</p>
            </div>
        </div>
        <div class="sec-menu__list">
            <div class="sec-menu__recipe-container">
                <h3 class="sec-menu__recipe-title">Bretonne</h3>
                <div></div>
                <p class="sec-menu__recipe-ingredients">Sauce tomate, Oignons, Andouille, Fromage, Crème fraîche
                </p>
            </div>
            <div class="sec-menu__price-container">
                <p>9,50 €</p>
            </div>
        </div>`
        )
    }

    return { appendSection };

})();