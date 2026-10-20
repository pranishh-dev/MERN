//.all() all in or nth 
// if all resolve ok, if any rejected all() reject
// .all acpts array of promises
function f1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("func1")
        }, 3000);
    })
}
function f2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("func2")
        }, 4000);
    })
}
function f3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("func3")
        }, 2000);
    })

}

let arrPromise = [f1(), f2(), f3()]

// let res = Promise.all(arrPromise) //returns a array
// let res = Promise.allSettled(arrPromise) //farak nahi parta ki fulfill ya reject sirf settle hona chhahiye
let res = Promise.race(arrPromise) //race me jo jita wo output settle hone me
// let res = Promise.any(arrPromise) //race me jo jita wo output fulfill hone me
// let res = Promise.all([f1(),f2(),f3()])

// console.log(res);
// console.log(f1(), f2(), f3());

res.then((data) => {
    console.log(data);
})
    .catch((err) =>
        console.log(err))