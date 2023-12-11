console.log('Loops-->For,While,Do-While');
console.log('entry control loops-for and while \n exit control loop-Do-While');
// //FOR SYNTAX
// for (intialization;CSSConditionRule;inc/dec){
// 	Code;
// } 1.INI2.COND 3.CODE 4.INC/DEC 5.COND 6.CODE 

//while
// INI
// while(COND){ConvolverNode;INC/DEC}1.INI 2.COND 3.CODE 4.INC/DEC 5.CIND

//DO-WHILE SYNTAX-->CHECKS CONDITION AT LAST
// INITIALIZATION
// DO{
// 	CoDE;
// 	INC/DEC
// }while(COND)
// Flow-->1.ini 2.do code 3.inc/dec 4.cond 5.code
console.log('FOR-LOOP');
let fact=1;
for(let num=1;num<=20;num++){
	fact=fact* num;
}
console.log(fact);

let facto=1;
let num=1
for(;num<=20;num++){
	facto=facto* num;
}
console.log(facto);
console.log('FOR_IN_LOOP=Access value of key');
var studentAge={
	'ram':12,
	'shyam':15

}
for(let name in studentAge){
	console.log(studentAge[name]);
}
console.log();
console.log('FOR-OF-->Accesslist value');
let number=[1,2,3,4,5]
for(let value of number){
	let result=value*10
console.log(result);
}
console.log();
console.log('WHILE_LOOP');
let m=1;
let s=0
while(m<=10){
	s=s+m;
	m++;
  
}console.log(`the sum is ${s}`);
console.log();
console.log('D_WHILE LOOP');
let v=10;
do{
	console.log(v);
	v--;
}
while(v<0)