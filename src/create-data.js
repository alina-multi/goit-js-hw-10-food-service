import refs from '/./src/refs.js';
import templateFunction from '/./templates/card.hbs';


export function createCardMarkupGallery(cards) {
    return cards.map(card => templateFunction(card)).join("");
};
export function setTheme (Theme) {
    const dataStorage = localStorage.getItem("theme");
    if (!dataStorage) {
        refs.body.classList.add(Theme.LIGHT);
    }
    else {
        const themeDataOfStorage = localStorage.getItem("theme");
        refs.body.classList.add(themeDataOfStorage);
    }

}