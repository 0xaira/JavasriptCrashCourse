const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 1 resolved');
    }, 5000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 2 resolved');
    }, 15000);
});

async function handlePromises() {
    console.log('Start');

    const res1 = await p1;
    console.log(res1);

    const res2 = await p2;
    console.log(res2);
}
handlePromises();