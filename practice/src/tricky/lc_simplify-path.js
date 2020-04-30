// https://leetcode.com/problems/simplify-path/

/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  let simplifiedPath = path.replace(/\/*\//g, '/');
  const sameFolder = new RegExp(/\/\.\//, 'g');
  while (simplifiedPath.search(sameFolder) > -1) {
    simplifiedPath = simplifiedPath.replace(sameFolder, '/');
  }

  if (simplifiedPath[simplifiedPath.length - 1] === '/') {
    simplifiedPath = simplifiedPath.substring(0, simplifiedPath.length - 1);
  }

  const result = [];
  const splittedPath = simplifiedPath.split('/');
  splittedPath.shift();
  while (splittedPath.length > 0) {
    const folder = splittedPath.shift();
    if (folder === '..') {
      result.pop();
    } else {
      result.push(folder);
    }
  }
  let final = result.join('/');
  if (final.substring(final.length - 2) === '/.') {
    final = final.substring(0, final.length - 2);
  }
  if (final === '.') {
    final = '';
  }
  return `/${final}`;
};

console.log(simplifyPath('/home/')); //  "/home"

console.log(simplifyPath('/../')); //  "/"

console.log(simplifyPath('/home//foo/')); //  "/home/foo"

console.log(simplifyPath('/a/./b/../../c/')); //  "/c"

console.log(simplifyPath('/a/../../b/../c//.//')); //  "/c"

console.log(simplifyPath('/a//b////c/d//././/..')); // "/a/b/c"

console.log(simplifyPath('/.'));

console.log(simplifyPath('/home/of/foo/../../bar/../../is/./here/.')); //  "/is/here"

console.log(simplifyPath('/...')); //  "/..."

console.log(simplifyPath('/abc/...')); // "/abc/..."
