let slide = document.querySelectorAll('.slide');
let pre = document.querySelector('#pev');
let nxt = document.querySelector('#nxt');
var count = 0;
slide.forEach((slide,index)=>{
    slide.style.left =`${index * 100}%`
})

function slideImg(){
    slide.forEach((slide)=>{
        slide.style.transform = `translateX(-${count * 100}%)`
    })
}
pre.addEventListener('click', function(){
    count--;
    if(count < 0){
        count = slide.length - 1;
        slideImg()
    }else{
        slideImg()
    }
})

nxt.addEventListener('click', function(){
    count++;
    if(count >= slide.length){
        count = 0;
        slideImg()
    }else{
        slideImg()
    }
})
