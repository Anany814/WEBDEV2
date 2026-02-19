let a=10
let b=55
if(a>b){
    console.log("A is greater")
}
else if(a==b){
    console.log("Both are equal")
}
else{
    console.log("B is greater")
}
let grade="B"

switch(grade){
    case "A":
        console.log("EXCELLENT")
        break;
    case "B":
          console.log("GOOD")
}
let arr=[1,2,3,4,5,6,7,8]

console.log(arr)
 const newarr=arr.map((ele)=>{
    return ele*2
})

console.log(newarr)


const filteredData=arr.filter((ele)=>{
    return ele>4;
})
console.log(filteredData)

const sum=arr.reduce((acc,curr)=>{
    return acc+curr
}, 0)
console.log(sum)




    