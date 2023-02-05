const authModal = document.getElementById('auth-modal')
const loginBtn = document.querySelector('.login-btn')
const loginControl = document.getElementById('login-control')
const passwordControl = document.getElementById('password-control')
const openAuthBtn = document.getElementById('open-auth-btn')
const openCartBtn = document.getElementById('open-cart-btn')
const logoutBtn = document.getElementById('logout-btn')


passwordControl.setAttribute('type', 'password')
document.addEventListener('click', (e)=>{
    e.preventDefault()
    if (e.target.closest('.btn-primary')) {
        authModal.style.display = 'block'
            setTimeout(() => {
                authModal.classList.add('show')
            }, 50);
    }else if (e.target.closest('.close-btn')) {
        authModal.style.display = 'none'
        authModal.classList.remove('show')
    }
})

loginBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    loginControl.value = ''
    passwordControl.value = ''
    authModal.style.display = 'none'
    authModal.classList.remove('show')
    openAuthBtn.style.display = 'none'
    openCartBtn.classList.remove('d-none')
    logoutBtn.classList.remove('d-none')
})




