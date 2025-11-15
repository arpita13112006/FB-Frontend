// const chess = document.querySelector(".container");
// const firstrow =  `<div class="square"></div>`.repeat(8);
// const seconrow = ` <div class="square-even"></div>`.repeat(8);

// const final = (firstrow + seconrow).repeat(4);

// chess.innerHTML = final;

const body= document.querySelector("body");
const box =document.createElement("div");
const btn=document.createElement("button");
body.appendChild(box);
body.appendChild(btn);
btn.textContent="Click me!";
btn.style.height="30px";
btn.style.width="100px";
// box.style.height="200px";
// box.style.width="200px";
// box.style.backgroundColor="teal";
box.classList.add("small-box");
btn.addEventListener("click",function() {
    if (box.classList.contains("small-box")) {
        box.classList.remove("small-box");
        box.classList.add("big-box");
    } else {
        box.classList.remove("big-box");
        box.classList.add("small-box");
    }
});
