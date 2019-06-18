const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

// need to refactor into separate functions
slider.addEventListener('mousedown',(evt)=>{
    isDown = true;
    slider.classList.add('slide_active');
    startX = evt.pageX - slider.offsetLeft;//helps record where a click has been made
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave',()=>{
    isDown = false;
    slider.classList.remove('slide_active');
});

slider.addEventListener('mouseup',()=>{
    isDown = false;
    slider.classList.remove('slide_active');
});

slider.addEventListener('mousemove',(evt)=>{
    if(!isDown) return; //stop the function from running
    evt.preventDefault();
    const x = evt.pageX - slider.offsetLeft;
    const move = (x - startX) * 3;//this tell you how far you have deviated from the initial click point [for every pixel moved its times by 3]
    slider.scrollLeft = scrollLeft - move;
});

