var HomeView = require('./pages').homePage;
var HireView = require('./pages').hire;
var Blog = require('./pages').blog;
var Post = require('./pages').post;
var PageNotFound = require('./common').notFound;
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var React = require('react');


var App = React.createClass({
  render: function () {
    return (
      <RouteHandler/>
    );
  }
});

function start () {
  var routes = (
    <Route name="app" path="/" handler={App}>
      <DefaultRoute handler={HomeView} />
      <Route name="hire" handler={HireView} />
      
      <Route name="blog" handler={Blog}>
        <Route name="post" path="/post/:postId" handler={Post} />
      </Route>
      <NotFoundRoute handler={PageNotFound}></NotFoundRoute>

    </Route>
  );

  Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.getElementById('app'));
  });
}

module.exports = {
  start: start
}