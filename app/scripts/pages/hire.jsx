var React = require('react');
var _ = require('lodash');

var CanvasElement = require('../canvas/canvas.jsx');
var ParticlesCombustibleBehavior = require('../behaviors/SquaresFlipping');
var LeftColumn = require('../columns/leftcolumn.jsx');

var hirePage = React.createClass({
  getInitialState: function(){
    return {
      behavior : ParticlesCombustibleBehavior
    }
  },
  render: function(){
    return (
      <div className="page hire">

        <LeftColumn/>
        
        <div className="main-content">
          <div className="background">
            <CanvasElement behavior={this.state.behavior} />
          </div>

          <div className="content">
            <div className="row">
              <div className="col-xs-12 text-center">
                You can hire me
              </div>
            </div>
          </div>
        </div>


      
      </div>
    )
  }
})

module.exports = hirePage