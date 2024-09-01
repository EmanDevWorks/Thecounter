
const countEl = document.getElementById("counter-el");
const incrementBtn = document.getElementById("increment-btn");
const decreaseBtn = document.getElementById("decrease-btn");
var count = 0;

incrementBtn.addEventListener("click", function(){
    count += 1;
    countEl.innerText = count;
})

decreaseBtn.addEventListener("click", function(){
    count -= 1;
    countEl.innerText = count;
})