const routes = require('next-routes')();

routes
	.add('/', '/home/index')
	.add('/stores', '/stores/index')

module.exports = routes;