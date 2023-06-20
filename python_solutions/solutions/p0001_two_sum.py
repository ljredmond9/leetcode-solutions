from typing import List


def two_sum(nums: List[int], target: int) -> List[int]:
    index_of = {}
    for i, num in enumerate(nums):
        if target - num in index_of:
            return [index_of[target - num], i]
        index_of[num] = i
