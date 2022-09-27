// https://school.programmers.co.kr/learn/courses/30/lessons/12930

s = "try hello world"
solution(s)

function solution(s) {
    let arr = s.split(" ")
    let answer = '';
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (j % 2 === 0) {
                answer += arr[i][j].toUpperCase();
            }else{
                answer += arr[i][j].toLowerCase();
            }
        }
        if (i < arr.length - 1) {
            answer = answer + " ";
        }
    }
    console.log(answer);
    return answer;
}

// 정규식을 사용한 문제 풀이

// function toWeirdCase(s){
//   //함수를 완성해주세요
//   return s.toUpperCase().replace(/(\w)(\w)/g, function(a){return a[0].toUpperCase()+a[1].toLowerCase();})

// }
