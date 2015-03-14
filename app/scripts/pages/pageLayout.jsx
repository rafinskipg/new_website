var React = require('react');

var CanvasElement = require('../canvas/canvas.jsx');
var LeftColumn = require('../columns/leftcolumn.jsx');

var PageLayout = React.createClass({
  getInitialState: function(){
    return {
      behavior : this.props.behavior,
      name : this.props.name,
      content: this.props.content
    }
  },
  render: function(){
    var name = "page " + this.state.name;
    return (
      <div className={name}>

        <LeftColumn/>
        
        <div className="main-content">

          <div className="content">
            <div className="background">
              <CanvasElement behavior={this.state.behavior} />
            </div>
            <div className="row">
              <div className="col-xs-12 text-center">
                {this.state.content}
              </div>
            </div>
          </div>
        </div>


      
      </div>
    )
  }
})

module.exports = PageLayout