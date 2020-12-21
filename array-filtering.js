let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let filtered = [];

/*function evenNumbers (number) {  
  return number % 2 === 0  
}*/

for (i=0; i<numbers.length; i++) {
    if (numbers[i]%2===0){
      filtered.push(numbers[i]);
    }
}


console.log(filtered);

