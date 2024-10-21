import { polygon } from 'strands';
describe('polygon', () => {
    describe('triangulate', () => {
        it('returns the triangle itself if there are 3 vertices in the polygon', () => {
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
        it('returns two triangles from a rectangle', () => {
            let p = polygon({
                vertices: [
                    { x: 0, y: 0 },
                    { x: 2, y: 0 },
                    { x: 2, y: 2 },
                    { x: 0, y: 2 }
                ]
            });
            let triangles = p.triangulate();
            expect(triangles.length).toBe(2);
            expect(triangles[0].vertices).toEqual([
                { x: 0, y: 0 },
                { x: 2, y: 0 },
                { x: 2, y: 2 }
            ]);
            expect(triangles[1].vertices).toEqual([
                { x: 0, y: 0 },
                { x: 2, y: 2 },
                { x: 0, y: 2 }
            ]);
        });
        it('returns three triangles from a convex pentagon', () => {
            let p = polygon({
                vertices: [
                    { x: 0, y: 0 },
                    { x: 2, y: 0 },
                    { x: 3, y: 1 },
                    { x: 2, y: 2 },
                    { x: 0, y: 2 }
                ]
            });
            let triangles = p.triangulate();
            expect(triangles.length).toBe(3);
            expect(triangles[0].vertices).toEqual([
                { x: 0, y: 0 },
                { x: 2, y: 0 },
                { x: 3, y: 1 }
            ]);
            expect(triangles[1].vertices).toEqual([
                { x: 0, y: 0 },
                { x: 3, y: 1 },
                { x: 2, y: 2 }
            ]);
            expect(triangles[2].vertices).toEqual([
                { x: 0, y: 0 },
                { x: 2, y: 2 },
                { x: 0, y: 2 }
            ]);
            
        });

        it('returns three triangles from a concave pentagon', () => {
            let p = polygon({
                vertices: [
                    { x: 0, y: 0 },
                    { x: 3, y: 0 },
                    { x: 1, y: 1 },
                    { x: 3, y: 2 },
                    { x: 0, y: 2 }
                ]
            });
            let triangles = p.triangulate();
            expect(triangles.length).toBe(3);
            expect(triangles[0].vertices).toEqual([
                { x: 0, y: 0 },
                { x: 3, y: 0 },
                { x: 1, y: 1 }
            ]);
            expect(triangles[1].vertices).toEqual([
                { x: 1, y: 1 },
                { x: 3, y: 2 },
                { x: 0, y: 2 }
            ]);
            expect(triangles[2].vertices).toEqual([
                { x: 0, y: 0 },
                { x: 1, y: 1 },
                { x: 0, y: 2 }
            ]);
            
        });

    });

    // describe('angle', () => {
    //     it('returns angle > 180 degrees', () => {
    //         let vertices = [
    //             { x: 0, y: 0 },
    //             { x: 3, y: 0 },
    //             { x: 1, y: 1 }
    //         ];
    //         let angle = Polygon
    //     });
    // });
});