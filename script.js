const menu = document.getElementById('menu')
const close = document.getElementById('close')
const responsiveNav = document.getElementById('responsive-nav')
const modalShow = document.querySelectorAll('.modal-show')
const modal = document.getElementById('modal')
const modalContent = document.getElementById('modal-content')
const closeModal = document.getElementById('close-modal')
var x = window.matchMedia("(max-width: 800px)")
const form = document.getElementsByTagName('form')
const input = document.getElementsByTagName('input')

menu.onclick = () => {
  menu.style.display = 'none'
  close.style.display = 'block'
  responsiveNav.style.display = 'flex'
}

close.onclick = () => {
  menu.style.display = 'block'
  close.style.display = 'none'
  responsiveNav.style.display = 'none'
}

modalShow.forEach((link) => {
  link.addEventListener('click', () => {
    modal.style.display = 'flex'
  })
})

closeModal.addEventListener('click', () => {
  modal.style.display = 'none'
})

if (x.matches) {
  modalShow.forEach((link) => {
    link.addEventListener('click', () => {
      responsiveNav.style.display = 'none'
      menu.style.display = 'block'
      close.style.display = 'none'
    })
  })
}