var backgroundImage
var player, gameState, playerCount
var form
var paddle1
var paddle2
var paddles=[]
function preload(){
backgroundImage=loadImage("./assets/background.jpg")
paddle1Img=loadImage("paddle1.png")
paddle2Img=loadImage("paddle2.png")
}

function setup(){
createCanvas(windowWidth,windowHeight)
database=firebase.database()
game = new Game();
game.getState();
game.start();
}

function draw(){
background(backgroundImage)
if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

  if (gameState === 2) {
    game.showLeaderboard();
    game.end();
  }
}
function windowResized(){
    resizeCanvas(windowWidth, windowHeight)
}