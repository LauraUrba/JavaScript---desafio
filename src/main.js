const croche = {
  la: "circulo",
  agulha: 2,
  modelo: "touca",
  ponto: "ponto baixo",
};

//Destruturação - extrair valores de objetos ou arrays e atribuí-los diretamente a variáveis
 //document.body.innerText - vai mostrar o documento dentro do corpo (body) no html e define o texto visível no navegador
 //JSON.stringify - transforma objetos (ou arrays) em strings no formato JSON

      //const la = croche.la;
      //document.body.innerText = JSON.stringify(la);

      //const {la, ponto} = croche;
      //document.body.innerText = JSON.stringify({la, ponto});

      //const { la, agulha, modelo } = croche;
      //document.body.innerText = JSON.stringify({ la, agulha, modelo });

      //REST OPERATOR - agrupa valores restantes

      //const {la, modelo, agulha, ...rest} = croche; 
      //document.body.innerText = JSON.stringify(rest);

      //const {ponto, ...rest} = croche;
      //document.body.innerText = JSON.stringify (rest);

      
/*--------------------------------------------------*/     

      
//SHORT SYNTAX - criar objetos com o mesmo nome da propriedade

/*const linha = "Pinguim";
const tecnica = "ponto pipoca";

const vestido = {
  //linha,
  //tecnica,
};

document.body.innerText = JSON.stringify(vestido);*/



/*--------------------------------------------------*/



//METODOS - criar um array utilizando map e filter 

/*const correntinhas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const i of correntinhas) {
  document.body.innerText += i;
}*/

  //MAP= permite tranformar cada item de um array em um novo valor, retornando um novo array com os resultados que não altera o array original - criando uma lista e=com base em outra

/*const novoVetor = correntinhas.map((item) => {
  return item * 5;
});
document.body.innerText = novoVetor; */ //ele vai multiplicar cada ponto por 5

/*const Vetor = correntinhas.map((item) => {
  return item - 4;
});
document.body.innerText = Vetor; */ //ele vai multiplicar cada ponto por 5


//FILTER - ele filta itens com base me uma condição e retorna em que atendem aquela condição - que retorne zero

/*const VetorTres = correntinhas.filter((item) => item % 2 == 0); //% é o modolo que ando dividir ele só vai mostrar o resto todos da condição - ele pegou numeros pares 
document.body.innerText = VetorTres;*/

/*const valor = correntinhas.filter((item) => item - 2 == 0); //soma ou multiplicação não funciona, porque ele não retona zero
document.body.innerText = valor;*/

/*const teste = correntinhas.filter ((item) => item > 2); 
document.body.innerText = teste;*/

/*-----*/
const livros = [
  { titulo: "Promessas Vazias", preco: 45 },
  { titulo: "Sacrificada", preco: 30 },
  { titulo: "Corte de Espinhos e Rosas", preco: 60 },
  { titulo: "O Acordo Com o Rei Elfo", preco: 38 },
  { titulo: "Cinderela Está Morta", preco: 55 }
];

const livrosBaratos = livros.filter(livro => livro.preco < 50);

console.log(livrosBaratos);



/*----------------------------------------*/


//TEMPLE LITERALS - Interpolar variáveis e expressões dentro de String 

/*const musica = "Thriller"; 
const artista = "Michael Jackson";

const mensagem = `A letra de ${musica} (${artista}) fala sobre a sensação de terror que se apondera de alguém quando confrontado com o desconhecido e sobrenatural. `;
document.body.innerText = mensagem;*/



/*----------------------------------------*/



//ES MODULES
//reutilizar um arquivo dentro do main - import

import { filme, serie, music} from "../src/modelo";

const m = `O ${filme} explora a amizade, a importância da união e a necessidade de sobreviver em um ambiente hostil.`; 
document.body.innerText = m; 

const s = ` A serie ${serie} que retrata um psicólogo criminal com um dom para entender a mente de assasinos.`;
document.body.innerText = s; 

const c = `A banda AC/DC lançou a música ${music} nos anos 70, que trata claraemente uma pessoa se preparando para uma curtição forte, com um pouco trabalho, amor livre, sem julgamentos, sem motivos, só festa com os amigos.`;
document.body.innerText = c;