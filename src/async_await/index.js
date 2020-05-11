const doSomenthinAsync = () => {
    return new Promise((resolve, reject) => {
        (true) ? setTimeout(() => { resolve('Somenthing Async')}, 3000) : reject(new Error('Test Error'))
    });
}

const doSomenthing = async () => {
    const somenthing = await doSomenthinAsync();
    console.log(somenthing);
}

console.log('before');
doSomenthing();
console.log('after');

const anotherFunction = async () => {
    try {
        const somenthing = await doSomenthinAsync();
        console.log(somenthing);
    } catch(err) {
        console.log(err);
    }
};

console.log('before 2');
anotherFunction();
console.log('after 2');