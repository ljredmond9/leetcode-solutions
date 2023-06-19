/**
 * Given a string s, find the length of the longest substring without repeating characters.
 *
 * Constraints:
 *
 * 0 <= s.length <= 5 * 10^4
 * s consists of English letters, digits, symbols and spaces.
 */
export default function lengthOfLongestSubstring(s: string): number {
    let solution = 0;

    const largestIndexOf: Record<string, number> = {};

    for (let startWindow = 0, endWindow = 0; endWindow < s.length; endWindow++) {
        const char = s.charAt(endWindow);

        if (largestIndexOf[char] !== undefined) {
            startWindow = Math.max(largestIndexOf[char] + 1, startWindow);
        }

        solution = Math.max(solution, endWindow - startWindow + 1);
        largestIndexOf[char] = endWindow;
    }

    return solution;
};