// 콜백함수

function tenTimes(foo){
    for(let i=0; i<10; i++){
        foo();
    }
}

// tenTimes(function() {
//     console.log("함수 호출");
// });

tenTimes(() => {
    console.log("함수 호출");
});