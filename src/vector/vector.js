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

    return {
        get length() { return length(); }
    };
};

export { vector };