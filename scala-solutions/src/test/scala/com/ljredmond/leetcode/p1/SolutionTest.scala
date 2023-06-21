package com.ljredmond.leetcode.p1

import org.scalatest.flatspec.AnyFlatSpec
import org.scalatest.matchers.should

class SolutionTest extends AnyFlatSpec with should.Matchers {

  import Solution.twoSum

  "twoSum" should "return indices of the two numbers such that they add up to target" in {
    twoSum(Array(2, 7, 11, 15), 9) should contain theSameElementsAs Array(0, 1)
  }

  it should "handle a case where the solution is the first and last element" in {
    twoSum(Array(0, 4, 3, 0), 0) should contain theSameElementsAs Array(0, 3)
  }

  it should "handle an array of length 2" in {
    twoSum(Array(3, 3), 6) should contain theSameElementsAs Array(0, 1)
  }

  it should "handle a simple case" in {
    twoSum(Array(3, 2, 4), 6) should contain theSameElementsAs Array(1, 2)
  }

  it should "handle a case with negative numbers" in {
    twoSum(Array(-3, 4, 3, 90), 0) should contain theSameElementsAs Array(0, 2)
  }
}
