const triangle = (conf) => {
    let vertices = conf.vertices;

    const size = {
        get value() {
            let v = sort();
            let result = Math.abs(v[0].x*(v[1].y-v[2].y)+v[1].x*(v[2].y-v[0].y)+v[2].x*(v[0].y-v[1].y))/2;
            return result;
        }
    };


    const sort = () => {
        let result = vertices.slice();
        let p1 = vertices[0];
        let p2 = vertices[1];
        let p3 = vertices[2];
        
        // Calculate slope between p1 and p2
        let a1 = (p2.y-p1.y)/(p2.x-p1.x);
        // Calculate slope between p1 and p3
        let a2 = (p3.y-p1.y)/(p3.x-p1.x);
        if(a1 > a2) {
            result[1] = p3;
            result[2] = p2;
        }
        return result;
    };

    return {
        size: size.value,
        sort
    };
};

export { triangle };