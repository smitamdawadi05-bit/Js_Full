console.log("Hello")

let a = [1,2,3,4,5]

console.log(a)

a.push(10)
console.log(a)

a.pop()
console.log(a)

a.unshift(100)
console.log(a)

a.shift()
console.log(a)

console.log(a.includes(1))
console.log(a.indexOf(2))
console.log(a.join("+"))

// main => Slice / Splice //

console.log(a.slice(0,2)) // Same as subString

let b = a.splice(0,2) // Remove element from array in provided index

console.log(a)
console.log(b)

///// /////

let arr = [1,2,3]
let arr2 = [10,20,30]

//arr.push(arr2) // Out : [ 1, 2, 3, [ 10, 20, 30 ] ]

console.log(arr)

// .concate()

// let concatinatedArr = arr.concat(arr2) // Out : [ 1, 2, 3, 10, 20, 30 ]
// console.log(concatinatedArr)

/// Spread Operator ///

let spreadOp = [...arr,...arr2]
console.log(spreadOp)
 
///  of ///

let s1 = "A"
let s2 = "B"
let s3 = "C"
let useFor = Array.of(s1,s2,s3)
console.log(useFor)

/// from ///

let arrFrom = Array.from("Harry Potter")

console.log(arrFrom)

/// flate ///

let complexArr = [1,2,3,[4,5,6],[7,8,[9,10]]];

let arrFlate = complexArr.flat(Infinity)
console.log(arrFlate)

/// isArray ///

console.log(Array.isArray(arr))



