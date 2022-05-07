// var nums = [3,4,0,0,0,6,2,0,6,7,6,0,0,0,9,10,7,4,4,5,3,0,0,2,9,7,1]
// var a=[]
// var i=0
// while (i<nums.length){
//     if (nums[i]==0){
//         a.push(nums[i])
//     }
//     i=i+1
// }
// console.log(a)


var nums = [3,4,0,0,0,6,2,0,6,7,6,0,0,0,9,10,7,4,4,5,3,0,0,2,9,7,1]
var a=[]
var c=[]
var i=0
while (i<nums.length){
    if (nums[i]!=0){
        a.push(nums[i])
    }
    else{
        c.push(nums[i])
    }
    i=i+1 
}  
console.log(a+c)