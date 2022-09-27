// https://school.programmers.co.kr/learn/courses/30/lessons/12948
solution('027778888')
function solution(phone_number) {
    console.log(phone_number);
    var answer = '';
    for(var i = 0; i<phone_number.length; i++){
        if (phone_number.length-4 > i) {
            answer += '*';
        }else{
            answer += phone_number[i];
        }
    }
    console.log(answer);
    return answer;
}