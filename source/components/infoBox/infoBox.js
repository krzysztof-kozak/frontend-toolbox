/*
These styles are scoped to this .js file.
They are essentially a CSS module thanks to our webpack configuration.
*/
import style from './infoBox.module.scss';

function createInfoBox() {
  const box = document.createElement('div');
  box.classList.add(style.box);

  const title = document.createElement('h2');
  title.classList.add(style.title);
  title.textContent = './components/infoBox';

  const info = document.createElement('p');
  info.classList.add(style.info);
  info.textContent = 'Yooo!';

  box.appendChild(title);
  box.appendChild(info);
  return [box, info];
}

const infoBox = createInfoBox();
export default infoBox;
