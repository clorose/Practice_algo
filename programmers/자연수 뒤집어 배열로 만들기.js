// https://school.programmers.co.kr/learn/courses/30/lessons/12932
n = 12345
solution(n)

function solution(n) {
    let answer = [];
    do {
        answer.push(n%10)
        n = parseInt(n / 10)
    } while (n > 0);
    console.log(answer);
    return answer;
}