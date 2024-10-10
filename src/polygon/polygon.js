import triangle from 'triangle';
const polygon = (conf) => {
    const vertices = conf.vertices;

    const triangulate = () => {
        return [triangle({vertices})];
    };

    return {
        triangulate
    };
};

export { polygon };