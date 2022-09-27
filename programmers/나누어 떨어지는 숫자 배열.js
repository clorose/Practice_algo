// https://school.programmers.co.kr/learn/courses/30/lessons/12910

function solution(arr, divisor) {
    arr.sort(function compare(a, b) {
        return a - b;
    });
    var answer = [];
    for (var i = 0; i < arr.length; i++) {
        if(arr[i]%divisor === 0){
            answer.push(arr[i])
        }
    }if (answer == ""){
        answer.push(-1)
    }
    //console.log(answer)
    return answer;
}

solution([5,9,7,10],5);

// filter 기능을 사용한 문제 풀이
/*/
function solution(arr, divisor) {
    var answer = arr.filter(v => v%divisor == 0);
    return answer.length == 0 ? [-1] : answer.sort((a,b) => a-b);
}
//*/