const renderer = conf => {

    const render = (element, vectors) => {
        let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("viewBox", "0 0 1000 1000");
        svg.setAttribute("fill", "lightgray");
        svg.setAttribute("stroke", "black");
        let p = document.createElement("polygon");
        let points = vectors.map(v => {
            return `${v.points[0].x},${v.points[0].y} ${v.points[1].x},${v.points[1].y}`;
        }).join(" ");
        p.setAttribute("points", points);
        svg.appendChild(p);    
        element.innerHTML = svg.outerHTML;
    };

    return {
        render
    };
};

export { renderer };