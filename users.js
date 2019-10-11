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

const getAll = ctx => ctx.body = users;

const getOne = ctx => {
    const user = users.find(u => u.id == ctx.params.id);
    if (user) {
        ctx.body = user;
    }
}

const create = ctx => {
    const newUser = {
        id: 1 + Math.max.apply(Math, users.map(u => u.id)),
        name: ctx.request.body.name,
        email: ctx.request.body.email
    };
    users = users.concat(newUser);
    ctx.body = newUser;
}

module.exports = {
    getAll,
    getOne,
    create
}