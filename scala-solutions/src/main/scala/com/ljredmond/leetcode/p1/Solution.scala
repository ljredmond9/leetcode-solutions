package com.ljredmond.leetcode.p1

import scala.annotation.tailrec

// https://leetcode.com/problems/two-sum/
object Solution {
  def twoSum(nums: Array[Int], target: Int): Array[Int] = {
    @tailrec
    def go(currentIndex: Int, indexOf: Map[Int, Int]): Array[Int] = {
      val currentVal: Int = nums(currentIndex)
      val complement = target - currentVal

      indexOf.get(complement) match {
        case Some(complementIndex) => Array(complementIndex, currentIndex)
        case None => go(currentIndex + 1, indexOf + (currentVal -> currentIndex))
      }
    }

    go(0, Map.empty)
  }
}
