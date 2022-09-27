// https://school.programmers.co.kr/learn/courses/30/lessons/12931
solution(123)
function solution(n){
    var answer = 0;
    n = n.toString();
    for (var i = 0; i < n.length; i++) {
        answer += parseInt(n[i]);
    }
    console.log(answer);
    return answer;
}

/*
function solution(n){
    // 쉬운방법
    return (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0)
}
//*/