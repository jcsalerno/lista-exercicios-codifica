const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(question) {
  return new Promise(resolve => rl.question(question, answer => resolve(answer.trim())));
}

async function main() {
  // 1. Par ou ímpar
  let num1 = parseInt(await ask('1) Digite um número inteiro para saber se é par ou ímpar: '));
  if (num1 % 2 === 0) {
    console.log('Número par');
  } else {
    console.log('Número ímpar');
  }

  // 2. Classificar idade
  let idade = parseInt(await ask('\n2) Digite a idade para classificar (criança, adolescente, adulto, idoso): '));
  if (idade < 12) {
    console.log('Criança');
  } else if (idade < 18) {
    console.log('Adolescente');
  } else if (idade < 60) {
    console.log('Adulto');
  } else {
    console.log('Idoso');
  }

  // 3. Nota
  let nota = parseFloat(await ask('\n3) Digite a nota (0 a 10): '));
  if (nota >= 7) {
    console.log('Aprovado');
  } else if (nota >= 4) {
    console.log('Recuperação');
  } else {
    console.log('Reprovado');
  }

  // 4. Menu com switch-case
  console.log('\n4) Menu:\n 1 - Olá\n 2 - Data atual\n 3 - Sair');
  let opcao = await ask('Escolha uma opção (1, 2 ou 3): ');
  switch (opcao) {
    case '1':
      console.log('Olá!');
      break;
    case '2':
      console.log('Data atual: ' + new Date().toLocaleString());
      break;
    case '3':
      console.log('Saindo...');
      break;
    default:
      console.log('Opção inválida');
  }

  // 5. IMC
  let peso = parseFloat(await ask('\n5) Digite o peso (kg): '));
  let altura = parseFloat(await ask('Digite a altura (m): '));
  let imc = peso / (altura * altura);
  console.log(`IMC: ${imc.toFixed(2)}`);
  if (imc < 18.5) {
    console.log('Baixo peso');
  } else if (imc < 25) {
    console.log('Peso normal');
  } else if (imc < 30) {
    console.log('Sobrepeso');
  } else {
    console.log('Obesidade');
  }

  // 6. Triângulo
  let A = parseFloat(await ask('\n6) Digite lado A do triângulo: '));
  let B = parseFloat(await ask('Digite lado B do triângulo: '));
  let C = parseFloat(await ask('Digite lado C do triângulo: '));
  if (A < B + C && B < A + C && C < A + B) {
    if (A === B && B === C) {
      console.log('Triângulo Equilátero');
    } else if (A === B || A === C || B === C) {
      console.log('Triângulo Isósceles');
    } else {
      console.log('Triângulo Escaleno');
    }
  } else {
    console.log('Não forma um triângulo');
  }

  // 7. Maçãs
  let qtd = parseInt(await ask('\n7) Quantas maçãs deseja comprar? '));
  let preco = qtd < 12 ? 0.3 : 0.25;
  let total = qtd * preco;
  console.log(`Total a pagar: R$ ${total.toFixed(2)}`);

  // 8. Ordenar dois valores
  let val1 = parseFloat(await ask('\n8) Digite o primeiro valor: '));
  let val2 = parseFloat(await ask('Digite o segundo valor (diferente do primeiro): '));
  if (val1 < val2) {
    console.log(`Ordem crescente: ${val1}, ${val2}`);
  } else {
    console.log(`Ordem crescente: ${val2}, ${val1}`);
  }

  // 9. Contagem regressiva
  console.log('\n9) Contagem regressiva de 10 a 1:');
  for (let i = 10; i >= 1; i--) {
    console.log(i);
  }

  // 10. Mostrar número 10 vezes
  let num2 = parseInt(await ask('\n10) Digite um número inteiro para imprimir 10 vezes: '));
  for (let i = 0; i < 10; i++) {
    console.log(num2);
  }

  // 11. Soma 5 números
  let soma = 0;
  console.log('\n11) Digite 5 números para somar:');
  for (let i = 1; i <= 5; i++) {
    let n = parseFloat(await ask(`Número ${i}: `));
    soma += n;
  }
  console.log('Soma total: ' + soma);

  // 12. Tabuada
  let tabuadaNum = parseInt(await ask('\n12) Digite um número para mostrar a tabuada (1 a 10): '));
  console.log(`Tabuada do ${tabuadaNum}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${tabuadaNum} x ${i} = ${tabuadaNum * i}`);
  }

  // 13. Média até digitar 0
  console.log('\n13) Digite números decimais para calcular a média (digite 0 para sair):');
  let numeros = [];
  while (true) {
    let n = parseFloat(await ask('Número: '));
    if (n === 0) break;
    numeros.push(n);
  }
  if (numeros.length > 0) {
    let media = numeros.reduce((a, b) => a + b, 0) / numeros.length;
    console.log('Média: ' + media.toFixed(2));
  } else {
    console.log('Nenhum número válido foi digitado.');
  }

  // 14. Fatorial
  let fatNum = parseInt(await ask('\n14) Digite um número para calcular o fatorial: '));
  if (fatNum < 0) {
    console.log('Número inválido para fatorial.');
  } else {
    let fatorial = 1;
    for (let i = 2; i <= fatNum; i++) {
      fatorial *= i;
    }
    console.log(`Fatorial de ${fatNum} é ${fatorial}`);
  }

  // 15. Fibonacci
  console.log('\n15) Primeiros 10 números da sequência de Fibonacci:');
  let fib = [0, 1];
  for (let i = 2; i < 10; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  console.log(fib.join(', '));

  rl.close();
}

main();
