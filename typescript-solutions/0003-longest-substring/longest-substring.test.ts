import lengthOfLongestSubstring from "./longest-substring";

describe('lengthOfLongestSubstring', () => {
    it('returns the correct length for a string with all unique characters', () => {
        const input = 'abcdefg';
        const output = lengthOfLongestSubstring(input);
        expect(output).toBe(7);
    });

    it('returns the correct length for a string with repeating characters', () => {
        const input = 'pwwkew';
        const output = lengthOfLongestSubstring(input);
        expect(output).toBe(3);
    });

    it('returns the correct length for a string with the same character', () => {
        const input = 'bbbbbb';
        const output = lengthOfLongestSubstring(input);
        expect(output).toBe(1);
    });

    it('returns the correct length for a string with spaces', () => {
        const input = ' ';
        const output = lengthOfLongestSubstring(input);
        expect(output).toBe(1);
    });

    it('returns the correct length for an empty string', () => {
        const input = '';
        const output = lengthOfLongestSubstring(input);
        expect(output).toBe(0);
    });

    it('returns the correct length for a string with alphanumeric characters', () => {
        const input = 'Aa123Bb456Cc789';
        const output = lengthOfLongestSubstring(input);
        expect(output).toBe(15);
    });

    it('returns the correct length for a string with all ASCII printable characters repeated', () => {
        const input = ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~'.repeat(100);
        const output = lengthOfLongestSubstring(input);
        expect(output).toBe(95);
    });

    it('returns the correct length for a complex string with repeating patterns', () => {
        const input = 'abc123xyz123abc1234567890abcdefghijklmnopqrstuvwxyz1234567890abcdefghijklmnopqrstuvwxyz';
        const output = lengthOfLongestSubstring(input);
        expect(output).toBe(36);
    });
});