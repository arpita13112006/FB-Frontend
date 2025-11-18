const body= document.querySelector("body");
const box =document.createElement("div");
const btn=document.createElement("button");
body.appendChild(box);
body.appendChild(btn);
btn.textContent="Click me!";
btn.style.height="30px";
btn.style.width="100px";
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


