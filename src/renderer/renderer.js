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
        let tick = document.createElement("line");
        tick.setAttribute("x1", "1");
        tick.setAttribute("y1", "0");
        tick.setAttribute("x2", "1");
        tick.setAttribute("y2", "0.1");
        g.appendChild(tick);
        svg.appendChild(g);    
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