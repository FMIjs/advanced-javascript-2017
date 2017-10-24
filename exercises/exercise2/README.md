# Упражнение 2

1.Напишете функция curry, която взима дадена функция f като аргумент и ни връща нова функция, чрез която частично можем да прилагаме f.
Пример:
```js
function trippleAdd(a, b, c) {
    return a + b + c;
}

cTrippleAdd = curry(trippleAdd);

console.log(cTrippleAdd(1)(2)(3)); //6
console.log(cTrippleAdd(1, 2)(3)); //6
console.log(cTrippleAdd(1, 2, 3)); //6
```