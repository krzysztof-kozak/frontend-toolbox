import _ from "lodash";
import module from "./singleRuntimeChunkTest.js";

export default function printMe() {
  const fileName = _.join(["print", "js"], ".");
  console.log(`I get called from ${fileName}!`);
  module.count++;
  console.log("print.js", { count: module.count });
}
