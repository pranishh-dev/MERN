function createCounter(){
    let countPlus = 1;
    function count(){
        console.log(countPlus);
        countPlus++;
    }
    return count;
}
let counter1 = createCounter();
counter1()
counter1()

let counter2 = createCounter()
counter2()
counter2()
counter2()
counter2()