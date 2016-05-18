var React_Router = require('react-router');
var Link = React_Router.Link;


let News = React.createClass({
	render: function() {
		return <h1><Link to={'/contact'}>contato</Link></h1>
	}
});

module.exports = News;