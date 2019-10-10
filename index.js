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

let users = [
    {
        id: 1,
        name: 'Valeriy',
        email: 'vmo@ciklum.com'
    },
    {
        id: 2,
        name: 'master',
        email: 'master@of.puppets'
    }
];

router
    .get('/', ctx => {
        ctx.body = 'Welcome friend!';
    })
    .get('/users', ctx => {
        ctx.body = users
    })
    ;

app
    .use(router.routes())
    .use(router.allowedMethods());

const port = 3000;

app.listen(port);

console.log(`server is listenning on port ${port}...`)
