const db = require('../db');

const itemsController = {
    get(ctx, next) {
        ctx.body = db.getItems();
    },
    create(ctx, next) {
        db.writeItem(null, ctx.request.body);
    },
    delete(ctx, next) {
        console.log('controller.delete', ctx.request);
        db.deleteItem(Number(ctx.params.itemId));
        ctx.status = 204;
    },
    update(ctx, next) {
        if (ctx.headers.authorization !== 'admin') {
            ctx.status = 403;
            return;
        }
        const updatedItem = db.updateItem(
            Number(ctx.params.itemId),
            ctx.request.body
        );

        if (updatedItem) {
            ctx.body = updatedItem;
        } else {
            ctx.status = 404;
        }
    },
};

module.exports = itemsController;