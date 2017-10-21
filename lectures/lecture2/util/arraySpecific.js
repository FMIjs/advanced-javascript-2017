var loadsh = require('lodash'); // require module lodash from node_modules folder
// node_modules folder is generated when we firstly use npm install <module_name>
// we don't need to specify the path to the node_modules folder 
// if lodash is not found in the current node_modules folder a lookup will be performed
// and if it's found in the global node_modules folder it will be required from there (check npm install -g command (g stands for global))

// we can thing of our files as objects when they are inported so here we are attaching a key fillWith to the object
// that will point to a function reference
exports.fillWith = function (arr, elem, startIndex, endIndex) {
  return loadsh.fill(arr, elem, startIndex, endIndex);
}

// another possible way of exporting things is (you can uncomment this part and comment lines 9 to 11 to test it):
// module.exports = {
//   fillWith: function (arr, elem, startIndex, endIndex) {
//     return loadsh.fill(arr, elem, startIndex, endIndex);
//   }
// };

// when we are directly adding functions to our module (line 9) the 'module' keyword can be omitted
// read about .gitignore here -> https://github.com/github/gitignore
// basically it tells git that certain directories should not be pushed to the repo