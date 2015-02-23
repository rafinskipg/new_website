var React = require('react');

var Sharebuttons = React.createClass({
  getInitialState: function(){
    return {
      twitter : 'https://twitter.com/rafinskipg',
      linkedin : 'http://es.linkedin.com/pub/rafael-pedrola-gimeno/37/788/226',
      npm : 'https://www.npmjs.com/~rafinskipg',
      github: 'https://github.com/rafinskipg',
      email : 'rafinskipg@gmail.com',
      tumblr : 'http://elcamino2015.tumblr.com/',
      instagram : 'http://instagram.com/rafinskipg/'

    }
  },
  componentDidMount: function(){

  },
  render : function(){
    return (
        <div className="share-buttons clearfix animated fadeInUp">
          <div className="buttons-container">
            <a href={this.state.twitter} target="_blank" className="share-button twitter ">
              <span className="fa fa-twitter-square"></span>
            </a>
            <a href={this.state.linkedin} target="_blank"  className="share-button linkedin">
              <span className="fa fa-linkedin-square"></span>
            </a>
            <a href={this.state.tumblr} target="_blank"  className="share-button tumblr">
              <span className="fa fa-tumblr-square"></span>
            </a>
            <a href={this.state.github} target="_blank"  className="share-button github last">
              <span className="fa fa-github-square"></span>
            </a>

          </div>  
        </div>
      )
  }
})

module.exports = Sharebuttons