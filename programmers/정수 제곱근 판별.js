// https://school.programmers.co.kr/learn/courses/30/lessons/12934
n = 15
solution(n)

function solution(n) {
    root_n = Math.sqrt(n);
    if (root_n % 1 === 0) {
        console.log((root_n+1)*(root_n+1));
        return (root_n+1) * (root_n+1);
    }else{
        return -1;
    }
}