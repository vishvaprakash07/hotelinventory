import { Calculator } from './test';

describe('test', () => {
    it('should add 2 numbers', () => {
        const service = new Calculator();
        expect(service.add(2,2)).toBe(4);
    });

    it('should subtract two numbers', () => {
        const service = new Calculator();
        expect(service.subtract(2,2)).toBe(0);
    });

    it('should multiply two numbers', () => {
        const service = new Calculator();
        expect(service.multiply(3,3)).toBe(9);
    });
});