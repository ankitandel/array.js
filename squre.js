var a=[2,3,4,5,6]
// var i=0
// var c=[]
// while (i<a.length){
//     c.push(a[i]**2)
//     i++
// }
// console.log(c)


var i=0
var c=[]
var d=[]
while(i<a.length){
    if(a[i]%2==0){
    c.push(i/2)
    }
    else{
        d.push(i*i)
    }
    i++

}
console.log(c)
console.log(d)