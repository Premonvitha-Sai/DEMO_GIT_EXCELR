let numArray=[1,2,3,4]
let stringArray=new Array('A','BC','DE')
let valueArray=Array.of(5,6,7,8,9)
console.log(typeof(valueArray));
console.log('at index 0:'+valueArray[0]);
for(const iterator of valueArray){
	console.log(iterator);
}
console.log();
console.log('length of string array:'+stringArray.length);
console.log();
console.log(stringArray[stringArray.length-1])
console.log();
let sum=0
numArray.forEach(summation)
function summation(item){
	sum=sum+item;
}
console.log('SUM:'+sum);
console.log();
stringArray.push('Javascript')
stringArray.unshift('Java')

//console.log(stringArray.pop);
// stringArray.pop()
for(const iterator of stringArray){
	console.log(iterator);
}
console.log();
let numArray2=numArray.slice(1,2)
for(const iterator of numArray){
	console.log(iterator);
}
console.log();
console.log('CONCAT');
let thirdArray=numArray.concat(valueArray)
for (const iterator of thirdArray){
	console.log(iterator);
}
console.log();
let numberArray=[6,2,8,9,5,7]
console.log('SORT');
console.log(numberArray.sort())

console.log();
console.log('REVERSE');
numberArray.reverse()
for(const iterator of numberArray){
	console.log(iterator);
}
console.log();
console.log('SPLICE');
numberArray.splice(3,0,10,11,12)//adds or removes elelemts based on ur wish
for(const iterator of numberArray){
	console.log(iterator);
}
console.log();
console.log('MAP ARRAY');
let mapArray=numberArray.map(multiplicationByTen)
function multiplicationByTen(value)
{
	return value*10
}
console.log(mapArray);console.log();
console.log('FILTER ARRAY');
let filterArray=numberArray.filter(multiplicationByTen)
function greaterthan6(value)
{
	return value>6
}
console.log(filterArray);
console.log();
console.log('Find ARRAY');
let findArray=numberArray.find(greaterthan6)
function greaterthan6(value){
	return value>6
}
console.log(findArray);