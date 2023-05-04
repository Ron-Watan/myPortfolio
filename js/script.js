
//Personal BTN
const logoEagle = document.querySelector('.logoContainer__box')

//Project BTN
const projectParentEl = document.querySelector('.projectContainer')
const projectBoxEl = document.querySelectorAll('.projectBox')

//EDUCATE BTN
const educateParentEl = document.querySelector('.educateContainer')
const educateBoxEl = document.querySelectorAll('.educateBox')


//Project Expanation
const personalInfoEl = document.querySelector('.personalInfo')
const projectExpainEl = document.querySelectorAll('.projectExpand')



// Skill BTN 
// const skillScoreEl = document.querySelectorAll('.scoreBox .score')
// const skillBoxEl = document.querySelector('.skillBox')
// const skillBoxBar = document.querySelector('.skillBox--bar')



// BUTTON : PERSONAL CONTROL

logoEagle.addEventListener('click', function () {
  // BOTTON CONTROL
  logoEagle.classList.toggle('active-light-orange')
  projectBoxEl.forEach(e => {
    e.classList.remove('active-dark-orange')
  })

  // MINI WINDOW CONTROL
  personalInfoEl.classList.toggle('hidden')
  projectExpainEl.forEach(e => {
    e.classList.add('hidden')
  })
})



// BUTTON : PROJECTS CONTROL
projectParentEl.addEventListener('click', function (e) {
  const targetEl = e.target.closest('.projectBox')
  if (!targetEl && targetEl.dataset.project == 'backend') return
  if (targetEl.dataset.project == 'frontend') {
    // BOTTON CONTROL
    // REMOVE OTHER
    logoEagle.classList.remove('active-light-orange')
    projectBoxEl.forEach(e => {
      if (e.dataset.project != 'frontend')
        e.classList.remove('active-dark-orange')

    })

    educateBoxEl.forEach(e => {
      e.classList.remove('active-dark-orange')
    })
    // TOGGLE TARGET
    targetEl.classList.toggle('active-dark-orange')

    // MINI WINDOW CONTROL
    projectExpainEl.forEach(e => {
      if (e.dataset.project == 'frontend')
        e.classList.toggle('hidden')
      else {
        e.classList.add('hidden')

      }
    })

    personalInfoEl.classList.add('hidden')
  }

  else if (targetEl.dataset.project == 'other') {
    // BOTTON CONTROL
    // REMOVE OTHER
    logoEagle.classList.remove('active-light-orange')
    projectBoxEl.forEach(e => {
      if (e.dataset.project != 'other')
        e.classList.remove('active-dark-orange')

    })
    educateBoxEl.forEach(e => {
      e.classList.remove('active-dark-orange')
    })
    // TOGGLE TARGET
    targetEl.classList.toggle('active-dark-orange')

    // MINI WINDOW CONTROL
    projectExpainEl.forEach(e => {
      console.log(e)
      if (e.dataset.project == 'other')
        e.classList.toggle('hidden')
      else {
        e.classList.add('hidden')

      }
    })

    personalInfoEl.classList.add('hidden')
  }
})




// BUTTON : Education CONTROL
educateParentEl.addEventListener('click', function (e) {
  const targetEl = e.target.closest('.educateBox')
  if (!targetEl) return
  if (targetEl.dataset.educate == '1') {
    // BOTTON CONTROL
    // REMOVE OTHER
    logoEagle.classList.remove('active-light-orange')
    projectBoxEl.forEach(e => {
      e.classList.remove('active-dark-orange')
    })
    educateBoxEl.forEach(e => {
      if (e.dataset.educate != '1')
        e.classList.remove('active-dark-orange')

    })
    // TOGGLE TARGET
    targetEl.classList.toggle('active-dark-orange')

    // MINI WINDOW CONTROL
    projectExpainEl.forEach(e => {
      if (e.dataset.educate == '1')
        e.classList.toggle('hidden')
      else {
        e.classList.add('hidden')
      }
    })

    personalInfoEl.classList.add('hidden')
  }

  else if (targetEl.dataset.educate == '2') {
    // BOTTON CONTROL
    // REMOVE OTHER
    logoEagle.classList.remove('active-light-orange')
    projectBoxEl.forEach(e => {
      e.classList.remove('active-dark-orange')
    })
    educateBoxEl.forEach(e => {
      if (e.dataset.educate != '2')
        e.classList.remove('active-dark-orange')

    })
    // TOGGLE TARGET
    targetEl.classList.toggle('active-dark-orange')

    // MINI WINDOW CONTROL
    projectExpainEl.forEach(e => {
      if (e.dataset.educate == '2')
        e.classList.toggle('hidden')
      else {
        e.classList.add('hidden')
      }
    })

    personalInfoEl.classList.add('hidden')
  }
  else if (targetEl.dataset.educate == '3') {
    // BOTTON CONTROL
    // REMOVE OTHER
    logoEagle.classList.remove('active-light-orange')
    projectBoxEl.forEach(e => {
      e.classList.remove('active-dark-orange')
    })
    educateBoxEl.forEach(e => {
      if (e.dataset.educate != '3')
        e.classList.remove('active-dark-orange')

    })
    // TOGGLE TARGET
    targetEl.classList.toggle('active-dark-orange')

    // MINI WINDOW CONTROL
    projectExpainEl.forEach(e => {
      if (e.dataset.educate == '3')
        e.classList.toggle('hidden')
      else {
        e.classList.add('hidden')
      }
    })

    personalInfoEl.classList.add('hidden')
  }


})














/// SKILL SCORE ///
const skillBtnParentEl = document.querySelector('.skillContainer')
const skillBoxEl = document.querySelectorAll('.skillBox')
const skillBoxBar = document.querySelector('.skillBox--bar')


const body = document.querySelector('body')



// body.addEventListener('click', function () {
skillBoxEl.forEach(el => {
  const bar = el.querySelector('.skillBox--bar')
  const score = +(el.querySelector('.score').dataset.score)
  bar.style.height = `${+score * 10}%`
  bar.style.backgroundColor = '#ffaf0b'
  bar.style.boxShadow = 'inset 0.5px 0.5px 5px 1px #be832a'

  animateValue(el.querySelector('.score'), 0, score, 300);
})


// })






function animateValue(el, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    el.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

