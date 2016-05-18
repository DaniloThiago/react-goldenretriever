var React_Router = require('react-router');
var Link = React_Router.Link;

var Header = require('./header');


let Home = React.createClass({
	render: function() {
		return <Header />
	}
});

module.exports = Home;