package com.ljredmond.leetcode.p2

import org.scalatest.flatspec.AnyFlatSpec
import org.scalatest.matchers.should

import scala.annotation.tailrec

class SolutionTest extends AnyFlatSpec with should.Matchers {

  import Solution.addTwoNumbers

  "addTwoNumbers" should "add 342 and 465" in {
    val l1 = createList(2, 4, 3)
    val l2 = createList(5, 6, 4)

    val result = addTwoNumbers(l1, l2)

    listToSeq(result) shouldBe Seq(7, 0, 8)
  }

  it should "add 0 and 0" in {
    val l1 = createList(0)
    val l2 = createList(0)

    val result = addTwoNumbers(l1, l2)

    listToSeq(result) shouldBe Seq(0)
  }

  it should "add 999 and 1" in {
    val l1 = createList(9, 9, 9)
    val l2 = createList(1)

    val result = addTwoNumbers(l1, l2)

    listToSeq(result) shouldBe Seq(0, 0, 0, 1)
  }

  it should "add 9999999 and 9999" in {
    val l1 = createList(9, 9, 9, 9, 9, 9, 9)
    val l2 = createList(9, 9, 9, 9)

    val result = addTwoNumbers(l1, l2)

    listToSeq(result) shouldBe Seq(8, 9, 9, 9, 0, 0, 0, 1)
  }

  it should "add 12345 and 54321" in {
    val l1 = createList(5, 4, 3, 2, 1)
    val l2 = createList(1, 2, 3, 4, 5)

    val result = addTwoNumbers(l1, l2)

    listToSeq(result) shouldBe Seq(6, 6, 6, 6, 6)
  }

  it should "add 1111 and 9999" in {
    val l1 = createList(1, 1, 1, 1)
    val l2 = createList(9, 9, 9, 9)

    val result = addTwoNumbers(l1, l2)

    listToSeq(result) shouldBe Seq(0, 1, 1, 1, 1)
  }

  it should "add 70389745 and 2097346812" in {
    val l1 = createList(5, 4, 7, 9, 8, 3, 0, 7)
    val l2 = createList(2, 1, 8, 6, 4, 3, 7, 0, 9, 2)

    val result = addTwoNumbers(l1, l2)

    listToSeq(result) shouldBe Seq(7, 5, 5, 6, 3, 7, 7, 7, 9, 2)
  }

  private def createList(nums: Int*): ListNode = {
    @tailrec
    def go(nodes: Seq[Int], last: ListNode): ListNode = nodes match {
      case Seq() => last
      case head +: tail =>
        val newNode = new ListNode(head)
        last.next = newNode
        go(tail, newNode)
    }

    val dummy = new ListNode(0)
    go(nums, dummy)
    dummy.next
  }

  private def listToSeq(node: ListNode): Seq[Int] = {
    @tailrec
    def go(n: ListNode, acc: Seq[Int]): Seq[Int] = n match {
      case null => acc
      case _ => go(n.next, acc :+ n.x)
    }

    go(node, Seq.empty)
  }
}