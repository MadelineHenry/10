const signs = ['(',")","%","AC",7,8,9,"/",4,5,6,"x",1,2,3,"-",0,".","=","+"];

const section = document.createElement("section");
section.className = "grid";
document.body.appendChild(section);

const paragraphs = document.createElement("div");
paragraphs.className = "paragraphs";
section.appendChild(paragraphs);

const p1 = document.createElement("p");
p1.className = "p1";
paragraphs.appendChild(p1);


for (let i=0; i<signs.length; i++){
    const btn = document.createElement("div");
    btn.className = "button";
    btn.textContent = signs[i];
    section.appendChild(btn);
}

const p2 = document.createElement("p");
p2.className = "p2";
paragraphs.appendChild(p2);

