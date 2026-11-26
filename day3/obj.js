console.log("Hello")

// function ccc() {
//      console.log("HJlelo ddd")
// }

const mySym = Symbol("hello")
let obj = {
    id : 12,
    name:  "Alex",
    age : 34,
    "email gh" : "alex@test.com",
    [mySym] : ("HHH"),
    ddd : function() {
     console.log(`HJlelo ddd , ${this.name}`)
     console.log(`HJlelo ddd , ${obj.name}`)
     return 1;
}
}

// console.log(obj.email)
// console.log(obj[mySym])
// console.log(obj.ddd())

// console.log(Object.keys(obj));    // ["name"] (mySym is hidden)
// console.log(JSON.stringify(obj)); // '{"name":"Alex"}' (mySym is ignored)


///////////////   Singleton Obj ///////////////

let obj2 = {
   
    name:  {
        firstName : "Alex",
        lastName : "Martin"
    }
}

// Nested Obj

// let student=
// {
//     age:20,
//     fullname:
//     {
//         userfullname:
//         {
//             firstname:"Manthan",
//             lastname:"patel"
//         }
//     }
// }

// console.log(student.fullname.userfullname.lastname)

obj2.id = 1234
//obj2.name = "Alex"

//console.log(obj2.name)

/// Numeruic Obj

objSumNew = {
    id : 1,
    name : "aaaa"
}

objSumNew2 = {
    ggg : 2,
    namdd : "bbbb"
}

let objSum =  Object.assign(objSumNew,objSumNew2)


//Spresd Operator

// let objSum =  {...objSumNew,...objSumNew2}

console.log(Object.keys(objSumNew))
console.log(Object.values(objSumNew))

// Array of Obj

let arrOfObj = [
    {
        id:1,
        name:"Alex"
    },
    {
        id:2,
        name:"John"
    },
]


console.log(Object.values(arrOfObj))

console.log(obj.hasOwnProperty("idghjk"))  // Check whether key present or not


/// Object Destructuring
let c = {
    id : 100,
    name : "aaa"
}

const {id} = c
const {id:newId} = c
console.log(id)

/// 