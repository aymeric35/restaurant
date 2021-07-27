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

/***/ 768:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "405fee10ac1c063db1bb.jpg";

/***/ }),

/***/ 656:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "acc77a3f41f782620ea1.jpg";

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
/* unused harmony export createBody */
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


})();

/******/ })()
;
//# sourceMappingURL=home.bundle.js.map