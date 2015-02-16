var React = require('react');
var Engine = require('../gameset/Engine');
var Particle = require('../models/particleCombustible');
var Utils = require('../gameset/utils');
var _ = require('lodash');

var homePage = React.createClass({
  componentDidMount: function(){
    var canvas = this.refs.canvas.getDOMNode();
    var MAX_PARTICLES = 80;
    var particles = [];
    var bgColor = '#08101A';
    var colors = ['#659A5C', '#B9A838', '#FFBC21'];

    function update(dt){
      
      particles = _.compact(particles.map(function(shape){
        shape.update(dt);
        if(shape.alive){
          return shape;
        }else{
          return newRandomParticle();
        }
      }))
    }

    function render(context,canvas){
      for(var i = 0; i < particles.length; i++){
        particles[i].render(context, canvas.width, canvas.height);
      }
    }

    function start(context, canvas){

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      for (var i = 0; i < MAX_PARTICLES; i ++){
        particles.push(newRandomParticle())
      }

    }

    function newRandomParticle(){
      return new Particle({
          combustible : Utils.randomInteger(100, 300),
          time : Utils.randomInteger(0,999),
          consumes : Utils.randomInteger(10, 30),
          x : Utils.randomInteger(0, canvas.width),
          y : Utils.randomInteger(0, canvas.height),
          normalSpeed : Utils.randomInteger(20, 30),
          angle : Utils.randomInteger(0, 360),
          color : colors[Utils.randomInteger(0, colors.length - 1)]
        });
    }

    /**
    New clearing method
    **/
    function clear(context, canvas){
      context.globalAlpha = 1;
      context.globalCompositeOperation = "source-over";
      
      context.save();
        
      //context.fillStyle = "#102";
      context.fillStyle = bgColor;
      context.fillRect(0, 0, canvas.width, canvas.height);

      context.globalCompositeOperation = "lighter";
    }

    var myEngine = new Engine(canvas);
    myEngine.setClearingMethod(clear);
    myEngine.addStartCallback(start);
    myEngine.addUpdateCallback(update);
    myEngine.addRenderCallback(render);
    myEngine.start();
  },
  render: function(){
    return (
      <div>
        <canvas id="canvas-particles" ref="canvas"></canvas>
        
      </div>
    )
  }
})

module.exports = homePage