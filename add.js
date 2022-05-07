var list=[["g","f","g"],["i","s"],["b","e","s","t"]]
var i=0
c=""
while (i<list.length){
    var j=0
    while (j<list[i].length){
        c+=(list[i][j])
        j++
    }
    i++
}
console.log(c)

