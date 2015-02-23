var React = require('react');
var _ = require('lodash');

var CanvasElement = require('../canvas/canvas.jsx');
var ParticlesCombustibleBehavior = require('../behaviors/SquaresFlipping');
var ParticlesGravityBehavior = require('../behaviors/ParticlesGravity');
var SquaresFlipping = require('../behaviors/SquaresFlipping');

var BookRecommend = require('../components/book.jsx');
var LeftColumn = require('../columns/leftcolumn.jsx');

var homePage = React.createClass({
  getInitialState: function(){
    var behaviors = [
      ParticlesCombustibleBehavior,
      ParticlesGravityBehavior,
      ];

    return {
      behavior : ParticlesGravityBehavior
    }
  },
  render: function(){
    return (
      <div className="page home">

        <LeftColumn/>
        
        <div className="main-content">
          <div className="background">
            <CanvasElement behavior={this.state.behavior} />
          </div>

          <div className="content">
            <div className="row">
              <div className="col-xs-12 text-center">
                <BookRecommend />
              </div>
            </div>
          </div>
        </div>


      
      </div>
    )
  }
})

module.exports = homePage