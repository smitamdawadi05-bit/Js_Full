console.log('Hello')

let d = new Date();
console.log(d.toString())
console.log(d.getDate())
console.log(d.getMonth())
console.log(d.getFullYear())
console.log(typeof d.toISOString()) // same output 
console.log(typeof d.toJSON()) // same output
console.log(d.toLocaleDateString()) // Display Date
console.log(d.toLocaleTimeString()) // Display Time
console.log(d.toLocaleString('en-IN',{
    weekday : 'short',
    day : 'numeric',
    month :"short",
    year : '2-digit'
}))


