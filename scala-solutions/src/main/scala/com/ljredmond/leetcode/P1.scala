package com.ljredmond.leetcode

import scala.annotation.tailrec

// https://leetcode.com/problems/two-sum/
object P1 {
  def twoSum(nums: Array[Int], target: Int): Array[Int] = {

    @tailrec
    def twoSum(currentIndex: Int, indexOf: Map[Int, Int]): Array[Int] = {
      val currentVal: Int = nums(currentIndex)
      val complement = target - currentVal

      indexOf.get(complement) match {
        case Some(complementIndex) => Array(complementIndex, currentIndex)
        case None => twoSum(currentIndex + 1, indexOf + (currentVal -> currentIndex))
      }
    }

    twoSum(0, Map.empty)
  }
}
