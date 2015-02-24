var React = require('react');

var Page = require('./pageLayout.jsx');
var ParticlesCombustibleBehavior = require('../behaviors/SquaresFlipping');

var BlogPage = React.createClass({
  getInitialState: function(){
    return {
      behavior : ParticlesCombustibleBehavior
    }
  },
  render: function(){
    var content = 'My blog';
    return (
      <Page name="blog" behavior={this.state.behavior} content={content} />
    )
  }
})

module.exports = BlogPage