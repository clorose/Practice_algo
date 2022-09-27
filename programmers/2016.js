// https://school.programmers.co.kr/learn/courses/30/lessons/12901
function solution(a, b) {
    // day.toDateString() = Tue May 24 2016
    let day= new Date('2016',a-1,b).toDateString().slice(0,3).toUpperCase();
    return day;
}