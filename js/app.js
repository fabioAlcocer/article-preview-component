const shareBtn = document.querySelector('.footer__icon-share')
const footerVisible = document.querySelector('.card__footer.visible')
const footerInvisible = document.querySelector('.card__footer.d-none')
const shareBtnInvisible = document.querySelector('#btn-share')

shareBtn.addEventListener('click', () => {
  footerInvisible.classList.toggle('d-none')
  footerVisible.classList.toggle('d-none')
})

shareBtnInvisible.addEventListener('click', () => {
  footerInvisible.classList.toggle('d-none')
  footerVisible.classList.toggle('d-none')
})
