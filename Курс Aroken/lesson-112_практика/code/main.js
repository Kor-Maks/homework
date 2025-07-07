const open = document.querySelector('.modal__btn-open')
const mod = document.querySelector('.modal')
const body = document.body

// отдельная функция  для сокращения кода
const openModal = () => {
  mod.classList.add('open--active')
  body.classList.add('body--fixed')
}

const closeModal = () => {
  mod.classList.remove('open--active')
  body.classList.remove('body--fixed')
} 


open.addEventListener('click', openModal) 

mod.addEventListener('click', (event) => {
  const target = event.target // отдельная функция для сокращения кода
  if (target && target.classList.contains('modal') || target.classList.contains('modal__btn-close')) {
    closeModal()
  } 
})

document.addEventListener('keydown', event => {
  if (event.code === 'Escape' && mod.classList.contains('open--active')) {
    closeModal()
  }
})

