const Koa = require('koa')
const Router = require('@koa/router');
const bodyparser = require('koa-bodyparser');
const users = require('./users');
const routes = require('./src/routes');

const app = new Koa();
const router = new Router();

function handleSignal(signal) {
    console.log(`received signal ${signal}. Exiting...`)
    process.exit(0)
}

process.on('SIGINT', handleSignal)
process.on('SIGTERM', handleSignal)

const home = ctx => ctx.body = 'Welcome friend!';

routes.init(router);

router
    .get('/', home)
    .post('/users', users.create)
    .get('/users', users.getAll)
    .get('/users/:id', users.getOne)
    ;

const traceRequest = async (ctx, next) => {
    let start = Date.now()

    console.log(ctx.request.method, ctx.request.url);

    await next();

    let duration = Date.now() - start;

    console.log(`duration: ${duration}ms`);
};


app
    .use(traceRequest)
    .use(bodyparser())
    .use(router.routes())
    .use(router.allowedMethods())
    ;

const port = 3000;
app.listen(
    port,
    err => {
        if (err){
            console.error(`Could not listen on port ${port}`, err)
            return
        }
        console.log(`listening on port ${port}...`);
    }
);