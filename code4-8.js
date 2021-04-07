let output = "";
for(let i = 0; i < 10; i++) {
    for(let j = 0; j < 9 - i; j++){
        output += " ";
    }
    for(let j = 0; j <= i; j++){
        output += "*";
    }
    for(let j = 1; j <= i; j++){
        output += "*";
    }
    output += "\n";
}
for(let i = 0; i < 9; i++) {
    for(let j = 9; j > 8 - i; j--){
        output += " ";
    }
    for(let j = 9; j > i; j--){
        output += "*";
    }
    for(let j = 8; j > i; j--){
        output += "*";
    }
    output += "\n";
}
console.log(output);


console.log("===========");
