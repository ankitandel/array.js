var a=[1,2,[3,4],5,6,[7,8],[9,10]]
var i=0
var sum=0
while (i<a.length){
    if ((a[i])==(a)){
        var j=0
        while (j<a[i].length){
            sum=sum+a[i][j]
            j++
        }
    }
    else{
        sum=sum+a[i]
        i++
    }
}
console.log(sum)


