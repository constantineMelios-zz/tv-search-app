function characterMultiply(string) {
  const arr = Array.from(string)
  const multiplyLett = [] 
  arr.forEach((letter, index) => {
    for(let i=index; i < arr.length; i++) {
      if(letter === arr[i] && multiplyLett.indexOf(letter)) {
        multiplyLett.push(letter)
      }
    }
  })

  return multiplyLett

}