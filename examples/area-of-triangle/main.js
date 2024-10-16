import triangle from './node_modules/strands/triangle/index.js';
window.addEventListener('load', event => {
    const figureElement = document.querySelector('#figure');
    const sizeElement = document.querySelector('#size');
    
    let vertices = [
        { x: 0, y: 0},
        { x: 400, y: 0},
        { x: 200, y: 200}
    ];
    let t = triangle({ vertices });
    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 1000 1000");
    svg.setAttribute("fill", "gray");
    svg.setAttribute("stroke", "black");
    let p = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    let points = vertices.map(v => {
        return `${v.x},${v.y}`;
    }).join(" ");
    p.setAttribute("points", points);
    svg.appendChild(p);
    figureElement.innerHTML = svg.outerHTML;
    sizeElement.innerHTML = `size = ${t.size}`;
});