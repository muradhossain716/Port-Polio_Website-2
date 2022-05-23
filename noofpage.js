function amountOfPages(summary){
    let sum=0
    let count=0
    for(i=1;sum<summary;i++){
      sum+=`${i}`.length
      count++
      
    }
    return count;
    
  }