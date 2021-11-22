function pyramid(n){
    if (n > 0 && Number.isInteger(n) === true ){
        for(let count = 1; count <= n; count++){
            console.log(" ".repeat(n - count) + "#".repeat(count));
        }
    }
    else{
        return "Choix invalide";
    }  
}

let n = parseInt(prompt("Enter a Value", "0"), 10);
answer = pyramid(n)
console.log(answer);