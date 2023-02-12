// 객체의 값이 null일 수 있을떄 오류를 발생시킨다.
const el = document.getElementById('status')
// el.textContent = 'Ready'

if (el) {
    el.textContent = 'Ready'
}
el!.textContent = 'Ready' // 강제 캐스팅

export default {}