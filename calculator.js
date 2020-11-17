const signs = [
    ['(',")","%","AC"],
    ["7","8","9","/"],
    ["4","5","6","x"],
    ["1","2","3","-"],
    ["0",".","=","+"]
];

const main = document.createElement("main");
main.className = "container";

const div = document.createElement("div")
div.className = "section";

const columns = document.createElement("div")
columns.className = "columns is-centered";

const card = document.createElement("div")
card.className = "card column is-one-fifth is-mobile";

const control = document.createElement("section")
control.className = "control";

//créer la case d'affichache 
const inputArea = document.createElement("input")
inputArea.className = "input has-text-right";
inputArea.type = "text";
inputArea.readOnly = true;
inputArea.value = "0";
inputArea.style.fontSize = "2em";
inputArea.style.fontWeight = "700";

control.appendChild(inputArea);
card.appendChild(control);

const isCentered = document.createElement("section");
isCentered.className = "is-centered";

//créer une boucle pour créer les 5 div class=p-1 dans lesquelles se trouve les boutons
for (let i=0; i<signs.length; i++){
    const divP = document.createElement("div");
    divP.className = "p-1";
//créer une boucle pour répéter les différents boutons dans la div
    for (let j=0; j<signs[i].length ; j++){
        const button = document.createElement("button");
        button.className = "button";
        //Cibler le contennu du tableau (sign) + l'index de i et j
        button.textContent = signs[i][j];
        divP.appendChild(button);
    }
    isCentered.appendChild(divP);
}
card.appendChild(isCentered)


columns.appendChild(card);
div.appendChild(columns);

main.appendChild(div);
document.body.appendChild(main);




