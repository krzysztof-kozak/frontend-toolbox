import "./style.css";
import _ from "lodash";
import BoxSvg from "./assets/images/box.svg";
import CsvData from "./data/data.csv";
import JsonData from "./data/data.json";
import Json5Data from "./data/data.json5";
import TomlData from "./data/data.toml";
import Yaml5Data from "./data/data.yaml";
import printMe from "./print";
import module from "./singleRuntimeChunkTest.js";

module.count++;
console.log("index.js", { count: module.count });

console.log(CsvData);
console.log(JsonData);
console.log(Json5Data);
console.log(TomlData);
console.log(Yaml5Data);

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

function button() {
  const btn = document.createElement("button");
  btn.textContent = "Click Me!";
  btn.classList.add("button");
  btn.addEventListener("click", () => printMe());

  return btn;
}

document.body.appendChild(header());
document.body.appendChild(button());
