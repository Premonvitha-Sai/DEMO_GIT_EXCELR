// function changeBgColor(){
// 	let field=document.getElementById('fname')
// 	field.style.backgroundColor='green'
// }

// const retrievingValue = () => {
// 	let field = document.getElementById("onChangeDemo").value;
// 	console.log(field);
// 	document.getElementById('demo').innerHTML = field;
// }
// const changeBgColor=()=>
// {
// 	let field=document.getElementById('textField')
// 	field.style.color='blue'
// 	field.style.backgroundColor='yellow'
// }

// const alertValue=()=>
// {
// 	let field=document.getElementById('textField').value
//   alert('Seeing the usage of onsubmit '+field+'value')
// }

console.log('Keyboard Events');
console.log('1st Keydown event');
const keyDownDemo=()=>{
	document.getElementById('keydownEvent').style.backgroundColor='green'
}

//keypress
const keyPressDemo=()=>
{
	let val=document.getElementById('keypressEvent').value
  alert(`The value which is typed is ${val} `)
}

//keyup
const keyUpDemo=()=>{
	document.getElementById('keyupEvent').style.backgroundColor='yellow'
}

//mouseup
function mouseUpDemo()
{
	document.getElementById('bodyId').style.backgroundColor='lightblue'
}

//mouseDown
function mouseDownDemo()
{
	document.getElementById('divId').style.backgroundColor='lightgreen'
	document.getElementById('buttonId').style.backgroundColor='lightpink'
}

const mouseMoveDemo=()=>{
	document.getElementById('inputId').style.backgroundColor='cyan'
}

//mouseOver
const  mouseOverDemo=()=>
{
	document.getElementById('divID').style.backgroundColor='red'
}
const  mouseOutDemo=()=>
{
	document.getElementById('divID').style.backgroundColor='blue'
}

//mouseEnter
const mouseEnterDemo=()=>{
	document.getElementById('inputID1').style.backgroundColor='violet'
	document.getElementById('inputID2').style.backgroundColor='violet'
}

//mouseLeave
//mouseEnter
const mouseLeaveDemo=()=>
{
	document.getElementById('inputID1').style.backgroundColor='darkgreen'
	document.getElementById('inputID2').style.backgroundColor='darkgreen'

}

// //window Events
// //onLoad
// const onLoadDemo=()=>
// {
// 	document.getElementById('pId').innerHTML='Image is not supported';
// }
