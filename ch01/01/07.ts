// 타입스크립트는 어느것이 오타인지 판단하지 못하기 떄문에
// 따라서 명시적으로 인터페이스를 선언하여 사용하는것이 좋다.
interface State {
    name: string
    capital: string
}

const states: State[] = [
    { name: 'Alabama', capitol: 'Montgomery' },
    { name: 'Alaska', capitol: 'Juneau' },
    { name: 'Arizona', capitol: 'Phoenix' },
    // ...
]

for (const state of states) {
    console.log(state.capital)
}

export default {}