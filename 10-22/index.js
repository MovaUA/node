const square = (n, callback) => {
    setTimeout(() => {
        callback(n * n)
    }, 1000);
}

const plus2 = (n, callback) => {
    setTimeout(() => {
        callback(n + 2)
    }, 1000);
}

const squarePromise = n => new Promise((resolve, reject) => {
    square(n, data => resolve(data));
})

const plus2Promise = n => new Promise((resolve, reject) => {
    // plus2(n, data => resolve(data));
    reject("ups")
})

// squarePromise(2)
//     .then(n => plus2Promise(n))
//     .then(n => console.log(n))
//     ;

squarePromise(2)
    .then(n => plus2Promise(n))
    .then(d => console.log("d1", d), e => console.error("e1", e))
    .then(n => 100500)
    // .then((res,rej)=>rej("ups)"))
    .then(n => Promise.resolve(5))
    .then(n => console.log(n))
    .catch(console.error)
    // .then(()=>console.log("end"))
    ;

(async function () {
    console.log(-123);
    console.log(await squarePromise(3));
    throw "OMG";
}) ();


async function helloAsync(){
    return true;
}