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
    ctx.body = users.find(u => u.id == ctx.params.idÎ);
}

const create = ctx => {
    ctx.body = ctx.request.body;
    users = users.concat(ctx.request.body);
}

module.exports = {
    getAll,
    getOne,
    create
}