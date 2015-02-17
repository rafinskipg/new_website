var React = require('react');
var _ = require('lodash');

var CanvasElement = require('../canvas/canvas.jsx');
var ParticlesCombustibleBehavior = require('../behaviors/ParticlesCombustible');
var ParticlesGravityBehavior = require('../behaviors/ParticlesGravity');

var SocialShare = require('../components/social.jsx');
var BookRecommend = require('../components/book.jsx');

var homePage = React.createClass({
  getInitialState: function(){
    var behaviors = [
      ParticlesCombustibleBehavior,
      ParticlesGravityBehavior,
      ];

    return {
      behavior : _.sample(behaviors)
    }
  },
  render: function(){
    return (
      <div className="page home">

        <div className="background">
          <CanvasElement behavior={this.state.behavior} />
        </div>

        <div className="content">
          <SocialShare />
          <div className="container">
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