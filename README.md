# 장지원 [201640133]
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

<hr>

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
### 반복문
#### 배열
>let 이름 = [자료, 자료, 자료, 자료, 자료]<br>
여러 자료형이 섞여있을 수 있음

#### while 반복문
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
#### for 반복문
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
<hr>

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
### 조건문
#### if 조건문
```
if (조건식){

}
```
조건식이 true일때 문장실행
#### if else 조건문
 ```jsx
 if (조건식){
     // 조건식이 참일 때
 } else {
     // 조건식이 거짓일 때
 }
 ```
<hr />

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
