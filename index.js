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
function soma(a, b) {
    console.log(a + b);
}
/*
  soma(10, 15);
  soma(10, 20);
  soma(30, 50);
  soma(50, 50);
*/
// Questão 4
function questao4(num1, num2) {
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
function somaRetorno(x, y) {
    return x + y;
}
//console.log(somaRetorno(15, 65));
// Questão 6
function isPar(inteiro) {
    return inteiro % 2 === 0 ? true : false;
}
//console.log(isPar(8));
// Questão 7
function media(nota1, nota2, nota3) {
    return ((nota1 + nota2 + nota3) / 3).toFixed(3);
}
//console.log(media(5, 7.5, 8));
// Questão 8
function imc(altura, peso) {
    if (Number.isInteger(altura) || !Number.isInteger(peso)) {
        return "Um dos valores não é válido";
    }
    var imc = peso / Math.pow(altura, 2);
    return "Seu IMC \u00E9 ".concat(imc.toFixed(2));
}
//console.log(imc(1.72,77));
// Questão 9
function calcularDesconto(produto, percentualDesconto) {
    if (produto === void 0) { produto = 4000; }
    if (percentualDesconto === void 0) { percentualDesconto = 50; }
    var produtoDesconto = (produto * (percentualDesconto / 100)).toFixed(2);
    return "Seu desconto seria ".concat(percentualDesconto, "% para o produto de valor ").concat(produto, "\nCusto final do produto: ").concat(produtoDesconto);
}
//console.log(calcularDesconto(80000, 75));
// Questão 10
var imposto = function (valor, aliquota) {
    return (valor * (aliquota / 100)).toFixed(3);
};
function calcularImpostoRenda(salarioBruto) {
    if (salarioBruto <= 1903.98)
        return "O imposto está insento!";
    if (salarioBruto >= 1903.99 && salarioBruto <= 2826.65) {
        return "Com alicota de 7,5%, seu imposto de renda \u00E9 ".concat(imposto(salarioBruto, 7.5), "\n");
    }
    if (salarioBruto >= 2826.66 && salarioBruto <= 3751.05) {
        return "Com alicota de 15%, seu imposto de renda \u00E9 ".concat(imposto(salarioBruto, 15), "\n");
    }
    if (salarioBruto >= 3751.06 && salarioBruto <= 4664.68) {
        return "Com alicota de 22,5%, seu imposto de renda \u00E9 ".concat(imposto(salarioBruto, 22.5), "\n");
    }
    else {
        return "Com alicota de 27,5%, seu imposto de renda \u00E9 ".concat(imposto(salarioBruto, 27.5), "\n");
    }
}
//console.log(calcularImpostoRenda(5000));
// Questão 11
function calcularMediaArredondada(listaNumeros) {
    var mediaArredondada = 0;
    for (var _i = 0, listaNumeros_1 = listaNumeros; _i < listaNumeros_1.length; _i++) {
        var numero = listaNumeros_1[_i];
        mediaArredondada += numero;
    }
    mediaArredondada = Math.round(mediaArredondada / listaNumeros.length);
    return "n\u00FAmeros: ".concat(listaNumeros, "\nm\u00E9dia dos valores (arredondada): ").concat(mediaArredondada);
}
//console.log(calcularMediaArredondada([78,96,35,657.3]));
// Questão 12
function contarDigitosParesImpares(inteiro) {
    if (inteiro === void 0) { inteiro = 1010; }
    var pares = [], impares = [], digitos = String(inteiro).split("").map(Number);
    digitos.forEach(function (x) {
        x % 2 === 0 ? pares.push(x) : impares.push(x);
    });
    return "Inteiro: ".concat(inteiro, "\nQuantidade de digitos pares: ").concat(pares.length, "\nQuantidade de digitos impares: ").concat(impares.length);
}
//console.log(contarDigitosParesImpares());
// Questão 13
var alunosLista = [
    { nome: "Rodrigo", nota: 7.9 },
    { nome: "Miguel", nota: 4.5 },
    { nome: "Abraão", nota: 9.3 },
];
var getMedia = function (notasTotal, quantidadeNotas) {
    return (notasTotal / quantidadeNotas).toFixed(2);
};
function calcularMediaAluno(alunosLista) {
    var alunos = [], notas = [];
    var soma = 0, frase = "";
    alunosLista.forEach(function (x) {
        alunos.push(x.nome);
        notas.push(x.nota);
    });
    for (var _i = 0, notas_1 = notas; _i < notas_1.length; _i++) {
        var nota = notas_1[_i];
        soma += nota;
    }
    for (var i_1 = 0; i_1 < alunosLista.length; i_1++) {
        frase += "Aluno: ".concat(alunos[i_1], " (Nota: ").concat(notas[i_1].toFixed(2), ")\n");
    }
    return "".concat(frase, "Media geral: ").concat(getMedia(soma, notas.length));
}
//console.log(calcularMediaAluno(alunosLista));
// Questão 14
function calcularIdade(anoNascimento) {
    return "Voc\u00EA tem ".concat(2023 - anoNascimento, " anos de idade");
}
//console.log(calcularIdade(2002));
// Questão 15
function gerarTabuada(numero) {
    var tabuada = "Tabuada do ".concat(numero, "\n");
    for (var i_2 = 0; i_2 <= 10; i_2++)
        tabuada += "".concat(numero, " x ").concat(i_2, " = ").concat(numero * i_2, "\n");
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
var verificarPropriedade = function (objeto, frase) {
    return Object(objeto).hasOwnProperty(frase);
};
var objeto = { nome: "João", voz: "Grossa", idade: 423 };
//console.log(verificarPropriedade(objeto, "profissão"));
// Questão 18
function calcularPrecoProduto(valorCusto, margemLucro, valorFrete) {
    return valorCusto + (valorCusto * margemLucro) / 100 + valorFrete;
}
//console.log(calcularPrecoProduto(3470, 35, 1000));
// Questão 19
function maiorPalavra(frase) {
    var palavras = frase.split(" ");
    var maiorPalavra = "";
    console.log(palavras);
    for (var _i = 0, palavras_1 = palavras; _i < palavras_1.length; _i++) {
        var palavra = palavras_1[_i];
        if (palavra.length > maiorPalavra.length)
            maiorPalavra = palavra;
    }
    return maiorPalavra;
}
//console.log(maiorPalavra("O mundo é um livro, e quem fica sentado em casa lê somente uma página."));
// Questão 20
var listaPalavras = ["Hello", "World", "in", "a", "frame"];
function caixaPalavras(listaPalavras) {
    var maiorPalavra = "";
    listaPalavras.forEach(function (x) {
        if (x.length > maiorPalavra.length)
            maiorPalavra = x;
    });
    console.log("*".repeat(maiorPalavra.length + 4));
    for (var _i = 0, listaPalavras_1 = listaPalavras; _i < listaPalavras_1.length; _i++) {
        var palavra = listaPalavras_1[_i];
        console.log("* " + palavra + " ".repeat(maiorPalavra.length - palavra.length) + " *");
    }
    console.log("*".repeat(maiorPalavra.length + 4));
}
//caixaPalavras(listaPalavras);
// Questão 21
var palavras = [
    "palavras",
    "Palavras",
    "pequenas",
    "Grandes",
    "MEDIAS",
    "dois",
    "um",
    "mais",
];
function stringsCincoOuMais(arrayStrings) {
    var stringsMais5 = [];
    for (var _i = 0, arrayStrings_1 = arrayStrings; _i < arrayStrings_1.length; _i++) {
        var frase = arrayStrings_1[_i];
        if (frase.length >= 5)
            stringsMais5.push(frase);
    }
    return stringsMais5;
}
//console.log(stringsCincoOuMais(palavras));
// Questão 22
var livros = [], i = 1;
for (var index = 1; index <= 100; index++) {
    livros.push({
        titulo: "Livro ".concat(index),
        autor: "Autor ".concat(i),
        ano: 1922 + index,
    });
    if (index % 10 === 0)
        i++;
}
function livrosDeCertoAutor(livros, autor) {
    var livrosAutor = [];
    for (var _i = 0, livros_1 = livros; _i < livros_1.length; _i++) {
        var livro = livros_1[_i];
        if (livro.autor === autor)
            livrosAutor.push(livro);
    }
    return livrosAutor;
}
//console.log(livrosDeCertoAutor(livros, "Autor 3"));
// Questão 23
var pessoas = [];
for (var i_3 = 1; i_3 <= 15; i_3++) {
    pessoas.push({
        nome: "Pessoa ".concat(i_3),
        idade: Math.floor(Math.random() * 20) + 15 // Vai retornar um valor entre 15 e 35
    });
}
//console.log(pessoas);
function pessoaMaisVelha(listaPessoas) {
    var maisVelho = "", Idadetemp = 0;
    for (var _i = 0, listaPessoas_1 = listaPessoas; _i < listaPessoas_1.length; _i++) {
        var pessoa = listaPessoas_1[_i];
        if (pessoa.idade > Idadetemp) {
            Idadetemp = pessoa.idade;
            maisVelho = pessoa.nome;
        }
    }
    return "A pessoa mais velha do grupo \u00E9 ".concat(maisVelho);
}
//console.log(pessoaMaisVelha(pessoas));
// Questão 24
var carros = [];
for (var i_4 = 1; i_4 <= 20; i_4++) {
    carros.push({
        marca: "Marca ".concat(i_4),
        modelo: "Modelo ".concat(Math.floor(Math.random() * 10) + 1),
        ano: Math.floor(Math.random() * 30) + 1980
    });
}
//console.log(carros);
function soCarrosDoAno(carros, ano) {
    var carrosDoAno = [];
    for (var _i = 0, carros_1 = carros; _i < carros_1.length; _i++) {
        var carro = carros_1[_i];
        if (carro.ano >= ano)
            carrosDoAno.push(carro);
    }
    return carrosDoAno;
}
//console.log(soCarrosDoAno(carros,2000));
// Questão 25
function inverterString(string) {
    if (typeof (string) !== 'string')
        return "O parametro deve ser uma string";
    var stringReversa = '';
    for (var i_5 = string.length - 1; i_5 >= 0; i_5--)
        stringReversa += string[i_5].toLowerCase();
    return stringReversa;
}
//console.log(inverterString("Hello"))
