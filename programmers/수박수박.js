// https://school.programmers.co.kr/learn/courses/30/lessons/12922?language=javascript
solution(3)

function solution(n) {
    var answer = '';

    for (var i = 1; i <= n; i++) {
        if(i%2 == 0){
            answer +='박';
        }else{
            answer +='수';
        }
    }
    console.log(answer);
    return answer;
}

/*
const waterMelon = n => {
    return '수박'.repeat(n/2) + (n%2 === 1 ? '수' : '');
}

// 실행을 위한 테스트코드입니다.
console.log("n이 3인 경우: "+ waterMelon(3))
console.log("n이 4인 경우: "+ waterMelon(4))
//*/