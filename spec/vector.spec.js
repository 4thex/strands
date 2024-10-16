import { vector } from 'strands';
describe('vector', () => {
    describe('length', () => {
        it('returns the distance between the two ends of the vector', () => {
            let v = vector({points: [
                { x: 0, y: 0 },
                { x: 4, y: 3 }
            ]});
            let length = v.length;
            expect(length).toBe(5);
        });
        it('returns the distance for a negative vector', () => {
            let v = vector({points: [
                { x: 0, y: 0 },
                { x: -4, y: -3 }
            ]});
            let length = v.length;
            expect(length).toBe(5);
        });
    });
    describe('dot', () => {
        it('returns the dot product to another vectors', () => {
            let v1 = vector({points: [
                { x: 0, y: 0 },
                { x: 4, y: 0 }
            ]});
            let v2 = vector({points: [
                { x: 4, y: 0 },
                { x: 2, y: 2 }
            ]});
            let dot = v1.dot(v2);
            // 4*-2+0*-2
            expect(dot).toBe(-8);
        });
    });
    describe('angle', () => {
        it('returns the angle to another vectors', () => {
            let v1 = vector({points: [
                { x: 0, y: 0 },
                { x: 4, y: 0 }
            ]});
            let v2 = vector({points: [
                { x: 4, y: 0 },
                { x: 2, y: 2 }
            ]});
            let angle = v1.angle(v2);
            expect(angle).toBe(Math.PI*2*135/360);
        });
    });
});