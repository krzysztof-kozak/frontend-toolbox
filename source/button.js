// These styles are scoped to this .js file.
// These are essentially CSS modules thanks to our webpack configuration.
import style from './button.module.scss';
import printMe from './print';

export default function button() {
	const btn = document.createElement('button');
	btn.textContent = 'Click Me!';
	btn.classList.add(style.button);
	btn.addEventListener('click', () => printMe());

	return btn;
}
