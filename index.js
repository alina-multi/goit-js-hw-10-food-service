
import templateFunction from './templates/card.hbs';
import cards from './menu.json';
import refs from './src/refs.js';
import { onSwitchToggle } from './src/handler.js';
import Theme from './src/theme-data';
import listener from './src/listener.js';
import {createCardMarkupGallery, setTheme} from './src/create-data.js';



const cardMarkup = createCardMarkupGallery(cards);
refs.gallery.insertAdjacentHTML('beforeend', cardMarkup);
setTheme(Theme);




    


