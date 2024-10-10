import { triangle } from 'strands';
describe('triangle', () => {
    it('size returns the area of the triangle', () => {
        let t1 = triangle({
            vertices: [
                { x: 0, y: 0 },
                { x: 0, y: 2 },
                { x: 2, y: 0 }
            ]
        });
        expect(t1.size).toBe(2);
    });
    it('sort returns vertices counterclockwise', () => {
        let t1 = triangle({
            vertices: [
                { x: 0, y: 0 },
                { x: 0, y: 2 },
                { x: 2, y: 0 }
            ]
        });
        let vertices = t1.sort();
        
        expect(vertices).toEqual(
            [
                { x: 0, y: 0 },
                { x: 2, y: 0 },
                { x: 0, y: 2 }
            ]
        );
    });
});