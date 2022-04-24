# 두 정수 사이의 합
두 정수 a, b 가 주어졌을 때 그 사이 값들의 합을 구하는 문제

### Initial Code

```
function solution(a, b) {
    var answer = 0;
    var A, B;

    if (a == b) {
        return a;
    } else if (a > b) {
        A=a;
        B=b;
    } else {
        A = b;
        B = a;
    }

    for(var i=B; i<=A; i++ ){
        answer = answer+i;
    }

    return answer;
}
```
