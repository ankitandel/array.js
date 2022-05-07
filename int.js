// var readlinesync=require("readline-sync");
// var num=readlinesync.questionInt("enter the number");
// var rev=0;
// while (num>0){
//   rev=rev*100+num%10
//   var num=parseInt(num/10)
// }
// console.log(rev)

// var readlinesync=require("readline-sync")
// var num=readlinesync.questionInt("enter the number: ")
// rev=0
// while (num>0){
//   rev=rev*100+num%100
//   num=parseInt(num/100)
//   var a=parseInt(rev/100)
//   var b=a*100
// }
// console.log(b)

// var readlinesync=require("readline-sync")
// var num=readlinesync.questionInt("enter the number: ")
// rev=0
// while (num>0){
//   rev=rev*100+num%100
//   num=parseInt(num/100)
//   var a=parseInt(rev/100)
//   var b=a*100
// }
// console.log(b)

// var a=[1,2,3,4,2,1,5,6,7,8,4]
// var b=[]
// var len=a.length;
// for(var i=0;i<len;i++){
//   if(! b.includes(a[i])){
//     b.push(a[i])
//   }
// }
// console.log(b)

// function off(f,l){
//     let i=f;
//     while(i<=l){
//         let j=1;
//         let count=0;
//         while(j<=i){
//             if(i%j==0){
//                 count++
//             }
//             j++
//         }if (count==2){
//             console.log(i,"prime");
//         }else{
//             console.log(i,"no");
//         }
//     i++
//         }
//     }
//     off(1,20)

// var n=require("readline-sync");
// const num=n.question("enter number: ");
// let i=2
// var count=0;
// while (i<=10){       
//     if (num%i===0) {
//        count=count+1
//     }
//     i++;
// }
// if (count===0) {
//        console.log("prime number")
// }
// else {
//    console.log("not prime number")
// }

var n=require("readline-sync");
var name1=n.question("enter the number")
var name2=str(name1)
var s=""
for (i in range(len(name1))){
    var length=len(name2)-1-1
    s+=name2[i]+"0"*length
    if (length==0){
        pass
    }
    else{
        s+="+"
    }
}
print(s)



// # name1=int(input("enter the number"))
// # name2=str(name1)
// # s=""
// # for i in range(len(name2)):
// #     length=len(name2)-i-1
// #     s+=name2[i]+"0"*length
// #     if length==0:
// #         pass
// #     else:
// #         s+="+"
// # print(s)