// 04~06 타입스크립트는 코드의 의도가 무엇인지 타입 구문을 통해 알려줄 수 있다.
const states = [
    { name: 'Alabama', capital: 'Montgomery' },
    { name: 'Alaska', capital: 'Juneau' },
    { name: 'Arizona', capital: 'Phoenix' },
    // ...
]

for (const state of states) {
    console.log(state.capitol)
}

export default {}