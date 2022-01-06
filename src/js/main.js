import '../sass/main.scss'

const body = document.body,
  header = document.querySelector('.header'),
  toggle = document.querySelector('.toggle'),
  menu = document.querySelector('.menu'),
  menuList = document.querySelector('.menu__list'),
  navbar = document.querySelector('.navbar'),
  marker = document.querySelector('.marker')

const classController = (method, tag, className) => {
  if (method === 'add') {
    return tag.classList.add(`${className}`)
  }
  if (method === 'remove') {
    return tag.classList.remove(`${className}`)
  }
  if (method === 'toggle') {
    return tag.classList.toggle(`${className}`)
  }
  return console.log('error on the method')
}

const indicator = (e) => {
  marker.style.left = e.offsetLeft + 'px'
  marker.style.width = e.offsetWidth + 'px'
}

// When the mouse is being used
body.addEventListener('mousedown', () => {
  classController('add', body, 'using-mouse')
  classController('add', marker, 'using-mouse')
})

// Re-enable focus styling when Tab is pressed
body.addEventListener('keydown', (event) => {
  if (event.key === 'Tab') {
    classController('remove', body, 'using-mouse')
    classController('add', marker, 'using-mouse')
  }
})

window.onscroll = () => {
  if (window.scrollY > 100) {
    classController('add', header, 'scroll-active')
  } else {
    classController('remove', header, 'scroll-active')
  }
}

toggle.addEventListener('click', () => {
  classController('toggle', toggle, 'open')
  classController('toggle', menu, 'open')
  classController('add', menuList, 'open')
})

window.addEventListener('resize', function () {
  if (innerWidth > 900) {
    classController('remove', toggle, 'open')
    classController('remove', menu, 'open')
    classController('remove', menuList, 'open')
  }
})

// Marker navbar
Array.prototype.forEach.call(navbar.children, (link) => {
  link.addEventListener('click', (event) => {
    indicator(event.target)
  })
})

//Close toggle when press escape
toggle.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    classController('remove', toggle, 'open')
    classController('remove', menu, 'open')
  }
})

//Close menu when press escape
menu.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    classController('remove', toggle, 'open')
    classController('remove', menu, 'open')
  }
})

Array.prototype.forEach.call(menuList.children, (link) => {
  link.addEventListener('click', () => {
    classController('remove', toggle, 'open')
    classController('remove', menu, 'open')
  })
})
