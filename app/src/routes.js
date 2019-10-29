const itemsController = require('./controllers/items');

function init(router) {
    router.get('/', (ctx, next) => {

    });

    router.get('/items', itemsController.get);
    router.post('/items', itemsController.create);
    router.delete('/items/:itemId', itemsController.delete);
    router.put('/items/:itemId', itemsController.update);
}

module.exports = {
    init
}