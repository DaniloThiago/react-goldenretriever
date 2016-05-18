var React_Router = require('react-router');
var Link = React_Router.Link;


let Header = React.createClass({
	render: function() {
		return (
			<section>
			<h1><Link to={'/'}>home</Link></h1>
			<h1><Link to={'/news'}>Noticias</Link></h1>
			<h1><Link to={'/about'}>Sobre</Link></h1>
			<h1><Link to={'/contact'}>contato</Link></h1>
			</section>
		)
	}
});

module.exports = Header;