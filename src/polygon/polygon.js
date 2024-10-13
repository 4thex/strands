import triangle from 'triangle';
const polygon = (conf) => {
    const vertices = conf.vertices;

    const triangulate = () => {
        if(vertices.length == 3) {
            return [triangle({vertices})];
        }
        let result = [];
        let ear;
        let remains = vertices.slice();
        while(remains.length > 3) {
            ({ ear, remains } = flip(remains));
            result.push(triangle({vertices: ear}));
        }
        result.push(triangle({vertices: remains}));
        return result;
    };

    // Flip an ear off
    const flip = vertices => {
        let ear = vertices.slice(0, 3);
        let remains = vertices.slice();
        remains.splice(1, 1);
        return { ear, remains };
    };

    // return the angle between first and second vector
    const angle = vertices => {
        // first vector
        let v1 = [vertices[0], vertices[1]];
        // second vector
        let v2 = [vertices[1], vertices[2]];
        let x1 = v1[1].x-v1[0].x;
        let x2 = v2[1].x-v2[0].x;
        let y1 = v1[1].y-v1[0].y;
        let y2 = v2[1].y-v2[0].y;
        
        // arccos
        let angle = Math.acos(v1[])
    };

    return {
        triangulate
    };
};

export { polygon };