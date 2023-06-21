import findMedianSortedArrays from "./median-two-sorted-arrays";

describe('findMedianSortedArrays', () => {
    it('returns the median of two sorted arrays of odd total length', () => {
        const nums1 = [1, 3];
        const nums2 = [2];
        expect(findMedianSortedArrays(nums1, nums2)).toBe(2);
    });

    it('returns the median of two sorted arrays of even total length', () => {
        const nums1 = [1, 2];
        const nums2 = [3, 4];
        expect(findMedianSortedArrays(nums1, nums2)).toBe(2.5);
    });

    it('returns the median of two sorted arrays with negative numbers', () => {
        const nums1 = [-5, -3, -1];
        const nums2 = [-4, -2, 0];
        expect(findMedianSortedArrays(nums1, nums2)).toBe(-2.5);
    });

    it('returns the median of two sorted arrays with one array being empty', () => {
        const nums1 = [];
        const nums2 = [1, 2, 3, 4, 5];
        expect(findMedianSortedArrays(nums1, nums2)).toBe(3);
    });

    it('returns the median of two sorted arrays with one array having one element', () => {
        const nums1 = [100];
        const nums2 = [1, 2, 3, 4, 5];
        expect(findMedianSortedArrays(nums1, nums2)).toBe(3.5);
    });
});