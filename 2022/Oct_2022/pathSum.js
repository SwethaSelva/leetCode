var pathSum = function (root, targetSum, result = [], curResult = []) {
  if (!root) return result;
  if (!root.left && !root.right && targetSum - root.val === 0) {
    result.push([...curResult, root.val]);
  }
  root.left && pathSum(root.left, targetSum - root.val, result, [...curResult, root.val]);
  root.right && pathSum(root.right, targetSum - root.val, result, [...curResult, root.val])
  return result;
};