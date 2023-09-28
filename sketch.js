function setup() 
{
  createCanvas(500, 400);
  trilha.loop();
  console.log("VOCÊ DEVE ATRAVESAR A RUA SEM SER PEGO   PELOS CARROS, CADA VEZ QUE ATRAVESSAR, VOCÊ GANHA 1 PONTO, CADA VEZ QUE FOR PEGO, VOCÊ PERDE 1 PONTO, VOCÊ VENCERÁ SE CHEGAR EM 5 PONTOS, BOA SORTE!!")
}


function draw() 
{
  background(imagemdaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaCarro();
  verificaColisao();
  incluiPontos();
  marcaPontos();
  fimDeJogo();
}

function fimDeJogo()
{
  if (meusPontos > 4)
    {
      fill(color(70,130,180));
      rect(30, 130, 440, 140);
      textAlign(CENTER);
      textSize(70);
      fill(255);
      text("PARABENS!!", 250, 200)
      textAlign(CENTER);
      textSize(50);
      fill(255);
      text("VOCÊ GANHOU!!", 250, 250)
    }
}