// 처음부터 noImplicitAny를 true로 설정하여 코드를 작성할 때 타입을 명시하도록 하는것이 좋다.
// 그러면 타입스크립트가 문제를 발견하기 수월해지며, 코드의 가독성이 좋아진다. 
function add(a: number, b: number) {
    return a + b
}

export default {}