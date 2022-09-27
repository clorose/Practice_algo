// https://school.programmers.co.kr/learn/courses/30/lessons/68935
n = 12
solution(n)

function solution(n) {
    n = n.toString(3).split('').reverse().join('');
    console.log(n);
    console.log(Number.parseInt(n, 3));
    return Number.parseInt(n, 3);
}