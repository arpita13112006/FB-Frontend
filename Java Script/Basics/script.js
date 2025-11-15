// const s=10;
// console.log(s);

// const a=11;
// a=20;
// console.log(a);

// console.log(a);
// var a=20;   //pehele hi a print kra diya pta nhi h a kya h (hositing) let hoist nhi hota
// console.log(a);

// let a ;
// console.log(a);
// a=20;

// console.log(a);
// let a=10;

//primitive and non primitive datatype
// type coercion

// let a=20;
// let b="20";
// console.log(a == b); //type coercion
// console.log(a === b);

// if(" "){
//     console.log("hello")
// }else{
//     console.log("bye")
// } //space bhi ek character hai toh true

// if(0){
//     console.log("hello")
// }else{
//     console.log("bye")
// }

// console.log(("lucky"|| undefined ) && (null && 1))     

// ****
// ***
// **

//  var sum=function(a,b){
//      return a+b;
//  };
//  console.log(sum(2,3));

// console.log(a+20);
// const a=10;

// const greeting=(username) => {
//     console.log("hello !"+username);
// };

// greeting();

// const sum=(num1,num2,...rest) => {
//     console.log(num1);
//     console.log(num2);
//     console.log(rest);
// }
// sum(1,2,3,4,5,6,7,8,9,10);


// let a = 5
// let b = 10;
// const arr = [2,3,4,5]
// let sumArrr =a+ b;
// for(i = 0; i < arr.length; i++) {
//     sumArrr = sumArrr + arr[i];
// }
// console.log(sumArrr);


// const sum=(num1,num2,...rest) => {
//     let result=num1+num2;
//     for(let i=0;i<rest.length;i++){
//         result=result+rest[i];
//     }
//     console.log(result);
    
// };
// sum(1,2,3,4,5,6,7,8,9,10);


//const arr=[1,2,3,4,"abhishek",undefined,NaN,null,false];   //sab chlega

// const arr = new Array("abs","def","ghi");
// console.log(arr);

// const start=[1,2,3,4];
// const end=[4,5,6,7];
// const newArr=[];
// for(let num of start){
//     newArr.push(num);
// }
// for(let num of end){
//     newArr.push(num);
// }
// console.log(newArr);


// const start=[1,2,3,4];
// const end=[4,5,6,7];

// const newArr=start.concat(end);
// console.log(newArr);


//  const start=[1,2,3,4,5,6,7,2,4,56,84];

// const index=start.indexOf(56);
// console.log("index of 56 is ",index);

// const start=[1,5,2,7,23,7,8,3,78];

// const sorted=start.sort((a,b) => {
//     return a-b;
// });
// console.log(start);

// const double = start.map((n)=>n*2);
// console.log(start);

//  const arr=[3,5,2,10,7,9];
//  const iseven=(num) => {
//     return num%2===0;
//  };

//  const firsteven = arr.find(iseven);   //find pehela element deta h filter jo jo element pass ho rhe h

 
//  console.log(firsteven);
// call back funct


// const arr=[3,5,2,10,7,9];
// const firsteven=arr.find((num)=>num%2===0);
// console.log(firsteven);

// let name="alice";
// let name="bob";
// console.log(name);

// let num=5;
// if(num>3){
//     let num=10;
//     console.log("inside ",num);
// }
// console.log("outside ",num);

// const isOdd=(num) =>(num%2===0)?even:odd;

// let greet=(name) =>"hello, "+name+"!";

// const message=`Hey ${user} , you have ${points} points!`;

// const person={
//     firstName:"nitin",
//     lastName:"Sharma",
//     age:21,
//     introduce:function(){
//         console.log(`Hi, my name is ${this.firstName} ${this.lastName} and i am ${this.age} years old.`);
//     },
// };
// console.log(person.firstName);
// console.log(person.lastName);
// person.introduce();
// const hisage="age";
// console.log(person[hisage]);

// person.birthYear=2025-person.age;
// person=function(){
// console.log(`Hey my birthyear is ${this.birthYear}`)
// };

// console.log(person); //error

// const alpha=["A","B","C","D","E","F","G","H","I","J"];
// const[,second,,,fifth]=alpha;
// console.log(second,fifth);


// const arr=[1,2,3,4,5,6,7,8,9]
// const[first,second,...rest]=arr;
// console.log(arr);

// const arr=[1,2,3,4,5,6,7,8,9];
// const arr2=[10,11,12,13];
// const result=[...arr,...arr2];
// console.log(result);

let count=10;
const timer=setInterval(() =>{
    console.log(count);
    count--;
    if(count<=0) clearInterval(timer);
    if(count<1) console.log("boom") ;},1000)
