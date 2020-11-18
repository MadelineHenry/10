function safeEval(str){
    return Math.round(Function('return ' + str)()*1000000000) / 1000000000
  };
  
const buttons = document.querySelectorAll(".button");

for(let i of buttons){
    i.addEventListener("click", () => {
        if (p1.textContent == 0){
            p1.textContent = "";
            p2.textContent = "";
        }
        if (i.textContent !== "AC" && i.textContent !== "="){
            if (i.textContent == "%"){
                p2.textContent = "%" + safeEval(String(p1.textContent)) / 100;
                p1.textContent = safeEval(String(p1.textContent)) / 100; 
            } else {
                p1.textContent += String(i.textContent);
                p2.textContent += " " +String(i.textContent);
            }
        } else if (i.textContent == "AC"){
            p1.textContent = "0";
            p2.textContent = "0";
        } else {
            p2.textContent = safeEval(String(p1.textContent));
            p1.textContent += "=" + safeEval(String(p1.textContent));
        }
    })    
}