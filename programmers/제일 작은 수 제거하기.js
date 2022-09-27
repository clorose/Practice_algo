// https://school.programmers.co.kr/learn/courses/30/lessons/12935
arr = [10, 3, 1];
solution(arr);

function solution(arr) {
    if(arr.length <=1){
        console.log([-1]);
        return [-1];
    }
    let index = arr.indexOf(Math.min(...arr));
    arr.splice(index, 1);
    console.log(arr);
    return arr;
}