// const container=document.querySelector(".container")
// container.innerHTML="<h1>HTML </h1><p>This is created using JS</p>"
// console.log(container)
// .container{

// function Show(){
//     alert("This is an alert")
// }
// button.addEventListener("mouseover",Show)
// const  btn=document.querySelector("#btn")
// const  btn2=document.querySelector("#btn2")
// function show()
// {
//     alert("You clicked the button")
// }
//     btn2.removeEventListener("click",show)
//     btn.addEventListener("click",show)
//     btn2.addEventListener("click",function(){
//     btn.removeEventListener("click",show)
//     })

// const  btn=document.querySelector("#btn")
// btn.addEventListener("keyup",(event)=>{
//     event.preventDefault();
//     console.log(event.srcElement[0].value)
//     console.log(event.srcElement[1].value);
//     console.log(event.key);
// })
//
//calculate()

//console.log("This is the beginning of the code")
// setTimeout(()=>{console.log("After 2 sec")},2000)
// console.log("This is the end of code")

// const setInterval(()=>{console.log("Printing at every two seconds")},2000)

// seTimeout(()=>{clearInterval(interval),1000})

// const setInterval(()=>{console.log("Printing at every two seconds")},2000)
// console.log(interval12)


//let count=0

//const interval=setInterval(()=>{
    //count+=1
    //console.log(count)
    //if(count===10){
        //clearInterval(interval)
  //  }
//},1000)

// const student = document.querySelector("#name");
// const button = document.querySelector(".btn");
// const list = document.querySelector(".list");

// button.addEventListener("click", () => {
//     if (student.value === "") return; // avoid empty input

//     const li = document.createElement("li");
//     const deleteButton = document.createElement("button");

//     li.innerText = student.value;
//     deleteButton.innerText = "Delete";

//     deleteButton.addEventListener("click", () => {
//         li.remove();
//     });

//     li.appendChild(deleteButton);
//     list.appendChild(li);

//     student.value = "";
// });




// function print(){ //callback fn
//     console.log("inside print")
// }



// function greet(print){ //higher order fn
//     setTimeout(()=>{
//         console.log("Hello Students")
//         print() 
//     },2000)

// }



// console.log("Starting Homework.....")

// setTimeout(()=>{
//     console.log("Homework Done!");
//     console.log("Starting Dinner....");


//     setTimeout(()=>{
//         console.log("Dinner Done!");
//         console.log("Getting ready to go out....");



//         setTimeout(()=>{
//             console.log("Going to the playground!");

//         },3000);//after dinner 

//     },1500);//dinner time
// },2000);//homework time









const p=new Promise((res,rej)=>{
    console.log("Going to do homework")
    setTimeout(()=>{
        const done =true;
        if(done){
            res("Success");
        }else{
            rej("Failure to fetch data from server");
        }
    },3000)
});

p.then((a)=>{
    console.log(a)
}).catch((err)=>{
    console.log(err)
})
