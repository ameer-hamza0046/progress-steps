const [prevbtn, nextbtn] = document.querySelectorAll(".btn");
const circles = document.querySelectorAll('.circle')
const bar = document.querySelector(".bar");
let state = 1;

prevbtn.addEventListener("click", () => {
  if (state <= 1) {
    return;
  }
  bar.classList.remove(`pos${state}`);
  circles[state-1].classList.remove('on');
  state--;
  bar.classList.add(`pos${state}`);
  if (state == 1) {
    prevbtn.classList.add("disabled");
  } else if (state == 3) {
    nextbtn.classList.remove("disabled");
  }
});

nextbtn.addEventListener("click", () => {
  if (state >= 4) {
    return;
  }
  bar.classList.remove(`pos${state}`);
  state++;
  circles[state-1].classList.add('on');
  bar.classList.add(`pos${state}`);
  if (state == 4) {
    nextbtn.classList.add("disabled");
  } else if (state == 2) {
    prevbtn.classList.remove("disabled");
  }
});
