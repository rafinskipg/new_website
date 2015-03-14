var React = require('react');
var _ = require('lodash');

var CanvasElement = require('../canvas/canvas.jsx');
var SquaresFlippingBehavior = require('../behaviors/SquaresFlipping');
var LeftColumn = require('../columns/leftcolumn.jsx');

var Page = require('./pageLayout.jsx');

var hirePage = React.createClass({
  getInitialState: function(){
    return {
      behavior : SquaresFlippingBehavior
    }
  },
  render: function(){
    var content = (
      <div>
        <div className="page-title">You can hire me</div>
        <div className="page-content">

        <p>
        I am available for hire, contact me and tell me about your project.
        </p>

        <p>
          If you need one of the following services, I can provide that on an hourly
          independent contractor basis:
        </p>
  
        <ul>
          <li>
            Quick start a project. If you need a working prototype for a new project I can 
            build it.
          </li>
          <li>
            rapid prototyping. If you can describe your problem in terms of what the
            inputs are and what the outputs should be, I can build it very quickly.
          </li>
          <li>
            modular web development. front and back and 
            <a href="http://browserify.org">in between</a>.
            release management. finding good modules. testing.
            carefully untangling a ball of mud with tiny modules.
          </li>
          <li>
            Embedding your website or application into a mobile application with Cordova 
          </li>
          <li>
           Teaching online or presential (madrid)
          </li>
          <li>
            Weekend or week courses (everywhere)
          </li>
        </ul>
        <p>
          I use <a href="http://nodejs.org/">node</a> because it has <a href="https://www.npmjs.org/">a nice package manager</a>
          and <a href="http://nodeschool.io/">community</a>.
        </p>

        <h3>Terms and conditions</h3>
        <p>
          It will cost you: <b>35€ / hour</b> for normal developments. <b> 40-50 € per hour </b> for consulting companies. <b>500€ per day</b> for courses + <b>500€ for preparing the course material</b>
          I use <a href="http://npmjs.org/package/clocker">clocker</a> to track hours
          and <a href="http://npmjs.org/package/invoicer">invoicer</a> to generate
          invoices.
        </p>

        <p>
          In the course of development, I publish tiny reusable open source packages
          where appropriate. This is crucial to the craft of doing software well and
          everyone wins, especially you. This is just how I work.
        </p>
        
        <p>
        Only remote positions. For short projects ( 1 - 4 weeks) y may accept in-house work (Madrid)
        </p>
        <p>
        For courses I'm able to travel to everywhere, but you pay the expenses of the travel + bedroom.
        </p>

        <p>
          If you are in the Madrid accessible I may be able
          to meet in person where appropriate.
        </p>
        
        
        <h3>Contact</h3>
       
        <p>
          If you have a fitting project, email me about it!
          <a href="mailto:rafinskipg@gmail.com">rafinskipg@gmail.com</a>
        </p>
        <p> You can also send me secret messages through <a href="https://keybase.io/">Keybase</a> </p>
        <pre>    keybase encrypt rafinskipg -m 'The secret message'</pre>

        </div>
      </div>
    )
    return (
      <Page name="hire" behavior={this.state.behavior} content={content} />
    )
  }
})

module.exports = hirePage