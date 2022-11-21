const run = () => {
  const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('p1 is resolved');
    }, 1000);
  });

  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('p2 is rejected');
    }, 1000);
  });

  const p3 = new Promise((resolve, reject) => {
    resolve('p3 is resolved ASAP');
  });

  const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('p4 is resolved at last');
    }, 3000);
  });

  //   Promise.all([p1, p3, p4])
  //     .then((res) => {
  //       console.log('[Promise.all] result on success:', res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

  Promise.customAll([p1, p3, p4])
    .then((res) => {
      console.log('[customAll] result on success:', res);
    })
    .catch((err) => {
      console.log(err);
    });
};

Promise.customAll = (promises) => {
  const promiseResultArr = [];
  let resolveCount = 0;
  const promiseAll = new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      promise
        .then((res) => {
          promiseResultArr[index] = res; // to ensure that order is maintained
          resolveCount++;

          if (resolveCount === promises.length) {
            resolve(promiseResultArr);
          }
        })
        .catch((err) => {
          reject(err); // reject is any promise fails
        });
    });
  });

  return promiseAll;
};

export default run;
