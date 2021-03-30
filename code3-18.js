const repl = require("repl");

repl.start({
    prompt:"숫자를 입력하세요> ",
    eval: (commend,context,filename,callback) => {
        let number = Number(commend);
        if (isNaN(number)){
            console.log("숫자가 아닙니다.");
        } else {
            console.log(number+" 입니다.");
        }
        callback();
    }
})