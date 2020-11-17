function safeEval(str){
    return Function('return ' + str)()
  }
  
console.log(safeEval(a)) 