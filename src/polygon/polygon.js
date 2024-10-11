import triangle from 'triangle';
const polygon = (conf) => {
    const vertices = conf.vertices;

    const triangulate = () => {
        if(vertices.count == 3) {
            return [triangle({vertices})];
        }
        let ear = vertices.slice(0, 3);
        let remains = vertices.slice().splice(1, 1);
        return [ear, remains];
    };

    return {
        triangulate
    };
};

export { polygon };