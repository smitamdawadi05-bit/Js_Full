console.log("Hello");

function newFunc(ggg) {
    console.log(`Hellon`)
}

newFunc()

////

function newFunc2(...num) { // It is called rest / spread operator
    console.log(num)
}

newFunc2(10,20,30)


/////     /////

function newFunc3(val,val2,...num) { // It is called rest / spread operator
    console.log(val,val2,num)
}

newFunc3(10,20,30,200)


/////////////

let obj = {
    name : "ALex",
    age : 34
}
function myFunc4(obj) {
    console.log(obj.name)
    console.log(obj.age)
}


myFunc4(obj)

///////////

one(10)
function one(num) {
    console.log(num + "1000")
}

//temp(10)

var temp = function (num) {
    console.log(num + "10000")
}

// temp(10)

//////// This in function

function myFunc() {
    let username = "AAA"
    console.log(this) // returns full info about the function
    console.log(this.username) // returns undefined but we can use same syntax inside obj
}
myFunc()

// Global this

console.log(this)

//// arrow function

/// -> Explicit Arrow Function
let g = (num,num2)=>{
  //  console.log(this) returns {}
    return num + num2;
}

console.log(g(2,2))


/// -> Implicit Arrow Function
let g2 = (num,num2)=> num + num2;


console.log(g2(2,5));



/////////////////////////// IIFE => Imediately Invoked Function Expression //////////////////////////

//Named IIFE
(function hello() {
    console.log("Named IIFE")
    console.log("hj")
})();



//Unnamed IIFE
((num,num2)=> {
    console.log(num + num2)
    console.log("hj")
})(1,2);