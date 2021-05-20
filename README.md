# 장지원 [201640133]
* 3주차 [03월16일 - js기초](https://github.com/charade6/js2021-5#03%EC%9B%9416%EC%9D%BC)</br>
* 4주차 [03월23일 - 자료형, 변수, 연산자, 상수, 조건문](https://github.com/charade6/js2021-5#03%EC%9B%9423%EC%9D%BC)</br>
* 5주차 [03월30일 - 조건문, 반복문](https://github.com/charade6/js2021-5#03%EC%9B%9430%EC%9D%BC)</br>
* 6주차 [04월06일 - 반복문, 배열함수](https://github.com/charade6/js2021-5#04%EC%9B%94-06%EC%9D%BC)</br>
* 7주차 [04월13일 - 함수](https://github.com/charade6/js2021-5#04%EC%9B%94-13%EC%9D%BC)</br>
* 9주차 [04월27일 - 함수, 객체](https://github.com/charade6/js2021-5#04%EC%9B%94-27%EC%9D%BC)</br>
* 10주차 [05월04일 - 표준 내장 객체](https://github.com/charade6/js2021-5#05%EC%9B%94-04%EC%9D%BC)</br>
* 11주차 [05월11일 - 표준 내장 객체, 예외처리](https://github.com/charade6/js2021-5#05%EC%9B%94-11%EC%9D%BC)</br>
* 12주차 [05월18일 - Node.js]()

## [05월 18일]
## 9. Node.js 기본
### 전역변수
* 문자열 자료형의 전역변수
```jsx
console.log(__filename);    // 현재 실행중인 파일경로 나타냄
console.log(__dirname);     // 현재 실행중인 폴더경로 나타냄
```
### process 객체의 속성
| 속성       | 설명                                    |
| :--------- | -------------------------------------: |
| env        |  컴퓨터 환경 정보 나타냄                 |
| version    |  Node.js 버전을 나타냄                  |
| versions   |  Node.js와 종속된 프로그램버전을 나타냄  |
| arch       |  프로세서 아키텍쳐를 나타냄              |
| platform   |  플랫폼을 나타냄                        |

### process 객체의 메소드
| 메소드                 | 설명                                   |
| :-------------------- | -------------------------------------: |
| exit([exitCode = 0])  |  프로그램을 종료합니다                   |
| memoryUsage()         |  메모리 사용 정보 객체를 리턴합니다       |
| uptime()              |  현재 프로그램이 실행된 시간을 리턴합니다  |

### 이벤트 연결 메서드
on(<이벤트이름>,<이벤트 핸들러>)
이벤트이름
exit
uncaughtException
```jsx
dasd
```
### os 모듈
```jsx
const foo = require('os'); // 모듈 추출

console.log(foo.hostname());  // 운영체제 호스트 이름 리턴 
console.log(foo.totalame());  // 시스템 총 메모리 리턴 
```
### url 모듈
```jsx
const foo = requrire('url');    // 모듈 추출

console.log(foo.parse("https://naver.com")); // url문자열을 객체로 변환 후 리턴 
```
### File System 모듈
#### 파일 읽기
동기식
* 파일크기가 크다면 파일을 읽고난후 코드가 정지할 가능성 있음
* 문제 해결위해 쓰레드 기능을 사용해야함
```jsx
const fs = require('fs');      // 모듈 추출
const fs = readFileSync("text.txt");   // 파일을 읽음

console.log(file);             // 파일 내용을 16진수로 출력 
console.log(file.toString());  // 파일 내용을 문자로 출력 

// 이렇게도 사용가능
console.log(fs.readFileSync('test.txt').toString());
```
비동기식
* 코드는 진행하고 Node.js의 뒷단에서 파일을 읽어 들이는 처리수행
* 뒷단에서 처리가 모두 끝나면, 그때 콜백함수부분 실행
* 콜백함수의 첫 번째 매개변수는 오류객체이고 두번째 매개변수가 원하는값임
```jsx
const fs = require('fs');      // 모듈 추출

const fs = readFile("text.txt", (error, file) => {      // 파일을 읽음
    console.log(file);             // 파일 내용 출력 
    console.log(file.toString());  
});   
```
#### 파일 쓰기
동기식
```jsx
const fs = require("fs");   // 모듈 추출

fs.writeFileSync("text.txt", "안녕하세요");     // 파일 쓰기
```
비동기식
```jsx
const fs = require('fs');   // 모듈 추출

fs.writeFile('output.txt','안녕하세요',(error) =>{  // 파일 쓰기
console.log("파일 쓰기 완료");
});
```
#### 파일 예외처리
동기식
```jsx
const fs = require('fs');   // 모듈 추출

try{                        // 예외처리
const file1 =fs.readFileSync('none.txt');   //파일을 읽고 출력
console.log(file);
console.log(file.toString());
}catch(exception){          // 예외 발생시
    console.log("파일을 읽어 들이는데 문제가 발생했습니다");         // 출력
}
```
비동기식
```jsx
const fs = require('fs');       // 모듈 추출
fs.readFile('none.txt',(error,file)=>{      //파일을 읽고 출력
    if(error){              // 예외 발생시
        console.log("파일을 읽어 들이는데 문제가 발생했습니다");       // 출력
    }else{
    console.log(file);
    console.log(file.toString());
    }
})
```
### request 모듈
웹 요청을 쉽게 만들어주는 모듈
```jsx
npm install request     // 외부모듈이므로 npm으로 설치해야 사용가능
```
```jsx
const request = require('request');     // 모듈 추출

request("https://naver.com",(error,response, body)=>{   // request 모듈 사용
    console.log(body);
})
```
### cheerio 모듈
웹 페이지의 특정 위치에서 데이터추출하는 모듈
```jsx
npm install cheerio     // 외부모듈이므로 npm으로 설치해야 사용가능
```
```jsx
const request1 = require('request');        // 모듈 추출
const cheerio = require('cheerio');
request1("https://naver.com",(error,response, body)=>{
    const $ = cheerio.load(body);
    console.log($("strong.new").text());        // strong.new 데이터 추출후 출력
})
```
### async 모듈
```jsx
npm install async     // 외부모듈이므로 npm으로 설치해야 사용가능
```
복잡한 비동기코드
```jsx
const fs = require('fs');   // 모듈 추출

fs.readFile('fileA.txt', (error, fileA) => {
    fs.readFile('fileB.txt', (error, fileB) =>  {
        fs.readFile('fileC.txt', (error, fileC) => {
            console.log(fileA);
            console.log(fileB);
            console.log(fileC);
        });
    });
})
```
parallel() 메소드 사용
```jsx
const fs = require('fs');   // 모듈 추출
const async = require('async');

async.parallel({
    fileA: (callback) => {
        fs.readFile('fileA.txt', callback);
    },
    fileB: (callback) => {
        fs.readFile('fileB.txt', callback);
    },
    fileC: (callback) => {
        fs.readFile('fileC.txt', callback);
    }
}, (error, results) => {
    console.log(results.fileA);
    console.log(results.fileB);
    console.log(results.fileC);
})
```
***
## [05월 11일]
### Date 객체
| 생성자함수               | 설명                                                                 |
| :---------------------- | -------------------------------------------------------------------: |
| new Date()              |  현재시간으로 Date 객체 생성                                           |
| new Date(유닉스타임)     |  유닉스타임(1970.01.01.00:00:00 부터 경과한 밀리초)으로 Date 객체 생성)  |
| new Date(시간문자열)     |  문자열로 Date 객체 생성                                               |
| new Date(<년>,<월-1>,<일>,<시간>,<분>,<초>,<밀리초>)    |  시간요소를 기반으로 Date 객체 생성       |
* Month는 0부터 시작

```jsx
// 시간간격 구하기
let now = new Date();
let before = new Date('Dec 9, 2020');

let interval = now.getTime() - before.getTime();    // 현재시간 - 기준시간
interval = Math.floor(interval / (1000 * 60 * 60 * 24))
console.log(interval+"일이 지났다");    // 153일이 지났다 출력
```
### Array 객체
#### 기본 메소드
사용법은 [4월 13일] 배열함수 [참조](https://github.com/charade6/js2021-5#%EB%B0%B0%EC%97%B4-%ED%95%A8%EC%88%98)
1. push : 배열의 끝에 원하는 값을 추가하는 함수

2. pop : 배열의 마지막 주소에 있는 값을 제거해주는 함수

3. shift : 배열의 첫번째 주소에 있는값을 제거한 후에 반환해주는 함수

4. concat : 두개의 배열을 합쳐주는 함수

5. reverse : 배열을 역순으로 재배치

6. sort : ASCII코드 순서로 배열을 정렬

7. slice : 배열에서 특정항목을 카피하여 추출

8. splice : 배열에서 특정항목을 제거하거나 교체할때 사용 

9. join : 배열값들 사이에 원하는 문자를 삽입하여 변환

```jsx
let foo = [10, 3, 4, 20];   //기본 배열 
let foo = [
    {
        key: value,
        name: '고구마',
        price: 1000
    },
    {
        name: '감자',
        price: 500
    },
    {
        name: '바나나',
        price: 1500
    },
    {}]; // json스타일 배열
```
* ECAMAScript5에서 추가된 메소드

| 메소드       | 설명                                            |
| :----------- | ---------------------------------------------: |
| forEach()    |  배열의 인덱스, 아이템 값 둘다 추출               |
| map()        |  아이템 값만 추출하여 배열생성                    |
| filter()     |  조건에 해당하는 값만 추출하여 배열생성            |

1. forEach()
```jsx
let foo = [55, 65, 400, 150];                   // 0 - 55
                                                // 1 - 65
foo.forEach((item, index) => {                  // 2 - 400
    console.log(`${index} - ${item}`);          // 3 - 150
});                                             // 출력
```
2. map()
```jsx
let foo = [55, 65, 400, 150];

let bar = foo.map((item, index) => {
    return item + 10;                           // [65, 75, 410, 160] 출력
});
console.log(bar);
```
3. filter()
```jsx
let foo = [11, 22, 33, 44];

let foobar = foo.filter((item, index) => {
    return item % 2 == 0;                       // 홀수인 [55,65] 출력
});
console.log(foobar);
```
### underscore.js 사용하기

[underscorejs.org](https://underscorejs.org/)
### JSON 객체
- 문자열은 큰따옴표로 만듬
- 모든 키는 큰따옴표로 감싸야함
- 숫자, 문자열, 불 자료형만 사용할 수 있음
#### JSON 객체의 메소드
| 메소드                                            | 설명                            |
| :----------------------------------------------- | -------------------------------: |
| JSON.stringify (<객체>, <변환함수>, <공백개수>)    |  자바스크립트 객체 -> 문자열       |
| JSON.parse (<문자열>)                             |  문자열 -> 자바스크립트 객체       |

## 8.예외처리
### 고급 예외 처리
**try catch 구문**
```jsx
try{
	//예외 발생시
} catch (exception){
	//여기서 처리
}
```
**try finally 구문**
```jsx
try{
    // 예외 발생시
}finally{
	// 무조건 실행
}
```
### 예외 강제발생
**throw 키워드**
```jsx
throw '강제 예외';
```
```jsx
const error = new Error('메세지');
error.name = '내 마음대로 오류';
error.message = '오류의 메세지';

throw error;        // 예외 발생
```
***

## [05월 04일]
### 프로토타입
모든 함수가 가지고 있는 속성으로 해당 함수를 생성자 함수로 사용했을 때만 의미가 있음
```jsx
function Product(name, price){
    this.name = name;
    this.price = price;
}

Product.prototype.print = function () {     // 프로토타입에 메소드를 선언
    console.log(`${this.name}의 가격은 ${this.price}원입니다.`);    
}

let product = new Product("바나나", 1200);  // 객체를 생성

console.log(product);
product.print();        // 메소드 호출
```
#### null값과 자료형
* null은 null값을 가진 객체(object)임
* 자바스크립트에서 아예 존재하지 않는다고 인식하는값은 undefined와 null뿐임
## 7.표준내장객체
### 기본 자료형과 객체 자료형의 차이
기본 자료형: 숫자, 문자열, 불
```jsx
let foo = false;
let bar = 123;

console.log(typeof foo);    //boolean
console.log(typeof bar);    //number
```
객체 숫자, 문자열, 불
```jsx
let number = new Number(273);
let string = new String("안녕");

console.log(typeof number); //object
console.log(typeof string); //object
```
기본 자료형은 객체가 아니므로 속성과 메소드를 추가할 수 없음</br>
→ 프로토타입으로 바꾸면 가능
```jsx
let foo = 273;

Number.prototype.method = function () {     //메소드 추가
    return "hello"
}
console.log(foo.method());
```
### Number 객체
Number객체는 숫자를 표현할때 사용

| 메소드            | 설명                                                                 |
| :--------------- | -------------------------------------------------------------------: |
| toExponential()  |  숫자를 지수 표시로 나타낸 문자열을 리턴                                 |
| toFixed()        |  숫자를 고정소수점 표시로 나타낸 문자열을 리턴                           |
| toPrecision()    |  숫자를 길이에 따라 지수 표시 또는 고정소수점 표시로 나타낸 문자열을 리턴  |

생성자함수에 속성과 메소드 추가
```jsx
function Constructor() { }      // 생성자 함수 생성
Constructor.foo = 273;
Constructor.bar = function () {};

console.log(Constructor.foo);       //생성자함수의 속성
console.log(Constructor.bar);       //생성자함수의 메서드 출력
```
Number 생성자 함수의 속성
| 속성                | 설명                                  |
| :------------------ | -----------------------------------: |
| MAX_VALUE           |  자바스크립트가 나타낼수있는 최대숫자   |
| MIN_VALUE           |  자바스크립트가 나타낼수있는 최소숫자   |
| NaN                 |  자바스크립트로 나타낼수없는 숫자       |
| POSITIVE_INFINITY   |  양의 무한대 숫자                     |
| NEGATIVE_INFINITY   |  음의 무한대 숫자                     |
### String 객체
```jsx
let foo = "abcdefg";
let bar = foo.toUpperCase();
console.log(foo);       // abcdefg
console.log(bar);       // ABCDEFG
```
**String 객체의 메소드들은 원본데이터를 변형시키지않는다</br> 변형된데이터를 리턴시켜줌**
```jsx
let foo ="좋은 아침입니다.";

if(foo.indexOf('아침') >= 0){
	console.log("굿모닝");
}else{
	console.log("굿나잇");
}
```
***

## [04월 27일]
### 표준 내장함수
* clearInterval - setInterval 사용하였을때 사용하여 횟수제한
```jsx
let foo = setInterval(()=>{
    console.log("인터벌 1초경과");
}, 1000)

setTimeout(()=>{
    clearInterval(foo);
}, 3000)    // 3초후 종료
```
### 익명함수와 화살표함수의 차이
함수 내부에서 가지는 this
* 익명함수 - 전역적으로 사용
* 화살표함수 - 지역적으로 사용
## 6.객체
### 기본
```jsx
//객체선언
let foo = {
    제품명: "건조 망고",
    유형: "당절임",
    원산지: "필리핀",
    price: 1200
};

console.log(foo.price);
```
키는 영어로 적는게 좋음
### 반복문
생성한 객체에 for in 반복문 사용가능
```jsx
let foo = {
    제품명: "건조 망고",
    유형: "당절임",
    원산지: "필리핀",
    price: 1200
};

for (let key in foo){
    console.log(`${key}: ${foo[key]}`);
}
```
### 메소드
메소드: 객체의 속성중 자료형이 함수인 속성
```jsx
let foo = {
    제품명: "건조 망고",
    price: 1200,
    print: function(){
        console.log(`${this.name} - ${this.price}`);
    }
};

foo.print();
```
**※ 자바스크립트에서는 this 키워드를 사용하지않으면 오류발생 </br>
※ 화살표 함수를 사용하여 메소드를만들면 'undefined'출력됨**
### 생성자 함수
생성자함수 : 객체를 만드는 함수 대문자로 시작
```jsx
function Product(foo, bar){
	this.foo1 = foo;
	this.ber1 = bar;
}

let product = new Product("바나나:,1200");  // new 키워드로 객체 생성

console.log(product);
```

***

## [04월 13일]
## 5.함수
### 익명함수
```jsx
function 함수이름(){

}
```
### 선언적함수
```jsx
let 변수이름 = function 함수이름(){

}
```
### 화살표함수
```jsx
let 변수이름 = () => {

}
```
### 함수의 기본형태
```jsx
function 함수이름(매개변수){
    함수코드;
    return 리턴값;
}
```
- 리턴 없는 함수<br>
```jsx
function print(message){
    console.log(`"${message})"라고 말했습니다.`);
}
print("안녕하세요");
//안녕하세요라고 말했습니다.    -출력
```
### 함수 활용
```jsx
function (매개변수,매개변수){
    let output = 초깃값;
    output 계산;
    return output;
}
```
### 콜백함수
함수의 매개변수로 전달되는 함수<br>
```jsx
function tenTimes(foo){
    for(let i=0; i<10; i++){
        foo();
    }
}
```
### 표준 내장함수
자바스크립트에서 기본적으로 지원하는 함수
* 숫자 변환 함수 <br>

| 함수          | 설명                  |
| :------------ | -------------------: |
| parseInt()    |  문자열을 정수로 변환  |
| parseFloat    |  문자열을 실수로 변환  |
<br>

* 타이머 함수   code5-16<br>

| 함수                   | 설명                       |
| :-------------------- | -------------------------: |
| setTimeout(함수,시간)  |  특정 시간 후에 함수를 실행  |
| setInterval(함수,시간) |  특정 시간마다 함수를 실행   |
***
## [04월 06일]
#### 중첩 반복문
```jsx
for(let i=0; i<반복횟수; i++) {
    for(let i=0; i<반복횟수; i++) {
    문장;
    }
}
```
별 피라미드
code4-7.js, code4-8.js

#### break 키워드
switch 조건문이나 반복문을 벗어날 때 사용
```jsx
while (true) {
    문장;
    break;
}
```
#### continue 키워드
반복문 내부에서 현재반복을 멈추고 다음반복 진행
```jsx
for(let i=1;i<10;i++){
    if(i%2==0){
        continue;
    }
    console.log(i); //1,3,5,7,9 출력
}
```
- 스코프(=블록)
- var키워드 - 익스플로러에서 사용
#### 배열 함수
```jsx
let foo = new Array();  
foo = [1, 10, 오랜지]   //배열 선언 및 초기화
let bar = [1, 10, 오랜지];  //배열 선언과 동시에 초기화
console.log(foo.length);    //배열의 길이
```
1. push : 배열의 끝에 원하는 값을 추가하는 함수
```jsx
let foo=[1,3,5,7,9];
let bar=[0];
foo.push("자료구조", 1, 0.5);
bar.push(1, 2, 3);
console.log(foo);   //[1,3,5,7,9,'자료구조',1,0.5]  출력
console.log(bar);   //[0,1,2,3] 출력
```
2. pop : 배열의 마지막 주소에 있는 값을 제거해주는 함수
```jsx
foo.pop();
console.log(foo);   //[1,3,5,7,9,'자료구조',1]  출력
```
3. shift : 배열의 첫번째 주소에 있는값을 제거한 후에 반환해주는 함수
```jsx
foo.shift();
console.log(foo);   //[3,5,7,9,'자료구조',1]    출력
```
* push와 pop을 이용하면 stack으로 이용할수 있다.
push와 shift를 이용하면 queue를 이용할수 있다.
4. concat : 두개의 배열을 합쳐주는 함수
```jsx
foo=foo.concat(bar);
console.log(foo);   //[3,5,7,9,'자료구조',1,0,1,2,3]    출력
foo=bar.concat(foo);
console.log(foo);   //[0,1,2,3,3,5,7,9,'자료구조',1,0,1,2,3]    출력
```
5. reverse : 배열을 역순으로 재배치
```jsx
foo.reverse();
console.log(foo);   //[3,2,1,0,1,'자료구조',9,7,5,3,3,2,1,0]
```
6. sort : ASCII코드 순서로 배열을 정렬
```jsx
foo.sort();
console.log(foo);   //[0,0,1,1,1,2,2,3,3,3,5,7,9,'자료구조']    출력
```
7. slice : 배열에서 특정항목을 카피하여 추출
+ slice(startNumber, endNumber)
```jsx
//
//정방향 인덱스 0   1   2   3   4   5
//===================================
//역방향 인덱스 -5  -4  -3  -2  -1
foo=[1,2,3,4,5,6];
console.log(foo.slice(1,5));    //[2,3,4,5] 출력
console.log(foo);   //[1,2,3,4,5,6]

//인덱스 5는 범위의 마지막이기 때문에 포함되지않음
```

8. splice : 배열에서 특정항목을 제거하거나 교체할때 사용 
+ splice(index, deleteCount, addItem1, addItem2, ...)
```jsx
bar=foo.splice(2,2,100,"문자");  //foo의 인덱스2부터 2개의 요소를 bar에 넣고 그 자리에 100,'문자'추가
console.log(foo);   //[1,2,100,'문자',5,6]
console.log(bar);   //[3,4]
```

9. join : 배열값들 사이에 원하는 문자를 삽입하여 변환
```jsx
foo=[0,1,2,3,4,5];
foo=foo.join("/");
console.log(foo);   // 0/1/2/3/4/5  출력
```
***
## [03월30일]
#### 중첩 조건문
```jsx
if (조건식) {
    if (조건식) {
        문장;
    } else {
        문장;
    }
} else (조건식) {
    if (조건식) {
        문장;
    } else {
        문장;
    }
}
```
#### if else if 조건문
```jsx
if (조건식) {
    문장;
} else if (조건식) {
    문장;
} else if (조건식) {
    문장;
} else {
    문장;
}
```
중복되지 않는 세가지 이상의 조건을 구분할 때 사용

* 논리연산자와 조건문
ex)학점이 4.0과 4.5사이인경우
```jsx
if (4.0 <score && score<4.5)
```
#### switch 조건문
```jsx
switch (비교할 값) {
    case 값1:
        문장;
        break;
    case 값2:
        문장;
        break;
    default:
        문장;
        break;
}
```
if는 범위를 표현할때 사용
case는 프로그램의 메뉴나 다수의 값에 대해서 다르게 작업을 해야할 경우 사용

#### 삼항 연산자
><조건식> ? <참> : <거짓>

ex)
```jsx
let number = 31;
console.log(number%2==0 ? "짝수":"홀수"); //홀수 출력
```
#### 짧은 초기화 조건문
A||B
||.연산자를 불이아닌 자료에 사용할때
A||B A가 참이면 A로 대치, A가 거짓이면 B로 대치

ex)
```jsx
let test; //변수선언
test = test || "초기화!"
console.log(test);
'초기화!' // 변수test가 undefined이므로 초기화! 출력
```
## 4.반복문
### 배열
>let 이름 = [자료, 자료, 자료, 자료, 자료]<br>
여러 자료형이 섞여있을 수 있음

### while 반복문
```jsx
while(조건식) {
    조건식이 참인 동안 실행문장;
}
```
* 무한반복
```jsx
while(true) {
    console.log("무한반복");
}
```
### for 반복문
```jsx
for(let i=0; i<반복횟수; i++) {
    문장;
}
```
반복횟수가 정해지지 않았을때(ex.입력문) while문 사용
반복횟수가 정해져있을때(ex.구구단) for문 사용

#### for in 반복문, for of 반복문
```jsx
for (let 인덱스 in 배열){

}

for (let 요소 in 배열) {

}
```
index번호(i값)이 필요할때 for in 사용
index번호 필요없을때 for of 사용
***
## [03월23일]
### 문자열
* 이스케이프 문자
따옴표를 문자그대로 사용가능
```
\t  --- 수평탭
\n  --- 줄바꿈
\'  --- 작은따옴표
\"  --- 큰따옴표
\\  --- 역슬래시
```
* 문자선택
"문자열"[숫자];
```jsx
console.log("hello world!"[4]);
o   /출력

let a ="hello world!";
a[4];
'o' /출력
```
 ### 불
 ture, false
 * 비교 연산자
 ```
 ==
 !=
 >
 <
 >=
 <=
 ```
 * 논리 연산자
 ```
 !  --- 논리부정(not)
 || --- 논리합(or)
 && --- 논리곱(and)
 ```
### 변수
변수선언
>let 식별자;
### 복합 대입 연산자
```
+=
-=
*=
/=
```
### 증감 연산자
```j
변수++      문장실행 후 변수값+1
++변수      문장실행 전 변수값+1
변수--      문장실행 후 변수값-1
--변수      문장실행 전 변수값-1
```
### 자료형 확인 연산자
typeof  --- 해당 변수의 자료형 추출
자바스크립트 자료형 종류
* string
* number
* boolean
* function
* object
* undefined --- 변수를 선언했으나 초기화하지 않은 자료형
### 강제 자료형 변환
* Number()
숫자로 자료형 변환
**NaN** - 숫자로 변환할 수 없는 문자열을 변환할때 출력
* String()
* Boolean()
### 자동  자료형 변환
1. **숫자와 문자열 자료형 자동변환**
숫자와 문자열에 '+' 연산자 적용하면 자동으로 숫자가 문자열로 변환
ex)`console.log("52"+273);`
52273   // 출력
2. **불 자료형 자동변환**
'!'연산자를 두 번 사용해 Boolean()함수 사용하는것과 같은 효과
ex)`console.log(!!0);`
### 일치 연산자
>===    자료형과 값이 같은지 비교<br />
>!==    자료형과 값이 다른지 비교
### 상수
* 상수 : 항상 같은수
상수선언
>const 상수이름 = 상수값;
## 3.조건문
### if 조건문
```
if (조건식){

}
```
조건식이 true일때 문장실행
### if else 조건문
 ```jsx
 if (조건식){
     // 조건식이 참일 때
 } else {
     // 조건식이 거짓일 때
 }
 ```
***
## [03월16일]
> 오늘 배운 내용 요약 <br />
> 여러줄요약<br>
> 3번

### 자바스크립트로 할 수 있는 일
* 웹 클라이언트 애플리케이션 개발
* 웹 서버 개발
* 모바일 애플리케이션 개발
* 데스크톱 애플리케이션 개발
* 게임 개발
* 데이터베이스 관리

### 기본 실습 방법
[new file] - .js 파일 생성
console.log("Hello world...!");
Node.js로 js파일 실행
```jsx
Hello world..! //출력
```

### REPL
명령 프롬프트에서 node입력
```jsx
>console.log("Hello world...!");
Hello world...! //출력
```
Ctrl+C * 2 or Ctrl+D 로 exit 가능

### 웹 브라우저 실습 방법
[new file] - .html 파일 생성
```jsx
<head>
    <title></title>
    <script>
        alert("Hello world...!");
    </script>
</head>

팝업창으로 Hello world...! //출력
```
```jsx
<head>
    <title></title>
    <script>
        console.log("Hello world...!");
    </script>
</head>

콘솔창으로 Hello world...! //출력
```
자바스크립트 코드는 보통 title 아래에 선언하지만
JQuery같은 용량큰것들은 body 바로위에 선언하는 경우도 있음

### 식별자
이름을 붙일 때 사용하는 단어, 변수와 함수 이름 등으로 사용
* 키워드 사용X
* 특수문자는 _ 와 $ 가능
* 숫자로시작 X
* 공백 입력 불가

식별자 사용 규칙
* 생성자 함수의 이름은 항상 대문자
* 변수, 함수, 속성, 메소드 이름은 항상 소문자
* 여러 단어로 된 식별자는 각 단어의 첫 글자를 대문자로

### 주석
```jsx
// 주석
/*
    주석
    주석
*/
```

### 출력
```jsx
consol.log("문자열");
```
