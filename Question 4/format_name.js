function format_name(name){
let arr = name.split(' ').map(x => capWord(x)).join(' ');

return arr;
}

//function to capitalise word by word
function capWord(word){
    return word.toLowerCase().replace(word[0], word[0].toUpperCase());
}