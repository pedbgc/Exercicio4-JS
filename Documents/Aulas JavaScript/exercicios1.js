// 1

let jogos = ['TLOU','RE7','GOW','Alien: Isolation','TCP']

jogos.forEach(element => {
    console.log(element);
});

// 2

jogos.forEach((element, index, list) => {
    console.log(`Nome: ${element}`);
    console.log(`ID na lista: ${index}`);
    console.log(`Lista completa: ${list}`);
});

// 3

let numbers = [1, 2, 3, 4, 5]

let double = numbers.map(element => {
    return element*2
})

console.log(double);

// 4

let numbers1 = [1, 2, 3, 4, 5]

let even = numbers1.filter(element => {
    if(element % 2 == 0){
        return element
    }
})
console.log(even);

// 5

let fruits = ['apple', 'banana', 'orange', 'kiwi']

fruits.forEach(element => {
    console.log(element);
});

// 6 

let idades = [ 16, 48, 23, 22, 45, 8, 12]
let adulto = idades.filter(element => {
    return element>=18
})
console.log(adulto);

adulto.forEach((idade, index) => {
    console.log(`idade do aluno ${index+1} é: ${idade}`);
});