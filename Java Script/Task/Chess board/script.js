const chess = document.querySelector(".container");
const firstrow =  `<div class="square"></div>`.repeat(8);
const seconrow = ` <div class="square-even"></div>`.repeat(8);

const final = (firstrow + seconrow).repeat(4);

chess.innerHTML = final;