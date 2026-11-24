console.log("Hello");

let s = 90
let str = "Hello"
let bool = true
let n = null
let notDefinded = undefined
let arr = [10,20,30]
let obj = {
    id : 1,
    name:"Alex"
}

console.table([s,str,bool,n,notDefinded,arr,obj])

////////// Number

let hh = "aaa2222"
console.log("HH = " + hh)
console.log("Value : " + Number(hh)) // NaN
console.log("Type : " + typeof(Number(hh)))
console.log("null : " + Number(null))
console.log("undefined : " + Number(undefined))


// String
let j = 89
let x = String(j)
console.log(x +typeof(x))

// boolean => false -> 0 , emptyString "" , null , NaN , undefined otherwise true
console.log("1 =>" + Boolean(1))
console.log("0 =>" + Boolean(0))
let bh = ""
console.log("(emptyString) =>" + Boolean(bh))
console.log("str => " + Boolean(str))

//bigInt
let big = 7894561237894n  //Use n for bigInt

console.log("Type Of BigInt : " + typeof(big))

/// Function, Array , Object ///
function hello() {
    console.log("hello")
}
console.log(typeof(hello))

let arr2 = ["AAA","BBB","CCC"];

console.log(typeof(arr2))

let obj2 = {
    id : 123,
    name : "Alex"
}

console.log(typeof(obj2))
