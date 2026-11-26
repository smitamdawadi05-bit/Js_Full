
console.log("Hello")

let c = 100

if(c > 0) console.log("c > 100")
    else if(c < 0) console.log("c < 100")
else console.log("c == 0")

/////

let v = 1

switch (v) {
    case 1:
        console.log("JAN")
        break;

     case 2:
        console.log("FEB")
        break;

     case 3:
        console.log("MAR")
        break;

    default:
        console.log("Invalid Month")
    break;
}

//// Nullish  coalescing  Operator ??

let val = 100 ?? 10

console.log(val)

val = null ?? 100

console.log(val)

val = undefined ?? null // returns to else
console.log(val)


/// falsy value
/// 0, false, 0n (bigInt), -0, "", null, undefined,NaN

///Truth values
//  '0', 'false', "ff", " ", [] ,{} , function(){}

// Check array
let f = [10,20,30]
if(f.length == 0)
    console.log("Empty Array")

let obj = {
    id :1,
    name : "Alex"
}

if(Object.keys(obj).length==0)
{
    console.log("Empty Object")
}
