// function print(name,count){
//     console.log(`${name}이/가 ${count}개 있습니다.`);
// }
// print("사과",10);
// print("사과");

//매개변수 초기화

function print(name,count){
    if (!count) {
        count = 1;
    }
    console.log(`${name}이/가 ${count}개 있습니다.`);
}
print("사과",10);