const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() < 0.5){
            resolve('Hello World');
        } else {
            reject(new Error('Hello error'));
        }
    }, 2000);
});

myPromise
    .then(msg => msg.toUpperCase())
    .then(msg => console.log('Message', msg))
    .catch(err => console.log('error', err))
