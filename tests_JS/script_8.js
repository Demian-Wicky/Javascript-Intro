function acne(string){

    if (string == ""){
        return "t'es en PLS ?"
    }

    if (string.includes("Fortnite")){
        return "on s' fait une partie soum-soum ?"
    }

    let regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g; // regex removes punctuation
    let stringNoPunctuation = string.replace(regex, '') // no punctuation string
    let stringUppercase = stringNoPunctuation.toUpperCase() // no punctuation and uppercase string
    if (stringUppercase == string.replace(regex, '')){
        return "Pwa, calme-toi..."
    }

    if (string.includes("?")){
        return "Ouais Ouais..."
    }

    return "balek."

}


// console.log(acne("Ca va ?")) // "Ouais Ouais..."
// console.log(acne("JE SUIS UNE POULE !!??")) // "Pwa, calme-toi..."
// console.log(acne("Vazy on sfait un ptit Fortnite ?")) // "on s' fait une partie soum-soum ?"
// console.log(acne("")) // "t'es en PLS ?"
// console.log(acne("je suis une poule")) // "balek."


while (true) {
    let input = prompt("Dis quelque chos à cet ado");
    console.log(acne(input))
}