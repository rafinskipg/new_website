var HomeView = require('./pages').homePage;
var HireView = require('./pages').hire;
var ExperimentsView = require('./pages').experiments;
var ExperimentItemView = require('./pages').experiment;
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
      
      <Route name="experiments" handler={ExperimentsView}>
        <Route name="experiment" path="/experiment/:experimentId" handler={ExperimentItemView} />
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