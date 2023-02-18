// function* test() {
//   console.log(111);
//   const ipt1 = yield "111-输出";
//   console.log(222, ipt1);
//   const ipt2 = yield "222-输出";
//   console.log(333, ipt2);
//   const ipt3 = yield "333-输出";
//   console.log(444, ipt3);
// }

// var rtest = test();

// const res1 = rtest.next();
// console.log(res1);
// const res2 = rtest.next('aaa');
// console.log(res2);
// const res3 = rtest.next('bbb');
// console.log(res3, res3.done);
// const res4 = rtest.next('ccc');
// console.log(res4);


function *test1() {
    setTimeout(() => {
        console.log('111')
        rTest.next()
    }, 1000)
    yield
    setTimeout(() => {
        console.log('222')
        rTest.next()
    }, 1000)
    yield
    setTimeout(() => {
        console.log('333')
        rTest.next()
    }, 1000)
    yield
}
const rTest = test1()

rTest.next()