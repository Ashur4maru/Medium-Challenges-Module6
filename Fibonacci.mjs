let fibonacci = [0,1]
let i = 0
let j = 1

while(fibonacci.length < 10){
    let nieuwGetal = fibonacci[i] + fibonacci[j];
    fibonacci.push(nieuwGetal);
    i++
    j++
}

console.log(fibonacci);