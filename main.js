const submitBtn = document.querySelector(".submit-btn");
const numbers = document.querySelectorAll(".btn");
const rate = document.querySelector(".rate");
const mainContanier = document.querySelector(".main-page");
const thanksContainer = document.querySelector(".thank-you-page");

numbers.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    rate.innerHTML = btn.innerHTML;
  });
});
submitBtn.addEventListener("click", function () {
  mainContanier.style.display = "none";
  thanksContainer.classList.remove("hidden");
});
