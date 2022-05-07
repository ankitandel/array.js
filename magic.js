var m = [
    [5, 3, 4],
    [1, 5, 9],
    [1, 7, 2]

]

var v=15
var b=0
while (b<m.length){
    var column=0
    var sum=0
    let s=m[b].length
    while (column<s){
        var sum=sum+m[b][column]
        var column=column+1
    }
    console.log(sum,"column")
    var a=sum+sum+sum
    b=b+1
}
console.log(a)
var j=0
while (j<m.length){
    var row=0
    var sum1=0
    while (row<m[j].length){
        var sum1=sum1+m[row][row]
        var row=row+1
    }
    console.log(sum,"row")
    var h=sum1+sum1+sum1
    var j=j+1
}  
console.log(h)
var x=m[0][0]+m[1][1]+m[2][2]
const z=m[0][2]+m[1][1]+m[2][0]
if (x==v){
    if (z==v){
        var c=x
        console.log("diagonal:",c)
        if (x==v){
            console.log("it is magic square")
        }
        else{
            console.log("it is not magic square")
        }
    }
    else{
        console.log("it is not magic square")
    }
}
else{
    console.log("it is not magic square")
}