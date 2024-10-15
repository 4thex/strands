const vector = conf => {
    let points = conf.points;

    const length = () => {
        let p1 = points[0];
        let p2 = points[1];
        let dx = p2.x - p1.x;
        let dy = p2.y - p1.y;
        let result = Math.sqrt(Math.pow(dx, 2)+Math.pow(dy, 2));
        return result;
    };

    const dot = v2 => {
        let x1 = points[1].x-points[0].x;
        let y1 = points[1].y-points[0].y;
        let x2 = v2.points[1].x-v2.points[0].x;
        let y2 = v2.points[1].y-v2.points[0].y;
        let result = x1*x2+y1*y2;
        return result;
    };

    const angle = v2 => {
        let result = Math.acos(dot(v2)/(length()*v2.length));
        return result;
    };

    return {
        get length() { return length(); },
        points,
        dot,
        angle
    };
};

export { vector };