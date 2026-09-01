class Solution:
    def search(self, nums: list[int], target: int) -> int:
        low, high = 0, len(nums) - 1
        
        while low <= high:
            mid = ((high - low)  >>  2) + low # /是浮点除，//是地板除
            if target == nums[mid]:
                return mid
            elif target > nums[mid]:
                low = mid + 1
            else:
                high = mid - 1
        return -1
if __name__ == "__main__":
  solution = Solution()
  ans = solution.search([-1,0,3,5,9,12], 13)
  print(ans)
