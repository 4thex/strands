import triangle from './node_modules/strands/triangle/index.js';
import renderer from './node_modules/strands/renderer/index.js';

window.addEventListener('load', event => {
    const figureElement = document.querySelector('#figure');
    const sizeElement = document.querySelector('#size');
    
    let vertices = [
        { x: 2, y: 2},
        { x: 5, y: 2},
        { x: 7, y: 7}
    ];
    let t = triangle({ vertices });
    let r = renderer({document, element: figureElement});
    r.render(t);

    sizeElement.innerHTML = `size = ${t.size}`;
});