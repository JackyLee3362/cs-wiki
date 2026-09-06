class Solution:
    def searchInsert(self, nums: list[int], target: int) -> int:
        low, high = 0, len(nums) - 1
        while low <= high:
            mid = ((high - low) >> 1) + low
            if nums[mid] == target:
              return mid
            elif nums[mid] > target:
                high = mid - 1
            else:
                low = mid + 1
        return low
if __name__ == "__main__":
  solution = Solution()
  ans = solution.searchInsert([-1,0,3,5,9,12], 0)
  print(ans)