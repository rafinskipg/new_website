var React = require('react');

var Menu = React.createClass({
  
  render : function(){
    return (
        <div className="menu">
          <div className="buttons-container">
            <a href="#" className="menu-item" title="Home">
              <span className="logo-rvpg"></span>
            </a>
            <a href="#experiments" className="menu-item" title="Experiments">
              <span className="fa fa-magic"></span>
            </a>
        
            <a href="#hire" className="menu-item" title="Hire">
              <span className="fa fa-user-plus"></span>
            </a>

          </div>  
        </div>
      )
  }
})

module.exports = Menu