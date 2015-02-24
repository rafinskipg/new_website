var React = require('react');

var Page = require('./pageLayout.jsx');
var ParticlesCombustibleBehavior = require('../behaviors/SquaresFlipping');

var PostPage = React.createClass({
  getInitialState: function(){
    return {
      behavior : ParticlesCombustibleBehavior
    }
  },
  render: function(){
    var content = 'The post';
    return (
      <Page name="post" behavior={this.state.behavior} content={content} />
    )
  }
})

module.exports = PostPage