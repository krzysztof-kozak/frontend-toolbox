import styles from './button.css';

export default function button() {
	const btn = document.createElement('button');
	btn.textContent = 'Click Me!';
	btn.classList.add(styles.button);
	btn.addEventListener('click', () => printMe());

	return btn;
}
