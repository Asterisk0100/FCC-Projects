function rot13(crypted){
    //0-25 alphabet
    //12 or less needs to add 13
let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
let origin = crypted.toLowerCase().split("");

for (let i = 0; i < origin.length; i++){
    for (let n = 0; n < alphabet.length; n++){

        if((origin[i] == alphabet[n]) && (n <= 12)){
            origin[i] = alphabet[n += 13];
            
        }
        else if((origin[i] == alphabet[n]) && (n >= 1)){
            
            origin[i] = alphabet[n -13];
        }
    }
}
return origin.join("").toUpperCase();

}


// Change the inputs below to test
console.log(rot13("SeRR PBQR PNZC"));