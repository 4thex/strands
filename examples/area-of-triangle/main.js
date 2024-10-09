import strands from './node_modules/strands/strands.es6.js';
window.addEventListener('load', event => {
    const resultElement = document.querySelector('#result');
    resultElement.innerHTML = strands.add(1, 2);
});