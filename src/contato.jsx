var React_Router = require('react-router');
var Link = React_Router.Link;

let Contato = React.createClass({
	render: function() {
		return <h1><Link to={'/'}>voltar</Link></h1>
	}
})

module.exports = Contato;