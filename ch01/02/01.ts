// 01~03
// 타입을 지정해주지 않으면 암묵적으로 any타입을 갖게 되며,
// tsconfig의 설정이 아래와 같다면 타입 오류를 발생시키지 않는다.
// tsConfig: {"noImplicitAny": false, "strictNullChecks": false}
function add(a, b) {
    return a + b
}

add(10, null)

export default {}