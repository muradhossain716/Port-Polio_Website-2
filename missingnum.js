function missingNo(n) {
    let num=n.sort((a,b)=>a-b)
    let count=0
  for(let i=0;count<=num[i];i++){
    count++
    if((i)!==num[i])
      return i
    }
  }