import twoSum from './two-sum';

describe('twoSum', () => {
    it('should return the indices of two numbers that add up to the target', () => {
        const nums = [2, 7, 11, 15];
        const target = 9;
        const result = twoSum(nums, target);
        expect(result).toEqual([0, 1]);
    });

    it('should work with negative numbers', () => {
        const nums = [-2, -7, 11, 15];
        const target = 4;
        const result = twoSum(nums, target);
        expect(result).toEqual([1, 2]);
    });

    it('should return the indices even if the elements are at the end of the array', () => {
        const nums = [3, 2, 4];
        const target = 6;
        const result = twoSum(nums, target);
        expect(result).toEqual([1, 2]);
    });

    it('should throw an error if no solution is found', () => {
        const nums = [1, 2, 3, 4];
        const target = 10;
        expect(() => twoSum(nums, target)).toThrow('No solution found');
    });
});