import "./style.css";
import BoxSvg from "./box.svg";

function component() {
  const h1 = document.createElement("h1");

  const boxLogo = new Image();
  boxLogo.src = BoxSvg;
  boxLogo.classList.add("logo-svg");

  const paragraph = document.createElement("p");
  paragraph.textContent = "Hello Webpack";

  h1.appendChild(boxLogo);
  h1.appendChild(paragraph);

  return h1;
}

document.body.appendChild(component());
