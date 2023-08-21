//美团笔试
const nums = [3, 1, 2, 7, 10, 2, 4];
const dp = Array(nums.length).fill(0);
let res = 0;
dp[0] = nums[0];
dp[1] = Math.max(nums[0], nums[1]);
dp[2] = Math.max(dp[1], nums[2]);
for (let i = 3; i < nums.length; i++) {
  dp[i] = Math.max(dp[i - 1], dp[i - 3] + nums[i]);
  console.log(dp[i]);
  res = Math.max(res, dp[i]);
  //   console.log(res);
}
console.log(res);
