import triangle from 'triangle';
import vector from 'vector';
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
        let index=0;
        let ear;
        // Find first convex ear
        do {
            ear = vertices.slice(index, index+3);
            index++;
        } while (index<vertices.length-2 && angle(ear)>Math.PI/2);
        let remains = vertices.slice();
        remains.splice(index, 1);
        return { ear, remains };
    };

    // return the angle between first and second vector
    const angle = vertices => {
        // first vector
        let v1 = vector({points: vertices.slice(0, 2)});
        // second vector
        let v2 = vector({points: vertices.slice(1)});
        return v1.angle(v2);
    };

    return {
        triangulate
    };
};

export { polygon };