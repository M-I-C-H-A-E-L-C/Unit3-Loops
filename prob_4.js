total = 0;
function countVowels(str){
    for (let i = 0; i < str.length; i ++){
        if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u"){
            total ++;
        }
    } 
}

countVowels("woooooooooOoooow");
console.log(total);