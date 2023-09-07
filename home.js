const home = document.querySelector(".Homei");
const vipcantainer = document.querySelector(".vipDiv");
const tir = document.querySelector(".tir");
const checkbox = document.querySelector(".crouselCantainer");

//-------------------------------- carousel eventlistner -----------------------------------------------
checkbox.addEventListener("click", () => {
  home.style.cssText = `
       transform:translateX(-120vw);
   `;
  vipcantainer.style.transform = "translateX(0)";
});

tir.addEventListener("click", () => {
  home.style.transform = "translateX(0)";
  vipcantainer.style.transform = "translateX(120vw)";
});

//-------------------------------- checkbox eventlistner -----------------------------------------------

const checks = document.querySelector(".checkbox");
checks.addEventListener("click", () => {
  home.style.cssText = `
  transform:translateX(-120vw);
`;
  vipcantainer.style.transform = "translateX(0)";
});
