import refs from '/./src/refs.js';
import Theme from '/./src/theme-data.js';


export function onSwitchToggle(e) {
    const currentClassList = refs.body.classList;

    const themeLight = refs.body.classList.contains(Theme.LIGHT);
    if (themeLight) {
        refs.body.classList.remove(Theme.LIGHT);
        refs.body.classList.add(Theme.DARK);
        localStorage.setItem("theme", Theme.DARK);
    } else {
        refs.body.classList.add(Theme.LIGHT)
        refs.body.classList.remove(Theme.DARK);
        localStorage.setItem("theme", Theme.LIGHT)
    }
}