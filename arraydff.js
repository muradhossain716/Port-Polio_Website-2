function arrayDiff(a, b) {
    return a.filter(x=>!b.includes(x))
  }
  //another solution
  function arrayDiff(a, b) {
    b.map(function(x){while(a.indexOf(x)>-1) a.splice(a.indexOf(x),1)})
    return a
  }