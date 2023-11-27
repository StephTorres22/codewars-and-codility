import {describe, expect, it} from '@jest/globals';
import { nextSmaller, permute } from './nextSmallestNumberSameDigits';

describe('it should return expected result', () => {

    const input = '213';
    const expected = 123;
    const actual = nextSmaller(input);

    it('should return expected...', () => {
        expect(actual).toBe(expected);
    });

});

describe('permutations', () => {

    const input = [1, 2, 3];
    const actual = permute(input);
    const expected = [
        [1, 2, 3],
        [1, 3, 2],
        [2, 1, 3],
        [2, 3, 1],
        [3, 2, 1],
        [3, 1, 2]
    ];

    it('should be of the same length', () => {
        const expectedLength = factorialise(input.length);
        expect(actual.length).toBe(expectedLength);
    });

    it('should be equals', () => {
        expect(actual.toString()).toBe(expected.toString());
    });
})

/*
* Want a test where we can analyse runtime performance.
* permutate with arrays of 2, 4, 8, 16 and 32 elements.
* */

function factorialise(value) {
    var result = value
    for (var i = (value - 1) ; i > 0; i--) {
        result = result * i;
    }
    return result;
}
