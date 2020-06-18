let navButton = document.getElementById('nav-button');
let collaspible = document.getElementById('collapse');

let flip = 0;

function collapse(){
if(flip === 0){
    collaspible.style.display = 'flex';
    navButton.textContent = '-'
    flip = 1;
} else {
    collaspible.style.display = 'none';
    navButton.textContent = '+'
    flip = 0;
}
}

navButton.addEventListener("click", function(){
    collapse();
})