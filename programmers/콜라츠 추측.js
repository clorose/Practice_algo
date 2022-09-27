// https://school.programmers.co.kr/learn/courses/30/lessons/12943
num = 16
solution(num)

function solution(num) {
    let answer = 0;
    if (num === 1){
        console.log("0");
        return 0;
    }
    do{
        if(num%2===0){
            num = num/2;
        }else if(num%2===1){
            num = (num*3)+1;
        }
        if(answer === 500){
            return -1;
        }
        answer = answer + 1;
    }while(num !== 1)
    console.log(answer);
    return answer;
}