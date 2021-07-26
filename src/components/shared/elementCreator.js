export const createElement = (() => {
    const newHeader = document.createElement('header');
    const newSection = document.createElement('section');
    const newFooter = document.createElement('footer');

    const newH1 = document.createElement('h1');
    const newH2 = document.createElement('h2');
    const newH3 = document.createElement('h3');

    const newDiv = document.createElement('div');
    const newParagraph = document.createElement('p');

    const newImage = document.createElement('img');

    return {
        newHeader,
        newSection,
        newFooter,
        newH1,
        newH2,
        newH3,
        newDiv,
        newParagraph,
        newImage
    }

})();