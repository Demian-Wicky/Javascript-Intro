// Code la vie
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Un script JS qui puisse transformer un ARN présenté sous forme de string "UUACGCAGUAGA"
// en une suite d'acides aminés que tu imprimeras en console : "Leucine-Arginine-Sérine-Arginine"
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function decode(nuc){
    let output_arr = []
    let parts = nuc.split( /(?=(?:...)*$)/ ) //https://stackoverflow.com/questions/14751802/split-string-every-3-characters-from-back-using-javascript
    
    parts.forEach(part => {
        if (["UCU", "UCC", "UCA", "UCG", "AGU", "AGC"].includes(part)){
            output_arr.push("Sérine")
        }
        if (["CCU", "CCC", "CCA", "CCG"].includes(part)){
            output_arr.push("Proline")
        }
        if (["UUA", "UUG"].includes(part)){
            output_arr.push("Leucine")
        }
        if (["UUU", "UUC"].includes(part)){
            output_arr.push("Phénylalanine")
        }
        if (["CGU", "CGC", "CGA", "CGG", "AGA", "AGG"].includes(part)){
            output_arr.push("Arginine")
        }
        if (["UAU", "UAC"].includes(part)){
            output_arr.push("Tyrosine")
        }
    })
    return output_arr.join("-")
}


console.log(decode("CCGUCGUUGCGCUACAGC"))
console.log(decode("CCUCGCCGGUACUUCUCG"))
