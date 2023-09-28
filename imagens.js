// Carregamento de Imagens e sons

//Load das imagens
let imagemdaEstrada;
let ator;
let carro1;
let carro2;
let carro3;

//Load de Sons
let trilha;
let ponto;
let colisao;

function preload()
{
  imagemdaEstrada = loadImage("Imagens/estrada.png");
  ator = loadImage("Imagens/ator-3.png");
  carro1 = loadImage("Imagens/carro-1.png");
  carro2 = loadImage("Imagens/carro-2.png");
  carro3 = loadImage("Imagens/carro-3.png");
  imagemCarros = [carro1, carro2, carro3, carro2, carro1, carro3]
  
  trilha = loadSound("sons/trilha.mp3");
  ponto = loadSound("sons/pontos.wav");
  colisao = loadSound("sons/colidiu.mp3")
}