
let numstr = '234.1 23.2 34.34 3423 99.3223 73';

console.log(numstr.split(/\s+/).map(Number))
// Array(6) [234.1, 23.2, 34.34, 3423, 99.3223, 73]
// likely the most consice way to split 
// numbers and match them into Number values
// here Number is the constructor function  

console.log(numstr.match(/([\d\.]+)+/))
// Array(2) [ '234.1', '234.1', index: 0, input: numstr ]
//  matches only the first result

console.log(numstr.match(/([\d\.]+)+/g))
// Array(6) ["234.1", "23.2", "34.34", "3423", "99.3223", "73"]
// (3) note how the /g modifier at the end of Regexp 
// changes the behaviour of the match call

let v, re = /[\d\.]+/g

while (v = re.exec('234.234 23.34 565.65')) { 
  console.log(v); 
}
// more comprehensive results  for the above operation 
// Array(1) [ '234.234', index: 0, input: '234.234 23.34 565.65' ]
// Array(1) [ '23.34', index: 8, input: '234.234 23.34 565.65' ] 
// Array(1) [ '565.65', index: 14, input: '234.234 23.34 565.65' ] 


re = /[\d\.]+/
// removing   ^ the g modifier results in endless loop

let cnt = 0;

while (v = re.exec('234.234 23.34 565.65')) { 
  console.log(v); 
  if (cnt > 6) throw "too many RegEXp results";
}
// note: this was written and commited from the mass
// transportation, thus proving that commute time may be 
// used reasonably for various tasks. 3G sponsor'd by myslf  