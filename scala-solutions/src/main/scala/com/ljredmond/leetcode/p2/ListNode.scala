package com.ljredmond.leetcode.p2

// Would probably use something like this personally..
// case class ListNode(x: Int = 0, next: Option[ListNode] = None)

// But this is what Leetcode wants 😬
class ListNode(_x: Int = 0, _next: ListNode = null) {
  var next: ListNode = _next
  var x: Int = _x
}