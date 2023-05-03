

const logoEagle = document.querySelector('.logoContainer__box')

const projectParentEl = document.querySelector('.projectContainer')
const projectBoxEl = document.querySelectorAll('.projectBox')


const personalInfoEl = document.querySelector('.personalInfo')
const projectFrontEndEl = document.querySelector('.project__frontEnd')

logoEagle.addEventListener('click', function () {
  // BOTTON CONTROL
  logoEagle.classList.toggle('active-light-orange')
  projectBoxEl.forEach(e => {
    e.classList.remove('active-dark-orange')

  })

  // MINI WINDOW CONTROL
  personalInfoEl.classList.toggle('hidden')
  projectFrontEndEl.classList.add('hidden')
})


projectParentEl.addEventListener('click', function (e) {
  const targetEl = e.target.closest('.projectBox')
  if (targetEl.dataset.project == 'frontend') {
    // BOTTON CONTROL
    // REMOVE OTHER
    logoEagle.classList.remove('active-light-orange')
    projectBoxEl.forEach(e => {
      e.classList.remove('active-dark-orange')

    })
    // TOGGLE TARGET
    targetEl.classList.toggle('active-dark-orange')


    // MINI WINDOW CONTROL
    projectFrontEndEl.classList.toggle('hidden')
    personalInfoEl.classList.add('hidden')
  }

  else if (targetEl.dataset.project == 'other') {
    // BOTTON CONTROL
    // REMOVE OTHER
    logoEagle.classList.remove('active-light-orange')
    projectBoxEl.forEach(e => {
      e.classList.remove('active-dark-orange')

    })
    // TOGGLE TARGET
    targetEl.classList.toggle('active-dark-orange')


    // MINI WINDOW CONTROL
    // projectFrontEndEl.classList.toggle('hidden')
    // personalInfoEl.classList.add('hidden')
  }
})