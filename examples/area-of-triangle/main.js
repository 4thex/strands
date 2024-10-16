import triangle from './node_modules/strands/triangle/index.js';
import vector from './node_modules/strands/vector/index.js';
import renderer from './node_modules/strands/renderer/index.js';

window.addEventListener('load', event => {
    const figureElement = document.querySelector('#figure');
    const sizeElement = document.querySelector('#size');
    
    let vertices = [
        { x: 0, y: 0},
        { x: 400, y: 0},
        { x: 200, y: 200}
    ];
    let t = triangle({ vertices });
    let vectors = vertices.reduce((acc, value, index, array) => {
        let result;
        let points;
        if(index == 1) {
            result = [];
            points = [acc, value];
        } else {
            result = acc;
            points = [array[index -1], value];
        }
        result.push(vector({points}));
        return result;
    });
    let r = renderer();
    r.render(figureElement, vectors);

    // let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    // svg.setAttribute("viewBox", "0 0 1000 1000");
    // svg.setAttribute("fill", "lightgray");
    // svg.setAttribute("stroke", "black");
    // let p = document.createElement("polygon");
    // let points = vertices.map(v => {
    //     return `${v.x},${v.y}`;
    // }).join(" ");
    // p.setAttribute("points", points);
    // svg.appendChild(p);
    // figureElement.innerHTML = svg.outerHTML;
    sizeElement.innerHTML = `size = ${t.size}`;
});