let g1 = document.querySelector("#g1");
let g2 = document.querySelector("#g2");
let g3 = document.querySelector("#g3");
let g4 = document.querySelector("#g4");
let g5 = document.querySelector("#g5");
let g6 = document.querySelector("#g6");
let g7 = document.querySelector("#g7");
let g8 = document.querySelector("#g8");
let g9 = document.querySelector("#g9");
let temp = '';

g5.addEventListener('click', ()=>{
    temp = g1.innerText;
    g1.innerText = g4.innerText;
    g4.innerText = g7.innerText;
    g7.innerText = g8.innerText;
    g8.innerText = g9.innerText;
    g9.innerText = g6.innerText;
    g6.innerText = g3.innerText;
    g3.innerText = g2.innerText;
    g2.innerText = temp;
})