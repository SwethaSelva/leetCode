/**
 * https://leetcode.com/problems/find-duplicate-file-in-system/
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function(paths) {
  let contentHash = {};
  for (let i = 0; i < paths.length; i++) {
    let dir = '';
    let j = 0;
    let fileName = '';
    let content = '';
    while (j < paths[i].length) {
      while (paths[i][j] !== ' ') dir += paths[i][j++];
      if (paths[i][j] === ' ') j++;
      while (paths[i][j] !== '(') fileName += paths[i][j++];
      if (paths[i][j] === '(') j++;
      while (paths[i][j] !== ')') content += paths[i][j++];
      if (!contentHash[content]) contentHash[content] = [];
      contentHash[content].push(`${dir}/${fileName}`);
      fileName = '';
      content = '';
      j++;
    }
  }
  let duplicates = [];
  for (let contentPath in contentHash) {
    if (contentHash[contentPath].length > 1) duplicates.push(contentHash[contentPath])
  }
  return duplicates;
};

console.log(findDuplicate(
  ["root/a 1.txt(abcd) 2.txt(efgh)","root/c 3.txt(abcd)","root/c/d 4.txt(efgh)","root 4.txt(efgh)"]
));
console.log(findDuplicate(
  ["root/a 1.txt(abcd) 2.txt(efsfgh)","root/c 3.txt(abdfcd)","root/c/d 4.txt(efggdfh)"]
));
// [["root/a/2.txt","root/c/d/4.txt","root/4.txt"],["root/a/1.txt","root/c/3.txt"]]