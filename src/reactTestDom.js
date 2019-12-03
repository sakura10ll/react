
import { initVnode } from "./reactTestVDom";

function render(vdom,container) {
    // console.info(vdom,container);

    let rootNode = initVnode(vdom);
    container.appendChild(rootNode);
}

export default {render};