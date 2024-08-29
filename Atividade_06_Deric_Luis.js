const prompt = require('prompt-sync')();

// 1:
let numero = parseInt(prompt("Condicional 1: Digite um número inteiro:"));

if (numero % 3 === 0 && numero % 5 === 0) {
  console.log("O número é divisível por 3 e por 5.");
} else {
  console.log("O número não é divisível por 3 e por 5 ao mesmo tempo.");
}

// 2:
let num1 = parseFloat(prompt("Condicional 2: Digite o primeiro número:"));
let num2 = parseFloat(prompt("Condicional 2: Digite o segundo número:"));
let num3 = parseFloat(prompt("Condicional 2: Digite o terceiro número:"));

let maior = Math.max(num1, num2, num3);
let menor = Math.min(num1, num2, num3);

console.log("O maior número é:", maior);
console.log("O menor número é:", menor);

// 3:
let idade1 = parseInt(prompt("Condicional 3: Digite a idade da primeira pessoa:"));
let idade2 = parseInt(prompt("Condicional 3: Digite a idade da segunda pessoa:"));
let idade3 = parseInt(prompt("Condicional 3: Digite a idade da terceira pessoa:"));

if (idade1 >= 18 && idade2 >= 18 && idade3 >= 18) {
  console.log("Todas as pessoas são maiores de idade.");
} else if (idade1 < 18 && idade2 < 18 && idade3 < 18) {
  console.log("Todas as pessoas são menores de idade.");
} else {
  console.log("Alguma pessoa é maior de idade.");
}

// 4:
let diaSemana = prompt("Condicional 4: Digite o nome de um dia da semana:").toLowerCase();

if (diaSemana === "sábado" || diaSemana === "domingo") {
  console.log("É um dia de fim de semana.");
} else if (diaSemana === "segunda" || diaSemana === "terça" || diaSemana === "quarta" || diaSemana === "quinta" || diaSemana === "sexta") {
  console.log("É um dia útil.");
} else {
  console.log("Dia inválido.");
}

// 5:
let N = parseInt(prompt("Laço de Repetição 5: Digite um número:"));

console.log("Números primos menores que", N, ":");
for (let i = 2; i < N; i++) {
  let ehPrimo = true;
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      ehPrimo = false;
      break;
    }
  }
  if (ehPrimo) {
    console.log(i);
  }
}

// 6:
N = parseInt(prompt("Laço de Repetição 6: Digite um número:"));
let a = 0, b = 1, c;

console.log("Sequência de Fibonacci até", N, ":");
console.log(a);
console.log(b);

while (true) {
  c = a + b;
  if (c > N) break;
  console.log(c);
  a = b;
  b = c;
}

// 7:
let numeros = [];
let numeroLista;

do {
  numeroLista = parseInt(prompt("Laço de Repetição 7: Digite um número (ou 0 para parar):"));
  if (numeroLista !== 0) {
    numeros.push(numeroLista);
  }
} while (numeroLista !== 0);

if (numeros.length > 0) {
  maior = Math.max(...numeros);
  menor = Math.min(...numeros);
  console.log("O maior número da lista é:", maior);
  console.log("O menor número da lista é:", menor);
} else {
  console.log("Nenhum número foi digitado.");
}

// 8:
let frase = prompt("Laço de Repetição 8: Digite uma frase:");
let vogais = "aeiouAEIOU";
let contador = 0;

for (let i = 0; i < frase.length; i++) {
  if (vogais.includes(frase[i])) {
    contador++;
  }
}

console.log("A frase contém", contador, "vogais.");
