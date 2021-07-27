/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 175:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ createElement),
/* harmony export */   "k": () => (/* binding */ content)
/* harmony export */ });
const createElement = (element) => {
    return document.createElement(element);
};

const content = (() => {
    const id = document.getElementById("content");

    return { id };
})();

/***/ }),

/***/ 129:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5ffff0b3bca119b1937b.jpg";

/***/ }),

/***/ 576:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createBody)
/* harmony export */ });
/* harmony import */ var _components_shared_elementCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(175);
/* harmony import */ var _pate_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(768);
/* harmony import */ var _pizza_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(656);





const createBody = (() => {
    const bodyContent = _components_shared_elementCreator__WEBPACK_IMPORTED_MODULE_0__/* .content.id */ .k.id;

    const appendSection1 = () => {

        const section = (0,_components_shared_elementCreator__WEBPACK_IMPORTED_MODULE_0__/* .createElement */ .a)('section');
        section.classList.add("sec-1");
        bodyContent.appendChild(section);

        const container = (0,_components_shared_elementCreator__WEBPACK_IMPORTED_MODULE_0__/* .createElement */ .a)('div');
        container.classList.add("container", "sec-1__content");
        section.appendChild(container);

        const imgContainer = (0,_components_shared_elementCreator__WEBPACK_IMPORTED_MODULE_0__/* .createElement */ .a)('div');
        imgContainer.classList.add("sec-1__img");
        container.appendChild(imgContainer);

        const img = (0,_components_shared_elementCreator__WEBPACK_IMPORTED_MODULE_0__/* .createElement */ .a)('img');
        img.src = _pate_jpg__WEBPACK_IMPORTED_MODULE_1__;
        img.setAttribute("alt", "Une boule de pâte à pizza entreprosée dans des mains");
        imgContainer.appendChild(img);

        const text = (0,_components_shared_elementCreator__WEBPACK_IMPORTED_MODULE_0__/* .createElement */ .a)('div');
        text.classList.add("sec-1__text");
        container.appendChild(text);

        const h2 = (0,_components_shared_elementCreator__WEBPACK_IMPORTED_MODULE_0__/* .createElement */ .a)('h2');
        h2.textContent = "Lorem ipsum";
        text.appendChild(h2);

        const p = (0,_components_shared_elementCreator__WEBPACK_IMPORTED_MODULE_0__/* .createElement */ .a)('p');
        p.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus placerat a eget dui molestie vitae sit.";
        text.appendChild(p);
    }

    const appendSection2 = () => {
        const section = (0,_components_shared_elementCreator__WEBPACK_IMPORTED_MODULE_0__/* .createElement */ .a)('section');
        section.classList.add("sec-2");
        bodyContent.appendChild(section);

        const container = (0,_components_shared_elementCreator__WEBPACK_IMPORTED_MODULE_0__/* .createElement */ .a)('div');
        container.classList.add("container", "sec-2__content");
        section.appendChild(container);

        const imgContainer = (0,_components_shared_elementCreator__WEBPACK_IMPORTED_MODULE_0__/* .createElement */ .a)('div');
        imgContainer.classList.add("sec-2__img");
        container.appendChild(imgContainer);

        const img = (0,_components_shared_elementCreator__WEBPACK_IMPORTED_MODULE_0__/* .createElement */ .a)('img');
        img.src = _pizza_jpg__WEBPACK_IMPORTED_MODULE_2__;
        img.setAttribute("alt", "Pizza posée devant un four");
        imgContainer.appendChild(img);

        const text = (0,_components_shared_elementCreator__WEBPACK_IMPORTED_MODULE_0__/* .createElement */ .a)('div');
        text.classList.add("sec-2__text");
        container.appendChild(text)

        const h2 = (0,_components_shared_elementCreator__WEBPACK_IMPORTED_MODULE_0__/* .createElement */ .a)('h2');
        h2.textContent = "Lorem ipsum";
        text.appendChild(h2);

        const p = (0,_components_shared_elementCreator__WEBPACK_IMPORTED_MODULE_0__/* .createElement */ .a)('p')
        p.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus placerat a eget dui molestie vitae sit.";
        text.appendChild(p);
    }

    return { appendSection1, appendSection2 };
})();



/***/ }),

/***/ 768:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "405fee10ac1c063db1bb.jpg";

/***/ }),

/***/ 656:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "acc77a3f41f782620ea1.jpg";

/***/ }),

/***/ 183:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e22974d6beaff0e29c8a.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// EXTERNAL MODULE: ./src/components/shared/elementCreator.js
var elementCreator = __webpack_require__(175);
// EXTERNAL MODULE: ./src/pages/home/home.js
var home_home = __webpack_require__(576);
// EXTERNAL MODULE: ./src/pages/menu/menu.jpg
var menu = __webpack_require__(183);
;// CONCATENATED MODULE: ./src/pages/menu/menu.js




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
            const container = (0,elementCreator/* createElement */.a)('div');
            container.classList.add("sec-menu__list");
            listHolder.appendChild(container);

            const recipeContainer = (0,elementCreator/* createElement */.a)('div')
            recipeContainer.classList.add("sec-menu__recipe-container");
            container.appendChild(recipeContainer);

            const title = (0,elementCreator/* createElement */.a)('h3');
            title.classList.add("sec-menu__recipe-title");
            title.textContent = recipe.name;
            recipeContainer.appendChild(title);

            const border = (0,elementCreator/* createElement */.a)('div');
            border.classList.add("border");
            recipeContainer.appendChild(border);

            const ingredients = (0,elementCreator/* createElement */.a)('p');
            ingredients.classList.add("sec-menu__recipe-ingredients")
            ingredients.textContent = recipe.ingredients;
            recipeContainer.appendChild(ingredients);

            const priceContainer = (0,elementCreator/* createElement */.a)('div');
            priceContainer.classList.add("sec-menu__price-container");
            container.appendChild(priceContainer);

            const price = (0,elementCreator/* createElement */.a)('p')
            price.textContent = recipe.price;
            priceContainer.appendChild(price);

        })
    }

    return { generate };
})();

const createMenu = (() => {
    const bodyContent = elementCreator/* content.id */.k.id;

    const appendSection = () => {
        const section = (0,elementCreator/* createElement */.a)('section');
        section.classList.add("sec-menu");
        bodyContent.appendChild(section);

        const container = (0,elementCreator/* createElement */.a)('div');
        container.classList.add("container", "sec-menu__content");
        section.appendChild(container);

        const h2 = (0,elementCreator/* createElement */.a)('h2');
        h2.textContent = "Menu";
        container.appendChild(h2);

        const imgContainer = (0,elementCreator/* createElement */.a)('div');
        imgContainer.classList.add("sec-menu__img");
        container.appendChild(imgContainer);

        const img = (0,elementCreator/* createElement */.a)('img');
        img.src = menu;
        imgContainer.appendChild(img);

        const menuContainer = (0,elementCreator/* createElement */.a)('div');
        menuContainer.classList.add("container", "list-holder");
        section.appendChild(menuContainer);

        menuList.generate();
    }

    return { appendSection };

})();
// EXTERNAL MODULE: ./src/pages/about/about.jpg
var about = __webpack_require__(129);
;// CONCATENATED MODULE: ./src/pages/about/about.js




const createAbout = (() => {
    const bodyContent = elementCreator/* content.id */.k.id;

    const appendSection = () => {
        const section = (0,elementCreator/* createElement */.a)('section');
        section.classList.add("sec-about");
        bodyContent.appendChild(section);

        const container = (0,elementCreator/* createElement */.a)('div');
        container.classList.add("container");
        section.appendChild(container);
        const title = (0,elementCreator/* createElement */.a)('h2');
        title.textContent = "À Propos";
        container.appendChild(title);
        const img = (0,elementCreator/* createElement */.a)('img');
        img.src = about;
        container.appendChild(img);
        const paragraph = (0,elementCreator/* createElement */.a)('p');
        paragraph.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam turpis ac interdum a. Rhoncus
        pellentesque cras sodales posuere adipiscing sed urna pharetra gravida. Mauris porttitor tempus
        pharetra, libero ullamcorper commodo diam ut. Bibendum interdum risus luctus non ullamcorper arcu
        enim proin at. Sem eleifend arcu lacus, viverra. Egestas ipsum platea eu nec.`;
        container.appendChild(paragraph);
    }

    return { appendSection };
})();
;// CONCATENATED MODULE: ./src/components/menu/navMenu.js





const navMenu_menu = (() => {

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
        const init = elementCreator/* content.id */.k.id;
        const home = document.querySelector('nav li:nth-child(1)');
        const menu = document.querySelector('nav li:nth-child(2)');
        const about = document.querySelector('nav li:nth-child(3)');
        const menuBlock = document.querySelector(".hero__menu-toggle--hidden");

        home.addEventListener('click', () => {
            while (init.firstChild) {
                init.removeChild(init.firstChild);
            }
            home_home/* createBody.appendSection1 */.c.appendSection1();
            home_home/* createBody.appendSection2 */.c.appendSection2();
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



home_home/* createBody.appendSection1 */.c.appendSection1();
home_home/* createBody.appendSection2 */.c.appendSection2();
;// CONCATENATED MODULE: ./src/components/header/header.js




const createHeader = (() => {

    const appendHeader = () => {
        const headerDOM = document.body.insertBefore((0,elementCreator/* createElement */.a)('header'), elementCreator/* content.id */.k.id);
        headerDOM.classList.add("hero");

        const heroContainer = headerDOM.appendChild((0,elementCreator/* createElement */.a)('div'));
        heroContainer.classList.add("hero__container");

        const heroSubContainer = heroContainer.appendChild((0,elementCreator/* createElement */.a)('div'));
        heroSubContainer.classList.add("container", "hero__subcontainer");

        const h1 = heroSubContainer.appendChild((0,elementCreator/* createElement */.a)('h1'));
        h1.textContent = 'Breizh Pizza';

        const menu = heroSubContainer.appendChild((0,elementCreator/* createElement */.a)('div'));
        menu.id = "menu";
        menu.classList.add("hero__menu");

        menu.insertAdjacentHTML('afterBegin',
        `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 18H4M20 12H12M20 6L4 6" stroke="#F97316" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>`);

        const nav = heroSubContainer.appendChild((0,elementCreator/* createElement */.a)('nav'));
        nav.classList.add("hero__menu-toggle--hidden");
        const ul = nav.appendChild((0,elementCreator/* createElement */.a)('ul'));
        const li = ul.append(
            (0,elementCreator/* createElement */.a)('li'),
            (0,elementCreator/* createElement */.a)('li'),
            (0,elementCreator/* createElement */.a)('li')
        );
        document.querySelector('li:nth-child(1)').textContent = "Accueil";
        document.querySelector('li:nth-child(2)').textContent = "Menu";
        document.querySelector('li:nth-child(3)').textContent = "À Propos";

    }



    return { appendHeader };
})();

createHeader.appendHeader();
navMenu_menu.toggleMenu();
navMenu_menu.switchPage();
})();

/******/ })()
;
//# sourceMappingURL=header.bundle.js.map