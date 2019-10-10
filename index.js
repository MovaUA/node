const Koa = require('koa')
const Router = require('@koa/router');

const app = new Koa();
const router = new Router();

process.on('SIGINT', handleSignal)
process.on('SIGTERM', handleSignal)

function handleSignal(signal) {
    console.log()
    console.log(`received signal ${signal}`)
    console.log("bye bye")
    process.exit(0)
}

router
    .get('/', (ctx, next) => {
        ctx.body = 'Welcome friend!';
    });

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);
