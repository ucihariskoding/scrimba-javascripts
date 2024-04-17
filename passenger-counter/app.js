// document.getElementById('counter').innerText
// let count = 0;
// console.log(count);
// let myAge = 99;
// humanDogRatio = 7;
// myDogAge = myAge * humanDogRatio;
// console.log(myDogAge);

let counter = document.getElementById("counter-element");

let count = 0;
function increment(){
    count+=1;
    counter.innerText=count;

}