const renderer = conf => {
    const { document, element } = conf;
    let g, svg;
    const initialize = () => {
        svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("viewBox", "0 0 10 10");
        svg.setAttribute("fill", "lightgray");
        svg.setAttribute("stroke", "black");
        g = document.createElement("g");
        g.setAttribute("stroke-width", "0.05");
        g.setAttribute("transform", "matrix(1 0 0 -1 0 10)");
        setTicks(document, g);
        setLabels(document, g);
        svg.appendChild(g);    
    };

    const setLabels = (document, element) => {
        for(let x=1; x<10; x++) {
            renderLabel(document, element, x, 0.5, x);
        }
        for(let y=1; y<10; y++) {
            renderLabel(document, element, 0.5, y, y);
        }
    };

    const renderLabel = (document, element, x, y, text) => {
        console.log(`y=${y}`);
        let label = document.createElement('text');
        label.setAttribute("x", x);
        label.setAttribute("y", y);
        label.setAttribute("fill", "black");
        label.setAttribute("stroke-width", "0.01");
        label.setAttribute("style", "font-size: 0.5");
        label.setAttribute("transform", `rotate(180, ${x}, ${y})`);
        label.innerHTML = text;
        element.appendChild(label);
    };

    const setTicks = (document, element) => {
        for(let x=1; x<10; x++) {
            renderTick(document, element, x, 0, x, 0.1);
        }
        for(let y=1; y<10; y++) {
            renderTick(document, element, 0, y, 0.1, y);
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