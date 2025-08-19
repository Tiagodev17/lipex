let darkmode = localStorage.getItem('darkmode')
const botao = document.getElementById('temaBotao')

const enabledarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}
const disabledarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode',null)
}
if(darkmode === 'active') enabledarkmode()
botao.addEventListener("click",() => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enabledarkmode() : disabledarkmode()

})