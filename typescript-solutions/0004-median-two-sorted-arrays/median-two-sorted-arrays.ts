// Sorted merge approach. O(m + n) time, O(m + n) space
// function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
//     const merged = [...nums1, ...nums2].sort((a, b) => (a - b));
//
//     if (merged.length % 2 == 0) {
//         const middleIndex = merged.length / 2;
//         return (merged[middleIndex - 1] + merged[middleIndex]) / 2;
//     } else {
//         return merged[Math.floor(merged.length / 2)];
//     }
// }

// Binary search approach. O(log(min(m, n))) time, O(1) space
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const shorterArray = nums1.length < nums2.length ? nums1 : nums2;
    const longerArray = nums1.length < nums2.length ? nums2 : nums1;

    const totalLength = shorterArray.length + longerArray.length;

    let low = 0, high = shorterArray.length;
    while (low <= high) {
        const i = Math.floor((low + high) / 2);
        const j = Math.floor(((totalLength + 1) / 2)) - i;

        const maxLp1 = shorterArray[i - 1];
        const maxLp2 = longerArray[j - 1];
        const maxLeftPartition = Math.max(maxLp1 ?? -Infinity, maxLp2 ?? -Infinity);

        const minRp1 = shorterArray[i];
        const minRp2 = longerArray[j];
        const minRightPartition = Math.min(minRp1 ?? Infinity, minRp2 ?? Infinity);

        if (maxLeftPartition <= minRightPartition) {
            // found the partition point
            if (totalLength % 2 === 0) {
                return (maxLeftPartition + minRightPartition) / 2;
            } else {
                return maxLeftPartition;
            }
        } else {
            if ((maxLp2 ?? -Infinity) > (maxLp1 ?? -Infinity)) {
                low = i + 1;
            } else {
                high = i;
            }
        }
    }
}

export default findMedianSortedArrays;