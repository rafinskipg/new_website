var Utils = require('../gameset/utils');

function Square(opts){
  this.x = opts.x
  this.y = opts.y
  this.width = opts.width
  this.angle = 0;
  this.velocity = 0.2;
  this.life = opts.life;

}

Square.prototype.render = function(context){
  context.save();

  context.translate(this.x, this.y);
  context.rotate(Utils.degreeToRadian(this.angle))


  context.beginPath();
  context.rect(-this.width / 2 , -this.width /2, this.width,  this.width);
  context.fillStyle = 'blue';
  context.strokeStyle = 'rgba(21,232,233,0.9)'
  context.fill();
  context.stroke();

  context.restore();
}

Square.prototype.update = function(dt){
  this.angle += dt * this.velocity;
  this.life -= dt / 10;
}

module.exports = Square