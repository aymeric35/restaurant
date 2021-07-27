import './menu.css';
import { createElement, content } from "../../components/shared/elementCreator";
import Menu from "./menu.jpg";

const menuList = (() => {

    const Recipe = (name, ingredients, price) => {
        return { name, ingredients, price };
    }

    const marguerita = Recipe('Marguerita', ["Sauce tomate", " Fromage", " Olives"], '6,00 €');
    const prima = Recipe('Prima', ["Sauce tomate", " Fromage", " Jambon"], '6,00 €');
    const reine = Recipe('Reine', ["Sauce tomate", " Fromage", " Jambon", " champignons"], '7,00 €');
    const romaine = Recipe('Romaine', ["Sauce tomate", " Fromage", " Jambon", " Œuf", " Crème fraîche"], '7,50 €');
    const quatreFromages = Recipe('4 Fromages', ["Sauce tomate", " Chèvre", " Bleu", " Emmental", " Fromage"], '8,00 €');
    const oceane = Recipe('Océane', ["Sauce tomate", " Noix de Saint-Jacques", " Crevettes"], '8,50 €');
    const flamiche = Recipe('Flamiche', ["Crème Fraîche", " Oignons", " Lardons", " Fromage"], '9,00 €');
    const quatreSaisons = Recipe('4 Saisons', ["Sauce tomate", " Jambon épaule", " Fonds d'Artichauts", " Champignons"], '9,50 €');
    const brestoise = Recipe('Brestoire', ["Sauce tomate", " Oignons", " Pommes de Terre", " Lardons", " Jambon Cru"], '9,50 €');
    const bretonne = Recipe('Bretonne', ["Sauce tomate", " Oignons", " Andouille", " Fromage", " Crème fraîche"], '9,50 €');

    const generate = () => {
        const listHolder = document.querySelector(".list-holder");
        const recipes = [marguerita, prima, reine, romaine, quatreFromages, oceane, flamiche, quatreSaisons, brestoise, bretonne];

        recipes.forEach(recipe => {
            const container = createElement('div');
            container.classList.add("sec-menu__list");
            listHolder.appendChild(container);

            const recipeContainer = createElement('div')
            recipeContainer.classList.add("sec-menu__recipe-container");
            container.appendChild(recipeContainer);

            const title = createElement('h3');
            title.classList.add("sec-menu__recipe-title");
            title.textContent = recipe.name;
            recipeContainer.appendChild(title);

            const border = createElement('div');
            border.classList.add("border");
            recipeContainer.appendChild(border);

            const ingredients = createElement('p');
            ingredients.classList.add("sec-menu__recipe-ingredients")
            ingredients.textContent = recipe.ingredients;
            recipeContainer.appendChild(ingredients);

            const priceContainer = createElement('div');
            priceContainer.classList.add("sec-menu__price-container");
            container.appendChild(priceContainer);

            const price = createElement('p')
            price.textContent = recipe.price;
            priceContainer.appendChild(price);

        })
    }

    return { generate };
})();

export const createMenu = (() => {
    const bodyContent = content.id;

    const appendSection = () => {
        const section = createElement('section');
        section.classList.add("sec-menu");
        bodyContent.appendChild(section);

        const container = createElement('div');
        container.classList.add("container", "sec-menu__content");
        section.appendChild(container);

        const h2 = createElement('h2');
        h2.textContent = "Menu";
        container.appendChild(h2);

        const imgContainer = createElement('div');
        imgContainer.classList.add("sec-menu__img");
        container.appendChild(imgContainer);

        const img = createElement('img');
        img.src = Menu;
        imgContainer.appendChild(img);

        const menuContainer = createElement('div');
        menuContainer.classList.add("container", "list-holder");
        section.appendChild(menuContainer);

        menuList.generate();
    }

    return { appendSection };

})();