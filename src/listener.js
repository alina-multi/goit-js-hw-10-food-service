import refs from '/./src/refs.js';
import { onSwitchToggle } from '/./src/handler.js';


export default refs.switchRef.addEventListener("change", onSwitchToggle);
