const arraySpecific = require('./util/arraySpecific'); // load the module with coresponding path

const result = arraySpecific.fillWith([1, 2, 3], 'a', 1, 3); // use fillWith from arraySpecific module
console.log(result); // > [1, 'a', 'a']