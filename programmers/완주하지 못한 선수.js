let participants = ["leo", "kiki", "eden"];
let completion = ["eden", "kiki"];



solution(participants, completion);
// 실패.
// 효율성  테스트
// 테스트 1 〉	실패 (시간 초과)
// 테스트 2 〉	실패 (시간 초과)
// 테스트 3 〉	실패 (시간 초과)
// 테스트 4 〉	실패 (시간 초과)
// 테스트 5 〉	실패 (시간 초과)
/*
function solution(participant, completion) {
    var answer = participant;
    for (var i = 0; i < completion.length; i++) {
        var index = participant.indexOf(completion[i]);
        if (index > -1) {
            answer.splice(index, 1);
        }
    }
    answer = answer[0];
    return answer;
}
//*/

A = ["leo", "kiki", "eden"];
B = ["eden", "kiki"];

solution(A,B);

function solution(participant, completion) {
    participant.sort();
    completion.sort();

    for (var i = 0; i < participant.length; i++) {
        if (participant[i] !== completion[i]) {
            return participant[i];
        }
    }
}

// # Hash 함수 써보기