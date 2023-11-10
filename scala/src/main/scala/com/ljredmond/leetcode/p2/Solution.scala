package com.ljredmond.leetcode.p2

import scala.annotation.tailrec

// https://leetcode.com/problems/add-two-numbers/
object Solution {
  def addTwoNumbers(l1: ListNode, l2: ListNode): ListNode = {
    @tailrec
    def go(l1: Option[ListNode], l2: Option[ListNode], carry: Int, acc: ListNode): ListNode = {
      (l1, l2) match {
        case (None, None) if carry == 0 => acc
        case (None, None) if carry > 0 =>
          acc.next = new ListNode(carry)
          acc
        case _ =>
          val l1Val = l1.map(_.x).getOrElse(0)
          val l2Val = l2.map(_.x).getOrElse(0)
          val sum = l1Val + l2Val + carry
          val nextCarry = sum / 10
          val nextVal = sum % 10

          val nextNode = new ListNode(nextVal)
          acc.next = nextNode

          val nextL1 = l1.flatMap(l => Option(l.next))
          val nextL2 = l2.flatMap(l => Option(l.next))

          go(nextL1, nextL2, nextCarry, nextNode)
      }
    }

    val dummy = new ListNode()
    go(Option(l1), Option(l2), 0, dummy)
    dummy.next
  }
}
