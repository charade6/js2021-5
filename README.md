# 장지원 [201640133]
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
```
Hello world..! //출력
```

### REPL
명령 프롬프트에서 node입력
```
>console.log("Hello world...!");
Hello world...! //출력
```
Ctrl+C * 2 or Ctrl+D 로 exit 가능

### 웹 브라우저 실습 방법
[new file] - .html 파일 생성
```
<head>
    <title></title>
    <script>
        alert("Hello world...!");
    </script>
</head>

팝업창으로 Hello world...! //출력
```
```
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
```
// 주석
/*
    주석
    주석
*/
```

### 출력
```
consol.log("문자열");
```