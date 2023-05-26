let addElementBtnStart = document.getElementById("addElementBtnStart");
let overlayDiv = document.getElementById("overlayDiv");

addElementBtnStart.addEventListener("click", function () {
    addElementPrompt.style.display = "block";
    overlayDiv.style.display = "block";
})
let body = document.querySelector("main");
body.addEventListener("scroll", () => {
    alert("hi")
})