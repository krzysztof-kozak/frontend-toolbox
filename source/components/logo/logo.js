/*
These styles are scoped to this .js file.
They are essentially a CSS module thanks to our webpack configuration.
*/
import style from './logo.module.scss';
import BoxSvg from '../../assets/images/box.svg';

function createLogo() {
  const h1 = document.createElement('h1');

  // This css class is available globally.
  h1.classList.add('font-700');

  // This is a local class - it doesn't leak outside this component.
  h1.classList.add(style.title); // .title

  const boxLogo = new Image();
  boxLogo.src = BoxSvg;

  // This is a local class - it doesn't leak outside this component.
  boxLogo.classList.add(style.logoSvg); // .logoSvg

  const paragraph = document.createElement('p');
  paragraph.textContent = _.join(['Hello', 'Webpack'], ' ');

  h1.appendChild(boxLogo);
  h1.appendChild(paragraph);

  return h1;
}

const logo = createLogo();
export default logo;
