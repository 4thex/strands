import { triangle } from 'strands';
describe('triangle', () => {
    it('works', () => {
        let t1 = triangle();
        expect(t1.size).toBe(6);
    });
    it('orders vertices', () => {
        let t1 = triangle({
            vertices: [
                { x: 0, y: 0 },
                { x: 0, y: 2 },
                { x: 2, y: 0 }
            ]
        });
        let vertices = t1.vertices;
        // How do I detect that the vertices are returned counterclockwise?
        // Answer: ???
        expect(vertices[0]).toEqual(
            [
                { x: 0, y: 0 },
                { x: 0, y: 2 },
                { x: 2, y: 0 }
            ]
        );
    });
});