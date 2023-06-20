package com.ljredmond.leetcode

import org.scalatest.flatspec.AnyFlatSpec
import org.scalatest.matchers.should

class P1Test extends AnyFlatSpec with should.Matchers {

  "twoSum" should "return indices of the two numbers such that they add up to target" in {
    P1.twoSum(Array(2, 7, 11, 15), 9) should contain theSameElementsAs Array(0, 1)
    P1.twoSum(Array(3, 2, 4), 6) should contain theSameElementsAs Array(1, 2)
    P1.twoSum(Array(0, 4, 3, 0), 0) should contain theSameElementsAs Array(0, 3)
    P1.twoSum(Array(-3, 4, 3, 90), 0) should contain theSameElementsAs Array(0, 2)
    P1.twoSum(Array(3, 3), 6) should contain theSameElementsAs Array(0, 1)
  }
}
