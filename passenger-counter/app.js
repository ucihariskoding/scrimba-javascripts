let saveblock = document.getElementById('save-block')
let counter = document.getElementById('counter-element');
let count = 0; //inisasi secara global. 

function increment(){
    count+=1;
    counter.innerText=count;
}

function save(){
    let countStr = count + ' - '
    saveblock.textContent += countStr
    console.log(count) // dapat akses count hasil increment
}