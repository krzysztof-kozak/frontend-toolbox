/*
These styles are scoped to this .js file.
They are essentially a CSS module thanks to our webpack configuration.
*/
import style from './button.module.scss';

function createButton() {
  const btn = document.createElement('button');
  btn.textContent = 'Click Me!';

  // This is a local class - it doesn't leak outside this component.
  btn.classList.add(style.button); // .button

  return btn;
}

const button = createButton();
export default button;
