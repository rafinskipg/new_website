var React = require('react');

var Book = React.createClass({
  getInitialState: function(){
    return {
      url : 'https://leanpub.com/deceroacanvas'

    }
  },
  openWebsite: function(){
    window.open(this.state.url, '_blank');
  },
  render : function(){
    return (
        <div className="book jumbotron">
          <div className="title">
            <h1>De cero a canvas</h1>
            <p>Una introducción a canvas que te enseñará a crear tu propio motor de renderizado, a crear animaciones, juegos,
            y muchas cosas más</p>
          </div>
          <div className="image-container">
            <img className="centered" src="/images/cover.jpg"></img>
          </div>

          <div className="row">
            <div className="col-xs-12 text-center">
              <div className="btn btn-success" onClick={this.openWebsite}>
                suscribirse!
              </div>
            </div>
          </div>
        </div>
      )
  }
})

module.exports = Book