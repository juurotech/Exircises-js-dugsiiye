const numbers = [1,2,3]
const NewNumbers =[... numbers, 4,5,6];
console.log (NewNumbers)


function multiply (...numbers) {
    return numbers.reduce((total, num)=> total *num ,1)
}
console .log (multiply(20,30,50,67))
