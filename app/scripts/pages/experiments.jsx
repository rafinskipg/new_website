var React = require('react');

var Page = require('./pageLayout.jsx');
var ParticlesCombustibleBehavior = require('../behaviors/ParticlesCombustible');

var MyExperiments = React.createClass({
  getInitialState: function(){
    return {
      behavior : ParticlesCombustibleBehavior
    }
  },
  render: function(){
    var content = 'My experiments';
    return (
      <Page name="experiments" behavior={this.state.behavior} content={content} />
    )
  }
})

module.exports = MyExperiments