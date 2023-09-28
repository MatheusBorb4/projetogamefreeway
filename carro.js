//Posicao inicial dos carros
let posicaoInicial = 600;

//indices     [ 0   1   2 ]
let yCarros = [40, 96, 150, 210, 260, 320]

let xCarros = [posicaoInicial, posicaoInicial, posicaoInicial, posicaoInicial, posicaoInicial, posicaoInicial]

let velocidadeCarros = [2, 2.5, 3, 5, 3.3, 2.3]

let comprimentoCarro = 60;
let alturaCarro = 40;

// Desenha os carros
function mostraCarro()
{
  for (let i = 0 ; i < imagemCarros.length ; i++)
    {
      image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
    }
}

//Movimenta os Carros
function movimentaCarro()
{
  for(let i = 0 ; i < xCarros.length ; i++)
      {
        xCarros[i] -= velocidadeCarros[i];
      }
}

// Gera o loop de movimento dos carros
function voltaCarro()
{
 for(let i = 0 ; i < xCarros.length ; i++)
      {
        if (xCarros[i] < -50)
          {
            xCarros[i] = posicaoInicial;
          }
      }
}