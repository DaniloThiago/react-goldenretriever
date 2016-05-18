/** @jsx React.DOM */
'use strict'

var React = require('react');
var ReactDom = require('react-dom');

var React_Router = require('react-router');
var Router = React_Router.Router;
var Route = React_Router.Route;
var Link = React_Router.Link;
var browserHistory = React_Router.browserHistory;

var Home = require('./home');
var News = require('./news');
var About = require('./about');
var Contact = require('./contato');

let App = React.createClass({
	render: function() {
		return (
			<Router history={browserHistory}>
		    <Route path="/" component={Home} />
		    <Route path="/news" component={News} />
		    <Route path="/about" component={About} />
		    <Route path="/contact" component={Contact} />
		  </Router>
  	)
	}
});


ReactDom.render(<App />, document.querySelector("#pagina"));