var React = require('react');
var CanvasParticles = require('../canvas/particles.jsx');
var SocialShare = require('../components/social.jsx');

var homePage = React.createClass({
  render: function(){
    return (
      <div className="page home">

        <div className="background">
          <CanvasParticles />
        </div>

        <div className="content">
          <SocialShare />
        </div>
      </div>
    )
  }
})

module.exports = homePage