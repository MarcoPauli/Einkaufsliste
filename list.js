let storage = localStorage.getItem("userList");
if (storage != null) {
    let list = document.getElementById("list");
    list.innerHTML = storage;
}

setInterval(() => {
    let list = document.getElementById("list");
    localStorage.setItem("userList", list.innerHTML);
}, 500)

let addElementInput = document.getElementById("addElementInput");
let addElementBtn = document.getElementById("addElementBtn");
addElementInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        addElementBtn.click();
        addElement();
    }
})

let overlayDIV = document.getElementById("overlayDiv");
let addElementPrompt = document.getElementById("addElementPrompt");
let nothingBtn = document.getElementById("nothingBtn");
nothingBtn.addEventListener("click", () => {
    addElementPrompt.style.display = "none";
    overlayDIV.style.display = "none"
    addElementInput.value = "";
})

let deleteElementsBtn = document.getElementById("deleteElementsBtn");
deleteElementsBtn.addEventListener("click", () => {
    let overlayDIV = document.getElementById("overlayDiv");
    let confirmDeleteAll = document.getElementById("confirmDeleteAll");
    confirmDeleteAll.style.display = "block";
    overlayDIV.style.display = "block"
})

function addElement() {
    let addElementInput = document.getElementById("addElementInput");
    let userInput = addElementInput.value;
    if (userInput.trim() != "") {
        createElement(userInput);
    }
    addElementInput.value = "";
}

function createElement(input) {
    let list = document.getElementById("list");
    let newElement = document.createElement("li");
    let delBtn = document.createElement("button");
    delBtn.setAttribute("onclick", "deleteSeparateElement(this)");
    delBtn.style.backgroundColor = "red";
    delBtn.style.color = "white";
    delBtn.style.border = "none";
    delBtn.style.borderRadius = "10px";
    delBtn.innerHTML = "x";
    delBtn.style.cursor = "pointer";
    newElement.innerHTML = input + " ";
    list.appendChild(newElement);
    newElement.append(delBtn);
}

function deleteSeparateElement(x) {
    x.parentNode.remove();
}

function deleteAllElements() {
    let list = document.getElementById("list");
    list.innerHTML = null;
    hideDeleteAllPopup();
}

function hideDeleteAllPopup() {
    let confirmDeleteAll = document.getElementById("confirmDeleteAll");
    confirmDeleteAll.style.display = "none";
    overlayDiv.style.display = "none";
}