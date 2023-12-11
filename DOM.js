
// 	// let para = document.querySelector('#paraStyle');
// 	// para.setAttribute('style', 'background-color: red');
 

// 	let para = document.getElementById('paraStyle');
// //  para.style.backgroundColor='yellow'
// // para.style.cssText+='color:yellow;backgroundColor:red'
// // css(para,{background:'green',border:'dotted 5px  red '})
// //  Object.assign(para.style, { background: 'green', border: 'dotted 5px red' });
// // para.style.borderWidth='5px'
// // para.style.borderColor = 'red';
// // para.style.borderStyle = 'dotted';
// // para.style.color='blue'
// // para.style.border='dotted 5px red'

// console.log('COMPUTED STYLE');
// let computedStyle=getComputedStyle(para)
// console.log('color:',computedStyle.color);
// let computedStyle2=getComputedStyle(para,':first-letter')
// console.log(computedStyle2.fontSize);

// //CLASS NAME and classList
// // para.className+='one'
// // for(let listOfClasses of para.classList )
// // // console.log(para.className);
// // console.log(listOfClasses);

// para.classList.add('hello','one','second')
// for(let listOfClasses of para.classList )
// console.log(listOfClasses);
// para.classList.remove('hello')
// for(let listOfClasses of para.classList )
// console.log(listOfClasses);

// let width=para.offsetWidth
// let height=para.offsetHeight
// console.log(`The width is ${width} and height is ${height}`);

// let width2=para.clientWidth
// let height2=para.clientHeight
// console.log(`The width is ${width2} and height is ${height2}`);


// console.log('addEventListner');
// document.getElementById('btn').addEventListener('click',todayDate)
// document.getElementById('btn').addEventListener('click',alertFunction)
// function todayDate(){
// 	document.getElementById('displayDate').innerHTML=Date();
// }
// function alertFunction(){
// 	alert('2nd event listner to same element')
// }

// function removeEvent(){
// 	document.getElementById('btn').removeEventListener('click',todayDate)
// }

document.write("Hello from document.write()")