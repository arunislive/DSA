const twoSum = function (nums, target) {
  let newArray = [];
  for (let i = 0; i < nums.length; i++) {
    let index1 = target - nums[i];
    for (let a = i + 1; a <= nums.length; a++) {
      if (index1 === nums[a]) {
        newArray.push(i);
        newArray.push(a);
        return newArray;
      }
    }
  }
};
