const avatar = document.querySelector('.avatar')


const appEl = document.querySelector('.app')
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



// OTHER
const overlayApparelEl = document.querySelector('.overlayApparel')





// Skill BTN
// const skillScoreEl = document.querySelectorAll('.scoreBox .score')
// const skillBoxEl = document.querySelector('.skillBox')
// const skillBoxBar = document.querySelector('.skillBox--bar')


/// BUTTON : HEADER CONTROL

const headerBtnParentEl = document.querySelector('.headerCtrContainer')

headerBtnParentEl.addEventListener("click", function (e) {
  const targetBtn = e.target.closest('.headerCtrContainer__box')
  if (!targetBtn) return

  // BTN : APARREL
  if (targetBtn.dataset.hbtn == '1') {
    appEl.classList.toggle('apparelTransform')
    apparelSwitch()

  }
})



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



const hobbyCountEl = document.querySelectorAll('.hobbyCount')
const daysOldEL = document.querySelector('.daysOld')

function barAnimate() {
  skillBoxEl.forEach(el => {
    const bar = el.querySelector('.skillBox--bar')
    const score = +(el.querySelector('.score').dataset.score)
    bar.style.height = `${+score * 10}%`
    bar.style.backgroundColor = '#ffaf0b'
    bar.style.boxShadow = 'inset 0.5px 0.5px 5px 1px #be832a'

    animateValue(el.querySelector('.score'), 0, score, 300);
  })
  hobbyCountEl.forEach(el => {
    const score = +(el.dataset.count)
    animateValue(el, 0, score, 300);
  })

  const daysOldScore = daysOldEL.dataset.count
  animateValue(document.querySelector('.daysOld'), 0, daysOldScore, 300);
}



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



// body.addEventListener('click', function () {

// test.addEventListener('click', function () {
// clearInterval(amimateAvatar)
// test.style.transition = 'all 1s';
// setTimeout(() => {
// test.style.transform = 'scale(1.1)';
// test.style.left = '2%';

// }, 300);


setTimeout(function () {
  appEl.style.opacity = ".5"

}, 1000)
setTimeout(function () {
  appEl.classList.add('apparelTransform')
}, 1200)
setTimeout(function () {
  appEl.style.opacity = "1"

}, 2000)
setTimeout(function () {
  barAnimate()
}, 2000)





let imgHtml
let imgeNo
let imgFrame = 1

for (imgeNo = 1200; imgeNo < 1500; imgeNo += 5) {
  imgHtml = `<img src="img/anime/0${imgeNo}-removebg-preview.png" alt="" class="avatarImg avatarHidden frame-${imgFrame}">`
  avatar.insertAdjacentHTML("afterbegin", imgHtml);
  imgFrame++
}
let windowActive = true
let frameStart = 1
let frameEnd = 60

let frameMiddle = 25 // Start BanckEord
let frameBegin = 14 // End BanckWord

const startWindow = setInterval(() => {
  overlayApparelEl.classList.add('overlayApparel')
  document.querySelector(`.frame-${frameStart}`).classList.toggle('avatarHidden')
  if (frameStart >= 2) document.querySelector(`.frame-${frameStart - 1}`).classList.toggle('avatarHidden')
  frameStart++
  if (frameStart > frameEnd) {
    clearInterval(startWindow)
    overlayApparelEl.classList.remove('overlayApparel')

    frameStart = frameMiddle
  }
}, 100);


function apparelSwitch() {

  if (windowActive == true) {
    overlayApparelEl.classList.add('overlayApparel')

    const interVBackward = setInterval(() => {
      if (frameStart == frameMiddle) {
        document.querySelector(`.frame-${frameEnd}`).classList.add('avatarHidden')
        document.querySelector(`.frame-${frameStart}`).classList.toggle('avatarHidden')
      }
      else if (frameStart < frameMiddle) {
        document.querySelector(`.frame-${frameStart}`).classList.toggle('avatarHidden')
        document.querySelector(`.frame-${frameStart + 1}`).classList.toggle('avatarHidden')
      }

      frameStart--

      if (frameStart < frameBegin) {
        clearInterval(interVBackward)
        overlayApparelEl.classList.remove('overlayApparel')

        frameStart = frameBegin
        windowActive = false
      }
    }, 100);
  }
  else {
    overlayApparelEl.classList.add('overlayApparel')
    const interVForward = setInterval(() => {
      document.querySelector(`.frame-${frameStart}`).classList.toggle('avatarHidden')
      document.querySelector(`.frame-${frameStart + 1}`).classList.toggle('avatarHidden')
      frameStart++
      console.log()
      if (frameStart >= frameMiddle) {
        clearInterval(interVForward)
        overlayApparelEl.classList.remove('overlayApparel')

        frameStart = frameMiddle - 1
        windowActive = true
      }
    }, 100);

  }
}
