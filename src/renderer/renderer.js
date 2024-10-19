const renderer = conf => {
    const { document, element } = conf;
    let g, svg;
    const initialize = () => {
        svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("viewBox", "0 0 10 10");
        svg.setAttribute("fill", "lightgray");
        svg.setAttribute("stroke", "black");
        svg.setAttribute("style", "height: 100%");
        g = document.createElement("g");
        g.setAttribute("stroke-width", "0.05");
        g.setAttribute("transform", "matrix(1 0 0 -1 0 10)");
        setGrid(document, g);
        setTicks(document, g);
        setLabels(document, svg);
        svg.appendChild(g);    
    };

    const setGrid = (document, element) => {
        for(let i=1; i<10; i++) {
            renderLine(document, element, i, 0, i, 10); // vertical
            renderLine(document, element, 0, i, 10, i); // horizontal
        }
    };

    const renderLine = (document, element, x1, y1, x2, y2) => {
        let line = document.createElement('line');
        line.setAttribute('x1', x1);
        line.setAttribute('y1', y1);
        line.setAttribute('x2', x2);
        line.setAttribute('y2', y2);
        line.setAttribute("stroke-width", "0.005");
        line.setAttribute("stroke", "blue");
        element.appendChild(line);
    };

    const setLabels = (document, element) => {
        for(let i=1; i<10; i++) {
            renderLabel(document, element, i-0.15, 9.85, i);
            renderLabel(document, element, 0.2, 10.2-i, i);
        }
    };

    const renderLabel = (document, element, x, y, text) => {
        let label = document.createElement('text');
        label.setAttribute("x", x);
        label.setAttribute("dx", 0);
        label.setAttribute("y", y);
        label.setAttribute("dy", 0);
        label.setAttribute("fill", "black");
        label.setAttribute("stroke-width", "0.01");
        label.setAttribute("style", "font-size: 0.5");
        label.innerHTML = text;
        element.appendChild(label);
    };

    const setTicks = (document, element) => {
        for(let i=1; i<10; i++) {
            renderTick(document, element, i, 0, i, 0.05);
            renderTick(document, element, 0, i, 0.05, i);
        }
    };

    const renderTick = (document, element, x1, y1, x2, y2) => {
        let tick = document.createElement("line");
        tick.setAttribute("x1", x1);
        tick.setAttribute("y1", y1);
        tick.setAttribute("x2", x2);
        tick.setAttribute("y2", y2);
        element.appendChild(tick);
    };
 
    const render = (vectors) => {
        let p = document.createElement("polygon");
        let points = vectors.map(v => {
            return `${v.points[0].x},${v.points[0].y} ${v.points[1].x},${v.points[1].y}`;
        }).join(" ");
        p.setAttribute("points", points);
        g.appendChild(p);    
        element.innerHTML = svg.outerHTML;
    };

    initialize();

    return {
        render
    };
};

export { renderer };