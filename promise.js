var promise1 = new Promise((resolve, reject) => {
    completedPromise = true;
    if (completedPromise) {
        resolve('promise resolve');
    } else {
        reject('promise reject');
    }
   
    
});
var promise2 = new Promise((resolve, reject) => {
    completedPromise = true;
    if (completedPromise) {
        resolve('promise resolve2');
    } else {
        reject('promise reject2');
    }


});
// promise2.then((res) => {
//     console.log(res);
// });
// promise1
//     .then((res) => {
//     console.log(res);
//     })
// .catch ((rej) => {
//     console.log(rej);
// });

Promise.all([promise1, promise2])
    .then(([res1, res2]) => {
    console.log(res1,res2);
})

