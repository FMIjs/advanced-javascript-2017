function func(...args) {
  // const arr = [].slice.call(arguments);
  console.log(args);
}
console.log(func.length);
func(1, 2, 3);
