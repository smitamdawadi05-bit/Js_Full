console.log("Hello")

let str = new String("  Hello JavaScript Developer, Welcome to JavaScript!  ")

console.log(str)
console.log("Length : " + str.length)
console.log("UpperCase : " + str.toUpperCase())
console.log("LowerCase : " + str.toLowerCase())
console.log("Trim : " + str.trim())
console.log("TrimStart : " + str.trimStart())
console.log("TrimEnd : " + str.trimEnd())
console.log("First Index : " + str.indexOf('JavaScript')) // If char not found return -1
console.log("Last Index : " + str.lastIndexOf('JavaScript'))  //// // If char not found return -1
console.log("Is Include Develper : " + str.includes('Developer'))
console.log("Check Starting with char or not  : " + str.startsWith('Hello'))
console.log("Check Ending with char or not  : " + str.endsWith('JavaScript!  '))
console.log("slice  : " + str.slice(0,-5)) 
console.log("substring  : " + str.substring(0,5)) // It takes ending position as a second para
console.log("substr  : " + str.substr(0,11)) //It takes length as a second para
console.log("Replace : "+str.replace("JavaScript","Python"));
console.log("ReplaceAll : "+str.replaceAll("JavaScript","Python"));
console.table([str.split(" ")]);
console.table([str.split(" ").join("+")]);
console.log(str.charAt(6));
console.log(str.charCodeAt(6)); // Give ASCII Value
console.log(str[6]);
console.log(str.substring(2,8).repeat(3));
console.log(str.concat("Welcome"));