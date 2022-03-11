const add = (num1, num2) => {
    return num1 + num2;
};
  
const myArray = ["Dave", "Steve", "Gary"];
  
const truthy = true;

const isPrime = (i) => {
    for(let x = 2, y = Math.sqrt(i); x <= y; x++)
        if(i % x === 0) return false; 
    return i > 1;
}


//function letterArrayFn(){
//    const letterArray=(["Gold","Golden","Goldened"]);
//    return letterArray.filter((str) => str.length >= 6);
//}
//console.log(letterArrayFn());

const getItems = (array) => {
	return array.filter((e) => e.length >= 6);
};


module.exports = { add, myArray, truthy, isPrime, getItems,};