// var marks = [
//     [78, 76, 94, 86, 88],
//     [91, 71, 98, 65, 76],
//     [95, 45, 78, 52, 49]
// ];
// var sum=0;
// for(var i of marks){
//     for(var j of i){
//         sum+=j
//     }
// }
// console.log(sum);


var marks = [
    [78, 76, 94, 86, 88],
    [91, 71, 98, 65, 76],
    [95, 45, 78, 52, 49]
];

var i=0
var sum=0
while(i<marks.length){
    var a=0
    var t=0
    while(a<marks[i].length){
        t=t+(marks[i][a])
        a++
    }
    sum=sum+t
    i++
}console.log(sum)