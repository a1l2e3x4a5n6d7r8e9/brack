var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

// Mantenha a caixa no ar movendo a raquete com as setas para esquerda e para direita.
var raquete = createSprite(200, 375, 50, 15);
var bola = createSprite(150, 250, 20, 20);

//Linha 1 de tijolos
var box1 = createSprite(25, 75, 50, 50);
box1.shapeColor="red";
var box2 = createSprite(75, 75, 50, 50);
box2.shapeColor="blue";
var box3 = createSprite(125, 75, 50, 50);
box3.shapeColor="red";
var box4 = createSprite(175, 75, 50, 50);
box4.shapeColor="blue";
var box5 = createSprite(225, 75, 50, 50);
box5.shapeColor="red";
var box6 = createSprite(275, 75, 50, 50);
box6.shapeColor="blue";
var box7 = createSprite(325, 75, 50, 50);
box7.shapeColor="red";
var box8 = createSprite(375, 75, 50, 50);
box8.shapeColor="blue";

//Linha 2 de tijolos
var box9 = createSprite(25, 25, 50, 50);
box9.shapeColor = 'blue';
var box10 = createSprite(75, 25, 50, 50);
box10.shapeColor = 'red';
var box11 = createSprite(125, 25, 50, 50);
box11.shapeColor = 'blue';
var box12 = createSprite(175, 25, 50, 50);
box12.shapeColor = 'red';
var box13 = createSprite(225, 25, 50, 50);
box13.shapeColor = 'blue';
var box14 = createSprite(275, 25, 50, 50);
box14.shapeColor = 'red';
var box15 = createSprite(325, 25, 50, 50);
box15.shapeColor = 'blue';
var box16 = createSprite(375, 25, 50, 50);
box16.shapeColor = 'red';
var placar=0;

ESTADODEJOGO = 'iniciar';


function draw() {
  background("white");
  
  textSize(40);
  fill("yellow");
  text("placar:" +placar, 101, 185);
  
  if (ESTADODEJOGO === 'iniciar') {
    text("aperta espaço ae boy", 23, 150);
    if (keyDown("space")) {
      bola.velocityX = 1;
      bola.velocityY = 5;
      ESTADODEJOGO = 'jogar';
    }
  }
  if (ESTADODEJOGO === 'jogar') {
    raquete.x = World.mouseX;
    bola.bounceOff(raquete);
    if (bola.y > 400 || placar === 16) {
      ESTADODEJOGO = 'fim';
    }
    //destriu blocos linha 1
    if(bola.isTouching(box1)){
      box1.destroy();
      playSound("assets/category_explosion/8bit_explosion.mp3", false);
    }
    
    if(bola.isTouching(box2)){
      box2.destroy();
      playSound("assets/category_explosion/8bit_explosion.mp3", false);
      placar = placar +1;
    }
    
    if(bola.isTouching(box3)){ 
      box3.destroy();
      playSound("assets/category_explosion/8bit_explosion.mp3", false)
      placar = placar +1;
    }
    
    if(bola.isTouching(box4)){
      box4.destroy();
      playSound("assets/category_explosion/8bit_explosion.mp3", false)
      placar = placar +1;
    }
    
    if(bola.isTouching(box5)){ 
       box5.destroy();
       playSound("assets/category_explosion/8bit_explosion.mp3", false)
       placar = placar +1;
    }
    
    if(bola.isTouching(box6)) {
       box6.destroy();
       playSound("assets/category_explosion/8bit_explosion.mp3", false)
       placar = placar +1;
    }
    
    if(bola.isTouching(box7)) { 
      box7.destroy();
      playSound("assets/category_explosion/air_explode_bonus_5.mp3", false)
      placar = placar +1;
    }
    
    if(bola.isTouching(box8)){
      box8.destroy();
      playSound("assets/category_explosion/8bit_explosion.mp3", false)
      placar = placar +1;
    }
    if(bola.isTouching(box9)){
      box9.destroy();
      playSound("assets/category_explosion/8bit_explosion.mp3", false)
      placar = placar +1;
    }
    if (bola.isTouching(box10)) {
      box10.destroy();
      playSound("assets/category_explosion/vibrant_game_bright_distroy_item_1.mp3", false)
      placar = placar +1; 
    }
    if (bola.isTouching(box11)) {
      box11.destroy();
      playSound("assets/category_explosion/vibrant_game_cartoon_game_laser_hit_13_boom_doppler.mp3", false)
      placar = placar +1;
    }
    if (bola.isTouching(box12)) {
      box12.destroy();
      playSound("assets/category_explosion/vibrant_game_cartoon_game_laser_hit_10_high_squeal.mp3", false)
      placar = placar +1;
    }
    if (bola.isTouching(box13)) {
      box13.destroy();
      playSound("assets/category_explosion/vibrant_game_bass_game_blip_with_fuzz_2.mp3", false)
      placar = placar +1;
    }
    if (bola.isTouching(box14)) {
      box14.destroy();
      playSound("assets/category_explosion/puzzle_game_break_magic_01.mp3", false )
    }
    if (bola.isTouching(box15)) {
      box15.destroy();
      playSound("assets/category_explosion/melodic_loss_1.mp3", false)
      placar = placar +1;
    }
    if (bola.isTouching(box16)) {
      box16.destroy();
      playSound("assets/category_explosion/vibrant_game_cartoon_game_laser_hit_10_high_squeal.mp3", false)
      placar = placar +1;
    }
    
    //parede
    createEdgeSprites();
    bola.bounceOff(topEdge);
    bola.bounceOff(leftEdge);
    bola.bounceOff(rightEdge);
  }
  if (ESTADODEJOGO === 'fim') {
    text("duas palavras", 18, 254);
    text("para bens", 50, 280);
  }

  //caixas 2 
  
  drawSprites();

}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
