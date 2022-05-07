let a=[1,2,5,2,1,8]
let b=[]
let len=a.length;
for(let i=0;i<len;i++){
    if(!b.includes(a[i])){
        b.push(a[i]);
    }
}
console.log(b)

// var z=[19,23,45,12,13,12,18,191,18,17]
// var i=0
// var a=[]
// while(i<z.length){
//     j=z[i]
//     if(!a.includes(z[i])){
//         a.push(z[i])
//     }
//     i++
// }
// console.log(a)

