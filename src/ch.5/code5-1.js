// 5장 익명함수

let foo = function(){
    console.log("첫째줄");
    console.log("둘째줄");
};

foo();
console.log(foo);

// 선언적 함수
function bar(){
    console.log("첫째줄");
    console.log("둘째줄");
};

bar();
console.log(bar);

// 화살표 함수
let foobar = () => {
    console.log("첫째줄");
    console.log("둘째줄");
}
foobar()
console.log(foobar);