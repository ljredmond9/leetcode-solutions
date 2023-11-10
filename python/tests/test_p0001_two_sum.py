import pytest
from solutions.p0001_two_sum import two_sum


@pytest.mark.parametrize(
    "nums, target, expected",
    [
        ([2, 7, 11, 15], 9, [0, 1]),  # Simple case
        ([3, 2, 4], 6, [1, 2]),  # Target is sum of non-first elements
        ([0, 4, 3, 0], 0, [0, 3]),  # Target is 0
        ([-3, 4, 3, 90], 0, [0, 2]),  # Negative numbers in list
        ([1, 3, 4, 2], 6, [2, 3])  # Last two elements sum to target
    ],
)
def test_two_sum(nums, target, expected):
    result = two_sum(nums, target)
    assert set(result) == set(expected)
