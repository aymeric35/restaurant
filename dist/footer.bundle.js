/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/components/shared/elementCreator.js
const createElement = (element) => {
    return document.createElement(element);
};

const content = (() => {
    const id = document.getElementById("content");

    return { id };
})();
;// CONCATENATED MODULE: ./src/components/footer/footer.js



const createFooter = (() => {
    const appendFooter = () => {
        const footer = document.body.insertBefore(createElement('footer'), content.id.nextSibling);
        const container = footer.appendChild(createElement('div'));
        container.classList.add("container");
        const p = container.appendChild(createElement('p'));
        p.textContent = "Copyright © 2021 Aymeric35";
    }

    return { appendFooter }

})();

createFooter.appendFooter();
/******/ })()
;
//# sourceMappingURL=footer.bundle.js.map