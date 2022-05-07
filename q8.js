var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7];
var i=0
var a=numbers[0]
while(i<numbers.length){
    if(numbers[i]>a){
        var a=numbers[i]
    }
    i++
}
console.log(a)