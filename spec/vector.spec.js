import { vector } from 'strands';
describe('vector', () => {
    fdescribe('length', () => {
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
});