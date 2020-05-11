const somenthingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('heyy!');
        } else {
            reject('Whoops');
        }
    });
};

somenthingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.log(err));

const somenthingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('Heeyyy!')            
            }, 2500)
        } else {
            const error = new Error('Whoops');
            reject(error);
        }
    });
};

somenthingWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.log(err));


Promise.all([somenthingWillHappen, somenthingWillHappen2])
    .then(response => console.log(response))
    .catch( err => console.log(err));