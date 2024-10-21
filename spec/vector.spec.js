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
        it('returns the acute angle to another vectors', () => {
            let v1 = vector({points: [
                { x: 0, y: 0 },
                { x: 4, y: 0 }
            ]});
            let v2 = vector({points: [
                { x: 4, y: 0 },
                { x: 2, y: 2 }
            ]});
            let angle = v1.angle(v2);
            expect(angle).toBeCloseTo(Math.PI*2*135/360, 4);
        });
        it('returns the obtuse angle to another vectors', () => {
            let v1 = vector({points: [
                { x: 0, y: 0 },
                { x: 2, y: 0 }
            ]});
            let v2 = vector({points: [
                { x: 2, y: 0 },
                { x: 4, y: 2 }
            ]});
            let a = v1.angle(v2);
            console.log(`angle = ${a*180/Math.PI} degrees`);
            expect(a).toBeCloseTo(Math.PI*2*45/360, 4);
        });
    });
});