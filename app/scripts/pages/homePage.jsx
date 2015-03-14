var React = require('react');
var _ = require('lodash');

var CanvasElement = require('../canvas/canvas.jsx');
var ParticlesCombustibleBehavior = require('../behaviors/SquaresFlipping');
var ParticlesGravityBehavior = require('../behaviors/ParticlesGravity');
var SquaresFlipping = require('../behaviors/SquaresFlipping');
var glitch = require('../behaviors/glitch');

var BookRecommend = require('../components/book.jsx');

var Page = require('./pageLayout.jsx');

var homePage = React.createClass({
  getInitialState: function(){
    var behaviors = [
      ParticlesCombustibleBehavior,
      ParticlesGravityBehavior,
      ];

    return {
      behavior : glitch
    }
  },
  render: function(){
    var content = (
      <div>
        <div className="page-content"><BookRecommend /></div>
      </div>
    );
    return (
      <Page name="home" behavior={this.state.behavior} content={content} />
    )
  }
})

module.exports = homePage