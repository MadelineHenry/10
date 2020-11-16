const signs = [
    ['(',")","%","AC"],
    ["7","8","9","/"],
    ["4","5","6","x"],
    ["1","2","3","-"],
    ["0",".","=","+"]
]
const main = document.createElement("main");
main.className = "container";

const div = document.createElement("div")
div.className = "section";

const columns = document.createElement("div")
columns.className = "columns is-centered";

const card = document.createElement("div")
card.className = "card column is-one-fifth";

const control = document.createElement("section")
control.className = "control";

const inputArea = document.createElement("input")
inputArea.className = "input has-text-right";
inputArea.type = "text";
inputArea.readOnly = true;
inputArea.placeholder = "0";
inputArea.style.fontSize = "2em";
inputArea.style.fontWeight = "700";

control.appendChild(inputArea);
card.appendChild(control);
columns.appendChild(card);
div.appendChild(columns);
main.appendChild(div);
document.body.appendChild(main);



