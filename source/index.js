// These are global styles (a default css behaviour)
import './css/reset.css';
import './css/style.scss';

import { button, infoBox, logo, getRandomGreeting } from './components';

const [box, info] = infoBox;

button.addEventListener('click', handleClick);

function handleClick() {
  info.textContent = getRandomGreeting();
}

document.body.appendChild(logo);
document.body.appendChild(button);
document.body.appendChild(box);
