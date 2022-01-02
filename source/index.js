import _ from "lodash";
import button from "./button";
import "./style.css";

import BoxSvg from "./assets/images/box.svg";
import printMe from "./print";

function header() {
  const h1 = document.createElement("h1");
  h1.classList.add("font-700");

  const boxLogo = new Image();
  boxLogo.src = BoxSvg;
  boxLogo.classList.add("logo-svg");

  const paragraph = document.createElement("p");
  paragraph.textContent = _.join(["Hello", "Webpack"], " ");

  h1.appendChild(boxLogo);
  h1.appendChild(paragraph);

  return h1;
}

document.body.appendChild(header());
document.body.appendChild(button());
