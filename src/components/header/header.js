import { createElement } from "../shared/elementCreator";
import { content } from "../../index";

const createHeader = () => {
    return document.body.appendChild(createElement.newHeader);

};

createHeader();