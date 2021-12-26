const toggle = document.querySelector('.toggle')
const menu = document.querySelector('.menu')
const body = document.body

toggle.addEventListener('click', () => {
  toggle.classList.toggle('open')
  menu.classList.toggle('open')
  body.classList.toggle('overflow-hidden')
})
