function palindrome(str) {
    // Good luck!
    let regex = /[_\s,.\(:\-\/\\\)]/g;
    str.replace(regex, "");
    let origArray = str.replace(regex, "").split("");
    let newArray = [];

    for(let i = 0; i < origArray.length; i++){
        newArray += origArray.pop();
        
         
    }
    for(let j = 0; j < origArray.length; j++){
        if(origArray[j].toLowerCase() != newArray[j].toLowerCase()){
            return false
        }
    }
    return true;
    
    
  }
  
  
  
  palindrome("eye");