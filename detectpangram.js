function isPangram(s){
    //...
    s=s.toLowerCase();
    let pangram=true;
    [...'abcdefghijklmnopqrstuvwxyz'].map(function(x){if(!s.includes(x))pangram= false })
    return pangram
  }