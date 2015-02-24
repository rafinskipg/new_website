var React = require('react');

var Page = require('./pageLayout.jsx');
var ParticlesCombustibleBehavior = require('../behaviors/ParticlesCombustible');

var ExperimentPage = React.createClass({
  getInitialState: function(){
    return {
      behavior : ParticlesCombustibleBehavior
    }
  },
  render: function(){
    var content = 'The experiment';
    return (
      <Page name="experiment" behavior={this.state.behavior} content={content} />
    )
  }
})

module.exports = ExperimentPage