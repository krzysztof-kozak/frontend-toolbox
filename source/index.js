import "./style.css";
import BoxSvg from "./assets/images/box.svg";
import CsvData from "./data/data.csv";
import JsonData from "./data/data.json";
import Json5Data from "./data/data.json5";
import TomlData from "./data/data.toml";
import Yaml5Data from "./data/data.yaml";

console.log(CsvData);
console.log(JsonData);
console.log(Json5Data);
console.log(TomlData);
console.log(Yaml5Data);

function component() {
  const h1 = document.createElement("h1");
  h1.classList.add("font-700");

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
