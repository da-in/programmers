function solution(a, b) {
    var answer = 0;
    var A, B;

    if (a == b) {
        return a;
    } else if (a > b) {
        A = a;
        B = b;
    } else {
        A = b;
        B = a;
    }

    for (var i = B; i <= A; i++) {
        answer = answer + i;
    }

    return answer;
}
