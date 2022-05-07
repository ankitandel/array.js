var list=["11","33","50"]
var i=0
var c=" "
while (i<list.length){
    var j=0
    while (j<list[i].length){
        c+=list[i][j]
        j++
    }
    i++
}
console.log(c)


