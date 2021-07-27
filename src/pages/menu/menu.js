import './menu.css';
import { createElement, content } from "../../components/shared/elementCreator";
import Menu from "./menu.jpg";

const menuList = (() => {

    const Recipe = (name, ingredients, price) => {
        return { name, ingredients, price };
    }

    const marguerita = Recipe('Marguerita', 'Sauce tomate, Fromage, Olives', '6,00 €');
    const prima = Recipe('Prima', 'Sauce tomate, Fromage, Jambon', '6,00 €');
    const reine = Recipe('Reine', 'Sauce tomate, Fromage, Jambon, champignons', '7,00 €');
    const romaine = Recipe('Romaine', 'Sauce tomate, Fromage, Jambon, Œuf, Crème fraîche', '7,50 €');
    const quatreFromages = Recipe('4 Fromages', 'Sauce tomate, Chèvre, Bleu, Emmental, Fromage', '8,00 €');
    const oceane = Recipe('Océane', 'Sauce tomate, Noix de Saint-Jacques, Crevettes', '8,50€');
    const flamiche = Recipe('Flamiche', 'Crème Fraîche, Oignons, Lardons, Fromage', '9,00 €');
    const quatreSaisons = Recipe('4 Saisons', "Sauce tomate, Jambon épaule, Fonds d'Artichauts, Champignons", '9,50 €');
    const brestoise = Recipe('Brestoire', 'Sauce tomate, Oignons, Pommes de Terre, Lardons, Jambon Cru', '9,50€');
    const bretonne = Recipe('Bretonne', 'Sauce tomate, Oignons, Andouille, Fromage, Crème fraîche', '9,50€');

    const generate = () => {
        const listHolder = document.querySelector(".list-holder");
        const recipes = [marguerita, prima, reine, romaine, quatreFromages, oceane, flamiche, quatreSaisons, brestoise, bretonne];

        recipes.forEach(recipe => {
            const container = listHolder.appendChild(createElement('div'));
            container.classList.add("sec-menu__list");

            const recipeContainer = container.appendChild(createElement('div'));
            recipeContainer.classList.add("sec-menu__recipe-container");

            const title = recipeContainer.appendChild(createElement('h3'));
            title.classList.add("sec-menu__recipe-title");
            title.textContent = recipe.name;
            const border = recipeContainer.appendChild(createElement('div'));
            border.classList.add("border");
            const ingredients = recipeContainer.appendChild(createElement('p'));
            ingredients.classList.add("sec-menu__recipe-ingredients")
            ingredients.textContent = recipe.ingredients;

            const priceContainer = container.appendChild(createElement('div'));
            priceContainer.classList.add("sec-menu__price-container");
            const price = priceContainer.appendChild(createElement('p'));
            price.textContent = recipe.price;

        })
    }

    return { generate };
})();

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

        menuList.generate();
    }

    return { appendSection };

})();