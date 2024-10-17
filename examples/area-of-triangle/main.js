import triangle from './node_modules/strands/triangle/index.js';
import vector from './node_modules/strands/vector/index.js';
import renderer from './node_modules/strands/renderer/index.js';

window.addEventListener('load', event => {
    const figureElement = document.querySelector('#figure');
    const sizeElement = document.querySelector('#size');
    
    let vertices = [
        { x: 2, y: 2},
        { x: 5, y: 2},
        { x: 3.5, y: 4}
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
    let r = renderer({document, element: figureElement});
    r.render(vectors);

    sizeElement.innerHTML = `size = ${t.size}`;
});