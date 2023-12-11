// let student={
// 	studentName:'Ram',
// 	age:17,
// 	displayInformation:function(){
// 		console.log("The name of student is "+student.studentName+" and age of the student is "+student.age);

// 	},
// 	marks:{
// 		English:22,
// 		Maths:100
// 	}
// }
// // console.log(student.marks.English);
// // console.log(student.marks['Maths']);
// // console.log(student['marks']['English']);
// // // delete student.age
// // student.displayInformation()
// //  console.log(student.studentName);
// // console.log(student['age']);
// // console.log();
// // console.log('============================');
// // let secondStudent=new Object()
// // secondStudent.studentName='Syam'
// // console.log(secondStudent);
// // console.log(secondStudent.hasOwnProperty('studentName'));
// // console.log(secondStudent.hasOwnProperty('age'));
// // console.log();
// // console.log('===============================');
// // let ob1={};
// // let ob2={};
// // Object.defineProperty(ob1,'c',{
// // 	value:100,
// // 	enumerable:false,
// // 	writable:false,
// // 	configuarable: false
// // });
// // ob1.c;
// // console.log(Object.getOwnPropertyDescriptor(ob1,'c'));
// // var ob={};
// // Object.defineProperty(ob,'a',{configuarable:true,value:1});
// // ob;
// // delete ob.a;
// // ob;
// // Object.defineProperty(ob2,'a',{configuarable:false,writable:true});
// // Object.defineProperty(ob2,'a',{enumenrable:true});
// console.log('============================');
// let studentClone=student
// console.log(studentClone);
// console.log();
// //Object.assign
// let studentClones=Object.assign({},student)
// console.log('Using Object.assign :'+studentClones);
// console.log();
// let studentClo={...student}
// console.log('Using Spread operator :'+studentClo);
// console.log();
// let studentClonne=JSON.parse(JSON.stringify(student))
// console.log('Using JSON: '+studentClonne);
let student = {
  studentName: 'Ram',
  age: 17,
  displayInformation: function () {
    console.log("The name of student is " + student.studentName + " and age of the student is " + student.age);
  },
  marks: {
    English: 22,
    Maths: 100
  }
}

let studentClone = student;
console.log(studentClone);
console.log();

// Object.assign
let studentClones = Object.assign({}, student);
console.log('Using Object.assign:', studentClones);
console.log();

// Spread operator
let studentClo = { ...student };
console.log('Using Spread operator:', studentClo);
console.log();

// JSON.parse and JSON.stringify
let studentClonne = JSON.parse(JSON.stringify(student));
console.log('Using JSON:', studentClonne);


