export const createElement = (element) => {
    return document.createElement(element);
};

export const content = (() => {
    const id = document.getElementById("content");

    return { id };
})();