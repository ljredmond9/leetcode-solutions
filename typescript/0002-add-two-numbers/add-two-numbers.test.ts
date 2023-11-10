import addTwoNumbers from './add-two-numbers';
import ListNode from '../util/list-node';

const buildLinkedList = (nums: number[]): ListNode | null => {
    let dummy = new ListNode();
    let current = dummy;
    for (let num of nums) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummy.next;
};

const linkedListToArray = (node: ListNode | null): number[] => {
    const result: number[] = [];
    while (node) {
        result.push(node.val);
        node = node.next;
    }
    return result;
};

describe('addTwoNumbers', () => {
    it('adds two numbers with no carry', () => {
        const l1 = buildLinkedList([2, 4, 3]);
        const l2 = buildLinkedList([5, 6, 4]);
        const result = addTwoNumbers(l1, l2);
        expect(linkedListToArray(result)).toEqual([7, 0, 8]);
    });

    it('adds two numbers with carry', () => {
        const l1 = buildLinkedList([9, 9, 9, 9, 9, 9, 9]);
        const l2 = buildLinkedList([9, 9, 9, 9]);
        const result = addTwoNumbers(l1, l2);
        expect(linkedListToArray(result)).toEqual([8, 9, 9, 9, 0, 0, 0, 1]);
    });

    it('adds two single digit numbers with no carry', () => {
        const l1 = buildLinkedList([2]);
        const l2 = buildLinkedList([3]);
        const result = addTwoNumbers(l1, l2);
        expect(linkedListToArray(result)).toEqual([5]);
    });

    it('adds two single digit numbers with carry', () => {
        const l1 = buildLinkedList([5]);
        const l2 = buildLinkedList([7]);
        const result = addTwoNumbers(l1, l2);
        expect(linkedListToArray(result)).toEqual([2, 1]);
    });

    it('adds a number to zero', () => {
        const l1 = buildLinkedList([0]);
        const l2 = buildLinkedList([1, 2, 3]);
        const result = addTwoNumbers(l1, l2);
        expect(linkedListToArray(result)).toEqual([1, 2, 3]);
    });
});