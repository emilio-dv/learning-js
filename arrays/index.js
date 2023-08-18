 
const myArray1 = [1, -1, 1];

//el concat no muta el array 
const myArray2 = myArray1.concat(2);

console.log(myArray1)
console.log(myArray2)

//Desestruracion Array 
const elements = [1, 2, 4, 5, 10, 0]; 
const [uno, dos, ...rest] = elements;

console.log(elements)
console.log(uno, dos)
console.log(rest)   

console.log('change repos git')

