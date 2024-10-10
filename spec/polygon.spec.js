import { polygon } from 'strands';
describe('polygon', () => {
    it('triangulate returns the triangle itself if there are 3 vertices in the polygon', () => {
        let p = polygon({
            vertices: [
                { x: 0, y: 0 },
                { x: 2, y: 0 },
                { x: 0, y: 2 }
            ]
        });
        let triangles = p.triangulate();
        expect(triangles.length).toBe(1);
        expect(triangles[0].vertices).toEqual([
            { x: 0, y: 0 },
            { x: 2, y: 0 },
            { x: 0, y: 2 }
        ]);
    });
});