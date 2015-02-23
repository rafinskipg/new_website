var React = require('react');

var SocialShare = require('../components/social.jsx');
var Menu = require('../components/menu.jsx');

var leftColumn = React.createClass({
  render: function(){
    return (
      <div className="left-column">
        <Menu />
        <SocialShare />
      </div>
    )
  }
})

module.exports = leftColumn