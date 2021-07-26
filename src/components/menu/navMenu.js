import { content } from "../shared/elementCreator";
import { createBody } from "../../pages/home/home";
import { createMenu } from "../../pages/menu/menu";
import { createAbout } from "../../pages/about/about";

const menu = (() => {

    const toggleMenu = () => {
        const icon = document.getElementById("menu");
        const menuBlock = document.querySelector(".hero__menu-toggle--hidden");

        icon.addEventListener('click', () => {
            if (menuBlock.classList.contains("hero__menu-toggle--hidden")) {
                menuBlock.classList.replace("hero__menu-toggle--hidden", "hero__menu-toggle--active");
            }
            else if (menuBlock.classList.contains("hero__menu-toggle--active")) {
                menuBlock.classList.replace("hero__menu-toggle--active", "hero__menu-toggle--hidden");
            }
        });
    }

    const switchPage = () => {
        const init = content.id;
        const home = document.querySelector('nav li:nth-child(1)');
        const menu = document.querySelector('nav li:nth-child(2)');
        const about = document.querySelector('nav li:nth-child(3)');
        const menuBlock = document.querySelector(".hero__menu-toggle--hidden");

        home.addEventListener('click', () => {
            while (init.firstChild) {
                init.removeChild(init.firstChild);
            }
            createBody.appendSection1();
            createBody.appendSection2();
            menuBlock.classList.replace("hero__menu-toggle--active", "hero__menu-toggle--hidden");
        });

        menu.addEventListener('click', () => {
            while (init.firstChild) {
                init.removeChild(init.firstChild);
            }
            createMenu.appendSection();
            menuBlock.classList.replace("hero__menu-toggle--active", "hero__menu-toggle--hidden");
        });

        about.addEventListener('click', () => {
            while (init.firstChild) {
                init.removeChild(init.firstChild);
            }
            createAbout.appendSection();
            menuBlock.classList.replace("hero__menu-toggle--active", "hero__menu-toggle--hidden");
        });
    }

    return { toggleMenu, switchPage };
})();

export { menu }