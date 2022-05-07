var list=[[2,3,4],[1,2,4],[5,6],[9],[7,8,5]]
var i=0
var a=[]
while (i<list.length){
    var j=0
    while (j<list[i].length){
        var n=(list[i][j])
        a.push(n)
        j++
    }
    i++
}
console.log(a)

