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

    return { toggleMenu };
})();

export { menu }