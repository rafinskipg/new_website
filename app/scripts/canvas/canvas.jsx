var React = require('react');

var CanvasComponent = React.createClass({
  componentDidMount: function(){
    var canvas = this.refs.canvas.getDOMNode();
    this.props.behavior.initialize(canvas);
  },
  render: function(){
    return (
      <div>
        <canvas ref="canvas"></canvas>
      </div>
    )
  }
})

module.exports = CanvasComponent