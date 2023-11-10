import ListNode from '../util/list-node';

type MaybeListNode = ListNode | null;

/**
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse
 * order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
 *
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 *
 * Constraints:
 *
 * The number of nodes in each linked list is in the range [1, 100].
 * 0 <= Node.val <= 9
 * It is guaranteed that the list represents a number that does not have leading zeros.
 */
export default function addTwoNumbers(l1: MaybeListNode, l2: MaybeListNode): MaybeListNode {
    const dummy = new ListNode();

    let current = dummy;
    let carry = 0;

    while (l1 || l2) {
        const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;

        carry = Math.floor(sum / 10);

        current.next = new ListNode(sum % 10);
        current = current.next;

        l1 = l1?.next ?? null;
        l2 = l2?.next ?? null;
    }

    if (carry) {
        current.next = new ListNode(carry);
    }

    return dummy.next;
}