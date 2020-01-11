const myPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() < 0.5){
            resolve('Hello World');
        } else {
            reject(new Error('Hello error'));
        }
    }, 1000);
});

async function asyncAwait() {
    try {
        const msg = await myPromise();
        console.log('message', msg)
    } catch (err) {
        console.log('error', err)
    }
}