const colors = ['red','yellow','green', 'blue','orange','purple','violet','indigo','black','white'];

let ctn = document.querySelector('section');
let h1 = document.querySelector('h1');
let span = document.querySelector('#spanColor');

for( let color of colors){
    let box = document.createElement('div');
    box.classList.add('box');

    ctn.append(box);
    box.style.backgroundColor = color;
    
    box.addEventListener('mouseover', function(){
        h1.innerText = 'You Are Selected :';
        span.innerText = box.style.backgroundColor;
        span.style.backgroundColor = box.style.backgroundColor;
    });
};