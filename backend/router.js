const {Router} = require('express');

const DevController = require('./Controller/DevController');
const SearchController = require('./Controller/SearchController');

routes = Router();

routes.post('/devs',DevController.store);
routes.get('/devs', DevController.index);

routes.get('/search', SearchController.index)

module.exports = routes