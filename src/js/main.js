import '../sass/main.scss'

const body = document.body,
  header = document.querySelector('.header'),
  toggle = document.querySelector('.toggle'),
  menu = document.querySelector('.menu'),
  menuList = document.querySelector('.menu__list'),
  menuLink = document.querySelector('.menu__link'),
  navbar = document.querySelector('.navbar'),
  navbarLink = document.querySelector('.navbar__link'),
  marker = document.querySelector('.marker')

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

  // body.classList.toggle('overflow-hidden')
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

// Let the document know when the mouse is being used
body.addEventListener('mousedown', () => {
  body.classList.add('using-mouse')
  marker.classList.add('using-mouse')
})

// Re-enable focus styling when Tab is pressed
body.addEventListener('keydown', (event) => {
  if (event.key === 'Tab') {
    body.classList.remove('using-mouse')
    marker.classList.remove('using-mouse')
  }
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

menuLink.addEventListener('click', () => {
  toggle.classList.remove('open')
  menu.classList.remove('open')
})

const indicator = (e) => {
  marker.style.left = e.offsetLeft + 'px'
  marker.style.width = e.offsetWidth + 'px'
}
