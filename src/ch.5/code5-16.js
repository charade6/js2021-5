// 타이머 함수
let foo = setInterval(()=>{
    console.log("인터벌 1초경과");
}, 1000)

setTimeout(()=>{
    clearInterval(foo);
}, 3000)
