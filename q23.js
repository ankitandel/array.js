// var list=["ankita","priti","pooja","namira"];
// console .log(list.length)

// var list=["ankita","priti","pooja","namira"];
// list.push("aman")
// console.log(list)

// var list=["ankita","priti","pooja","namira"];
// list.shift()
// console.log(list)

// var list=["ankita","priti","pooja","namira"];
// list.unshift("anki")
// console.log(list)

// var list=["ankita","priti","pooja","namira"];
// list.pop()
// console.log(list)

// var list=["ankita","priti","pooja","namira"];
// var b=[1,2,3,4,]
// var i=0
// var s=[]
// while (i<list.length){
//     s.push(list[i])
//     s.push(b[i])
//     i++
// }
// console.log(s)

// var list=["ankita","priti","pooja","namira","ankita","priti"];
// var i=0
// len=list.length
// var b=[]
// for(var i=0;i<len;i++){
//     if(!b.includes(list[i])){
//         b.push(list[i]);
//     }
// }console.log(b)

// var a=[1,2,3,4,5]
// var ca=a.pop()
// console.log(ca)


// var a=[1,2,3,4,5]
// a.unshift(10)
// console.log(a)

// var a=[1,2,3,4,5]
// a.push(15)
// console.log(a)

// var a=[1,5,2,3,4,5,6,1,2,3,4]
// var i=0
// var b=[]
// len=a.length
// for(var i=0; i<len;i++){
//     if(!b.includes(a[i])){
//         b.push(a[i])
//     }
// }
// console.log(b)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();  
// console.log(fruits)

// var a=[1,6,7,4,9,2,5,3,8];
// var i=1
// while(i<=a.length){
//     console.log(i);
//     i++
// }

//  var i=0
// while(i<a.length){
// var a=[1,4,6,8,9,5,6,3]
// for  (let i=0;i<a.length;i++){
//     for (let j=0;j<a.length;j++){
//         if(a[j]>a[j+1]){
//             b=a[j]
//             a[j]=a[j+1]
//             a[j+1]=b
//         }
//     }
// }
// console.log(a);

// var a=[1,4,6,8,9,5,6,3]
// let i=0
// while(i<a.length){
//     let j=0
//     while (j<a.length){
//         if(a[j]>a[j+1]){
//             b=a[j]
//             a[j]=a[j+1]
//             a[j+1]=b
//         }
//         j++
//     }
//     i++
// }
// console.log(a);


// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// fruits.splice(2, 0, "Lemon", "Kiwi");
// console.log(fruits)


// const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// fruits.splice(2,1); 
// console.log(fruits)

// let readlineasync=require("readline-sync");
// var num1=readlineasync.questionInt("enter the number");
// var num2=readlineasync.questionInt("enter the number");
// var num3=readlineasync.questionInt("enter the number");
// if(num2>num1 && num1>num3||num3>num1 && num1>num2){
//     console.log(num1 ,"it is middle number");
// }
// if(num1>num2 && num2>num3 ||num3>num2 && num2>num1){
//     console.log(num2,"it is middle number")
// }
// if(num1>num3 && num3>num2 || num2>num3 && num3>num1){        /
//     console .log(num3,"it is middle number")
// }

//  var arr=[1,3,4,6,7,8,9,3,5]
// var i=0
// let median;
// while(i<arr.length){
//     if(arr.length%2!=0){
//         let middleIndex=Math.floor(arr.length/2)
//         median=arr[middleIndex]
//     }
//     else{
//         let middleIndex=Math.floor(arr.length/2)
//         median=arr[middleIndex]+arr[middleIndex +1]
//     }
//     i++
// }
// console.log(median)


// const arr=[1,2,3,4,5,6,7]
// const mapped=arr.map(Element=>Element+30)
// console.log(mapped)


// const arr=[4,6,8,2,3,9,5]
// let s=arr.sort()
// console.log(s)


// const arr=[4,6,8,2,3,9,5]
// arr.forEach(Element=>{
//     console.log(Element)
// });

// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];
// console.log (arr1.concat(arr2));
     
// const arr=[4,6,8,2,3,9,5]
// const graterFive=arr.every(num=>num>5);
// console.log(graterFive)

 
// const arr=[4,6,8,2,3,9,5]
// const lessing=arr.every(num=>num<9);
// console.log(lessing)

// const arr=[1,2,3,4,5,6]
// console.log(arr.includes(2))
// console.log(arr.includes(7))

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const keys = fruits.keys();

// const arr=[1,2,3,4,5,6]
// arr.forEach(item=>{
//     console.log(item);
// });


// const arr=[1,2,3,4,5,6]
// let b=arr.includes(7);
// console.log(b)

// var fruits=["apple","mongo","banana"]
// b=fruits.shift()
// console.log(b)

// var fruits=["apple","mongo","banana"]
// fruits.unshift("pich")
// console.log(fruits)

// var fruits=["apple","mongo","banana"]
// fruits.splice(2,0,"coconut")
// console.log(fruits)


// var fruits=[1,2,3,4,5,6]
// console.log(fruits.includes(2))

// var fruits=["apple","mongo","banana"]
// console.log(fruits.includes("mongo"))


// var fruits=[1,2,3,4,5,6]
// add=fruits.map(num=>num+2)
// console.log(add)

// var fruits=[1,2,3,4,5,6]
// add=fruits.filter(num=>num<2)
// console.log(add)


// var fruits=[1,2,3,4,5,6]
// add=fruits.reduce((total,value)=>total+value,0)
// console.log(add)

// var i=0
// while(i<10){
//     i++
//     if(i==5){continue}
//         console.log(i)
// }

// var i=0
// while(i<10){
//     if(i==5){break}
//     i++
//         console.log(i)
// }