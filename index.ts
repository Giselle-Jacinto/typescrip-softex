// Questão 1
function repeticao() {
    console.log("Estudar é muito bom");
    console.log("Paciência é pesistência");
    console.log("Revisão é a mãe do aprendizado");

    console.log("Estudar é muito bom");
    console.log("Paciência é pesistência");
    console.log("Revisão é a mãe do aprendizado");

    console.log("Estudar é muito bom");
    console.log("Paciência é pesistência");
    console.log("Revisão é a mãe do aprendizado");
}
//repeticao();

// Questão 2
function criarFrases() {
    console.log("Estudar é muito bom");
    console.log("Paciência é pesistência");
    console.log("Revisão é a mãe do aprendizado");
}
/*
  criarFrases();
  criarFrases();
  criarFrases();
  */

// Questão 3
function soma(a: number, b: number) {
    console.log(a + b);
}
/*
  soma(10, 15);
  soma(10, 20);
  soma(30, 50);
  soma(50, 50);
*/

// Questão 4
function questao4(num1: number, num2: number): number {
    return num1 + num2;
}
/*
    const teste1: number = questao4(10, 15);
    console.log(teste1);
 
    const teste2: number = questao4(10, 20) + somaRetorno(30, 50);
    console.log(teste2);
 
    console.log(questao4(50, 50));
*/

// Questão 5
function somaRetorno(x: number, y: number): number {
    return x + y;
}
//console.log(somaRetorno(15, 65));

// Questão 6
function isPar(inteiro: number) {
    return inteiro % 2 === 0 ? true : false;
}
//console.log(isPar(8));

// Questão 7
function media(nota1: number, nota2: number, nota3: number) {
    return ((nota1 + nota2 + nota3) / 3).toFixed(3);
}
//console.log(media(5, 7.5, 8));

// Questão 8
function imc(altura: number, peso: number) {
    if (Number.isInteger(altura) || !Number.isInteger(peso)) {
        return "Um dos valores não é válido";
    }
    const imc = peso / Math.pow(altura, 2);
    return `Seu IMC é ${imc.toFixed(2)}`;
}
//console.log(imc(1.72,77));

// Questão 9
function calcularDesconto(
    produto: number = 4000,
    percentualDesconto: number = 50
) {
    const produtoDesconto = (produto * (percentualDesconto / 100)).toFixed(2);
    return `Seu desconto seria ${percentualDesconto}% para o produto de valor ${produto}\nCusto final do produto: ${produtoDesconto}`;
}
//console.log(calcularDesconto(80000, 75));
// Questão 10
const imposto = (valor: number, aliquota: number) =>
    (valor * (aliquota / 100)).toFixed(3);

function calcularImpostoRenda(salarioBruto: number) {
    if (salarioBruto <= 1903.98) return "O imposto está insento!";
    if (salarioBruto >= 1903.99 && salarioBruto <= 2826.65) {
        return `Com alicota de 7,5%, seu imposto de renda é ${imposto(
            salarioBruto,
            7.5
        )}\n`;
    }
    if (salarioBruto >= 2826.66 && salarioBruto <= 3751.05) {
        return `Com alicota de 15%, seu imposto de renda é ${imposto(
            salarioBruto,
            15
        )}\n`;
    }
    if (salarioBruto >= 3751.06 && salarioBruto <= 4664.68) {
        return `Com alicota de 22,5%, seu imposto de renda é ${imposto(
            salarioBruto,
            22.5
        )}\n`;
    } else {
        return `Com alicota de 27,5%, seu imposto de renda é ${imposto(
            salarioBruto,
            27.5
        )}\n`;
    }
}
//console.log(calcularImpostoRenda(5000));

// Questão 11
function calcularMediaArredondada(listaNumeros: number[]) {
    let mediaArredondada = 0;
    for (const numero of listaNumeros) {
        mediaArredondada += numero;
    }
    mediaArredondada = Math.round(mediaArredondada / listaNumeros.length);
    return `números: ${listaNumeros}\nmédia dos valores (arredondada): ${mediaArredondada}`;
}
//console.log(calcularMediaArredondada([78,96,35,657.3]));

// Questão 12
function contarDigitosParesImpares(inteiro: number = 1010) {
    const pares: number[] = [],
        impares: number[] = [],
        digitos: number[] = String(inteiro).split("").map(Number);

    digitos.forEach((x) => {
        x % 2 === 0 ? pares.push(x) : impares.push(x);
    });
    return `Inteiro: ${inteiro}\nQuantidade de digitos pares: ${pares.length}\nQuantidade de digitos impares: ${impares.length}`;
}
//console.log(contarDigitosParesImpares());

// Questão 13
const alunosLista = [
    { nome: "Rodrigo", nota: 7.9 },
    { nome: "Miguel", nota: 4.5 },
    { nome: "Abraão", nota: 9.3 },
];
const getMedia = (notasTotal: number, quantidadeNotas: number) =>
    (notasTotal / quantidadeNotas).toFixed(2);

function calcularMediaAluno(alunosLista: { nome: string; nota: number }[]) {
    const alunos: string[] = [],
        notas: number[] = [];
    let soma = 0,
        frase = "";

    alunosLista.forEach((x) => {
        alunos.push(x.nome);
        notas.push(x.nota);
    });
    for (const nota of notas) soma += nota;
    for (let i: number = 0; i < alunosLista.length; i++) {
        frase += `Aluno: ${alunos[i]} (Nota: ${notas[i].toFixed(2)})\n`;
    }

    return `${frase}Media geral: ${getMedia(soma, notas.length)}`;
}
//console.log(calcularMediaAluno(alunosLista));

// Questão 14
function calcularIdade(anoNascimento: number) {
    return `Você tem ${2023 - anoNascimento} anos de idade`;
}
//console.log(calcularIdade(2002));

// Questão 15
function gerarTabuada(numero: number) {
    let tabuada = `Tabuada do ${numero}\n`;
    for (let i: number = 0; i <= 10; i++)
        tabuada += `${numero} x ${i} = ${numero * i}\n`;
    return tabuada;
}
//console.log(gerarTabuada(5));
// Questão 16 - A função adivinheNumero() por usar comandos como alert e prompt causa erro ao tentar rodar o código, por isso
// Vai ficar em formato de comentário no arquivo
/*

function adivinheNumero() {
  const numeroCerto: number = Math.floor(Math.random() * 100) + 1;
  let contador: number = 0,
    frase: string = "Digite um valor inteiro (entre 1 e 100)",
    resposta: number = 0;
  alert(
    "Jogo do número aleátorio! \nTente adivinhar o número secreto\n(Dica: ele está entre 1 e 100)"
  );
  while (true) {
    resposta = Number(prompt(frase + `\nTentativa: ${contador + 1}`));
    if (Number.isNaN(resposta) || !Number.isInteger(resposta)) {
      alert("O valor usado não é válido");
    } else {
      contador++;
      if (resposta < 0 || resposta > 100) {
        frase = `${resposta} não é um valor adequado (você não recebe dica)`;
      } else if (resposta > numeroCerto) {
        frase = `O valor secreto é menor que ${resposta}`;
      } else if (resposta < numeroCerto) {
        frase = `O valor secreto é maior que ${resposta}`;
      } else break;
    }
  }
  console.log(numeroCerto, contador);
  alert(`Parabéns! A resposta era ${numeroCerto}\nTentativas: ${contador}`);

}*/
//adivinheNumero();

// Questão 17
const verificarPropriedade = (objeto: object, frase: string) => {
    return Object(objeto).hasOwnProperty(frase);
};
const objeto = { nome: "João", voz: "Grossa", idade: 423 };
//console.log(verificarPropriedade(objeto, "profissão"));

// Questão 18
function calcularPrecoProduto(
    valorCusto: number,
    margemLucro: number,
    valorFrete: number
): number {
    return valorCusto + (valorCusto * margemLucro) / 100 + valorFrete;
}
//console.log(calcularPrecoProduto(3470, 35, 1000));

// Questão 19
function maiorPalavra(frase: string): string {
    const palavras = frase.split(" ");
    let maiorPalavra = "";
    console.log(palavras);
    for (const palavra of palavras) {
        if (palavra.length > maiorPalavra.length) maiorPalavra = palavra;
    }
    return maiorPalavra;
}
//console.log(maiorPalavra("O mundo é um livro, e quem fica sentado em casa lê somente uma página."));

// Questão 20
const listaPalavras = ["Hello", "World", "in", "a", "frame"];

function caixaPalavras(listaPalavras: string[]) {
    let maiorPalavra = "";
    listaPalavras.forEach((x) => {
        if (x.length > maiorPalavra.length) maiorPalavra = x;
    });
    console.log("*".repeat(maiorPalavra.length + 4));
    for (const palavra of listaPalavras) {
        console.log(
            "* " + palavra + " ".repeat(maiorPalavra.length - palavra.length) + " *"
        );
    }
    console.log("*".repeat(maiorPalavra.length + 4));
}
//caixaPalavras(listaPalavras);

// Questão 21
const palavras = [
    "palavras",
    "Palavras",
    "pequenas",
    "Grandes",
    "MEDIAS",
    "dois",
    "um",
    "mais",
];

function stringsCincoOuMais(arrayStrings: string[]): string[] {
    let stringsMais5: string[] = [];
    for (const frase of arrayStrings) {
        if (frase.length >= 5) stringsMais5.push(frase);
    }
    return stringsMais5;
}
//console.log(stringsCincoOuMais(palavras));

// Questão 22
let livros: { titulo: string; autor: string; ano: number }[] = [],
    i = 1;
for (let index: number = 1; index <= 100; index++) {
    livros.push({
        titulo: `Livro ${index}`,
        autor: `Autor ${i}`,
        ano: 1922 + index,
    });
    if (index % 10 === 0) i++;
}
function livrosDeCertoAutor(
    livros: { titulo: string; autor: string; ano: number }[],
    autor: string
) {
    let livrosAutor: { titulo: string; autor: string; ano: number }[] = [];
    for (const livro of livros) {
        if (livro.autor === autor) livrosAutor.push(livro);
    }
    return livrosAutor;
}
//console.log(livrosDeCertoAutor(livros, "Autor 3"));
// Questão 23
let pessoas: { nome: string, idade: number }[] = [];
for (let i: number = 1; i <= 15; i++) {
    pessoas.push({
        nome: `Pessoa ${i}`,
        idade: Math.floor(Math.random() * 20) + 15 // Vai retornar um valor entre 15 e 35
    })
}
//console.log(pessoas);
function pessoaMaisVelha(listaPessoas: { nome: string, idade: number }[]) {
    let maisVelho: string = "", Idadetemp: number = 0;
    for (const pessoa of listaPessoas) {
        if (pessoa.idade > Idadetemp) {
            Idadetemp = pessoa.idade;
            maisVelho = pessoa.nome;
        }
    }
    return `A pessoa mais velha do grupo é ${maisVelho}`;
}
//console.log(pessoaMaisVelha(pessoas));

// Questão 24
let carros: { marca: string, modelo: string, ano: number }[] = [];
for (let i: number = 1; i <= 20; i++) {
    carros.push({
        marca: `Marca ${i}`,
        modelo: `Modelo ${Math.floor(Math.random() * 10) + 1}`,
        ano: Math.floor(Math.random() * 30) + 1980
    });
}
//console.log(carros);
function soCarrosDoAno(carros: { marca: string, modelo: string, ano: number }[], ano: number) {
    let carrosDoAno: { marca: string, modelo: string, ano: number }[] = [];
    for (const carro of carros) {
        if (carro.ano >= ano) carrosDoAno.push(carro);
    }
    return carrosDoAno;
}
//console.log(soCarrosDoAno(carros,2000));

// Questão 25
function inverterString(string: string) {
    if (typeof (string) !== 'string') return "O parametro deve ser uma string";
    let stringReversa = '';
    for (let i: number = string.length - 1; i >= 0; i--) stringReversa += string[i].toLowerCase();
    return stringReversa;
}
//console.log(inverterString("Hello"))