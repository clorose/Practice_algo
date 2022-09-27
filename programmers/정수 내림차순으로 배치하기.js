// https://school.programmers.co.kr/learn/courses/30/lessons/12933
n = 118372
solution(n)

function solution(n) {
    return Number(n.toString().split('').sort((a,b)=>b-a).join(''));
}