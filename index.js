const Koa = require('koa')
const Router = require('@koa/router');
const bodyparser = require('koa-bodyparser');
const users = require('./users');

const app = new Koa();
const router = new Router();

function handleSignal(signal) {
    console.log(`received signal ${signal}. Exiting...`)
    process.exit(0)
}

process.on('SIGINT', handleSignal)
process.on('SIGTERM', handleSignal)

const home = ctx => ctx.body = 'Welcome friend!';

router
    .get('/', home)
    .get('/users', users.getAll)
    .get('/users/:id', users.getOne)
    .post('/users', users.create)
    ;

const traceRequest = async (ctx, next) => {
    let start = Date.now()

    console.log("request:", ctx.request);

    await next();

    let duration = Date.now() - start;

    console.log(`${ctx.request.method} ${ctx.request.url} duration: ${duration}ms`);
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
    () => console.log(`listening on port ${port}...`)
);