// https://school.programmers.co.kr/learn/courses/30/lessons/12947
x = 12
solution(x)

function solution(x) {
    var answer = true;
    let x_string = x.toString();
    let total = 0;
    for (var i = 0; i < x_string.length; i++) {
        total += parseInt(x_string[i]);
    }
    if(x % total !== 0){
        answer = false;
    }
    console.log(answer);
    return answer;
}