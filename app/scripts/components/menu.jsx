var React = require('react');

var Menu = React.createClass({
  
  render : function(){
    return (
        <div className="menu">
          <div className="buttons-container">
            <a href="#experiments" className="menu-item" title="Experiments">
              <span className="fa fa-magic"></span>
            </a>
            <a href="#blog" className="menu-item" title="Blog">
              <span className="fa fa-comment-o"></span>
            </a>
            <a href="#projects" className="menu-item" title="Projects">
              <span className="fa fa-cubes"></span>
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