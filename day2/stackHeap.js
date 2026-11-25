console.log("Hello")

// stack

let add1 = 34
let add2 = add1
add2 =  100

console.log(add1)
console.log(add2)

//Heap

let obj = {
    id : 100,
    name : "Alex"
}

console.log(obj)

let newObj = obj

newObj.name = "Max"

console.log(obj)
console.log(newObj)