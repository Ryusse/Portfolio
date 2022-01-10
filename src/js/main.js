import '../sass/main.scss'

const body = document.body,
  loaderContainer = document.querySelector('.loader-container'),
  header = document.querySelector('.header'),
  toggle = document.querySelector('.toggle'),
  menu = document.querySelector('.menu'),
  menuList = document.querySelector('.menu__list'),
  navbar = document.querySelector('.navbar'),
  marker = document.querySelector('.marker')

const indicator = (e) => {
  marker.style.left = e.offsetLeft + 'px'
  marker.style.width = e.offsetWidth + 'px'
}

const initLoader = () => {
  loaderContainer.style.opacity = 1
  setTimeout(function () {
    loaderContainer.style.opacity = 0
    loaderContainer.style.display = 'none'
  }, 1000)
}

window.addEventListener('load', () => {
  initLoader()
})

// When the mouse is being used
body.addEventListener('mousedown', () => {
  body.classList.add('using-mouse')
  marker.classList.add('using-mouse')
})

// Re-enable focus styling when Tab is pressed
body.addEventListener('keydown', (event) => {
  if (event.key === 'Tab') {
    body.classList.remove('using-mouse')
    marker.classList.add('using-mouse')
  }
})

window.onscroll = () => {
  if (window.scrollY > 100) {
    header.classList.add('scroll-active')
  } else {
    header.classList.remove('scroll-active')
  }
}

toggle.addEventListener('click', () => {
  toggle.classList.toggle('open')
  menu.classList.toggle('open')
  menuList.classList.add('open')
})

window.addEventListener('resize', function () {
  if (innerWidth > 900) {
    toggle.classList.remove('open')
    menu.classList.remove('open')
    menuList.classList.remove('open')
  }
})

// Marker navbar
Array.prototype.forEach.call(navbar.children, (link) => {
  link.addEventListener('click', (event) => {
    indicator(event.target)
  })
})

toggle.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    toggle.classList.remove('open')
    menu.classList.remove('open')
  }
})

menu.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    toggle.classList.remove('open')
    menu.classList.remove('open')
  }
})

Array.prototype.forEach.call(menuList.children, (link) => {
  link.addEventListener('click', () => {
    toggle.classList.remove('open')
    menu.classList.remove('open')
  })
})
