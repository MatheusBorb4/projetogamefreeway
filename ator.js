//Variáveis do Ator
let xAtor = 100;
let yAtor = 370;
let velocidadeAtor = 4;

//Colisao com Carros
let colidiu = false;

//Pontuação
let meusPontos = 0;
let minhasMortes = 0;

// Desenha o Ator
function mostraAtor()
{
  image(ator, xAtor, yAtor, 40, 40);
}

// Movimenta o Ator
function movimentaAtor()
{
  if (keyIsDown(UP_ARROW))
    {
      yAtor -= velocidadeAtor;
    }
  if (keyIsDown(DOWN_ARROW))
    {
      if(podeSeMover())
        {
          yAtor += velocidadeAtor;
        }
    }
  if (keyIsDown(LEFT_ARROW))
    {
      if (verificaEsquerda()) 
      {
        xAtor -= velocidadeAtor;
      }
    }
  if (keyIsDown(RIGHT_ARROW))
    {
      if (verificaDireita()) 
      {
        xAtor += velocidadeAtor;
      }
    }
}

// Verifica colisoes com o Ator
function verificaColisao()
{
  //collideRectRect(x, y, width, height, x2, y2, width2, height2 )
  for (let i = 0 ; i < imagemCarros.length ; i++)
    {
      colidiu = collideRectRect(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 20, 20)
      if (colidiu)
        {
          voltaAtor();
          colisao.play();
          if (pontosMaiorQueZero())
            {
              meusPontos -= 1;
          console.log("VOCÊ PERDEU -"+meusPontos+", LOOOSSSSEEEERRR")
            }
        }
    }
  
}

//Faz o ator voltar a posicao inicial
function voltaAtor()
{
  yAtor = 370;
  xAtor = 100;
}

//Mostra os Pontos
function incluiPontos()
{
  stroke(0)
  fill(color(127,255,212));
  textAlign(CENTER);
  textSize(25);
  text(meusPontos, width/5, 26);
}

//Marca pontos e volta ator
function marcaPontos()
{
  if (yAtor < 15)
    {
      yAtor = 370;
      meusPontos += 1;
      console.log("VOCE MARCOU "+meusPontos+" PARABENS GATONA")
      ponto.play();
    }
}

// Verifica os pontos para diminuir na perda
function pontosMaiorQueZero()
{
  return meusPontos > 0  
}

//Verifica se o Ator esta muito abaixo da tela
function podeSeMover()
{
  return yAtor < 370;
}

//Verifica se o Ator esta na extrema esquerda
function verificaEsquerda()
{
  return xAtor > 5;
}

//Verifica se o Ator esta na extrema direita
function verificaDireita()
{
  return xAtor < 455;
}