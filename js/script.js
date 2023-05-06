// AVATER
const avatar = document.querySelector('.avatar')

// MINI WINDOW
const appEl = document.querySelector('.app')

// APPAREL BTN
const headerBtnParentEl = document.querySelector('.headerCtrContainer')

// PERSONAL BTN
const logoEagle = document.querySelector('.logoContainer__box')

// PORJECTS BTN
const projectParentEl = document.querySelector('.projectContainer')
const projectBoxEl = document.querySelectorAll('.projectBox')

// EDUCATE BTN
const educateParentEl = document.querySelector('.educateContainer')
const educateBoxEl = document.querySelectorAll('.educateBox')


// PROJECT EXPANATION
const personalInfoEl = document.querySelector('.personalInfo')
const projectExpainEl = document.querySelectorAll('.projectExpand')

// SKILL-SCORE 
const skillBtnParentEl = document.querySelector('.skillContainer')
const skillBoxEl = document.querySelectorAll('.skillBox')
const skillBoxBar = document.querySelector('.skillBox--bar')

// HOBBY 
const hobbyCountEl = document.querySelectorAll('.hobbyCount')
const daysOldEL = document.querySelector('.daysOld')

// OTHER
const body = document.querySelector('body')
const overlayApparelEl = document.querySelector('.overlayApparel')
const overlayAvatarEL = document.querySelector('.overlayAvatar')



let avatarBP = window.matchMedia("(max-width: 1300px)")
let desktopM = window.matchMedia("(max-width: 1050px)")
let tabPort = window.matchMedia("(max-width: 900px)")
let phone = window.matchMedia("(max-width: 600px)")

///////////////////////////////////////////////////////////////////////////////////

// WINDOW-CONTROL
let avaatarLeft = 1300

window.addEventListener("resize", function (e) {
  console.log(window.innerHeight)
  if (window.innerWidth > 1400) {
    avatar.style.left = `0px`
  }
  else if (window.innerWidth < 1400 && window.innerWidth > 1300) {
    avatar.style.left = `${(window.innerWidth - 1300) - 100}px`
    avatar.style.opacity = `1`
  }
  else if (window.innerWidth <= 1300) {
    avatar.style.opacity = `0`
  }

});


console.log(appEl)


//////////////////////////////////////////////////////////////////////////////////////




///////////////////////////////////////////////////////////////////////////////////



/// BUTTON : HEADER CONTROL


headerBtnParentEl.addEventListener("click", function (e) {
  e.preventDefault()
  const targetBtn = e.target.closest('.headerCtrContainer__box')
  if (!targetBtn) return
  // BTN : APARREL
  if (targetBtn.dataset.hbtn == '1') {
    appEl.classList.toggle('apparelTransform')
    apparelSwitch()

  }
})

avatar.addEventListener("click", function () {
  appEl.classList.toggle('apparelTransform')
  apparelSwitch()
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
  e.preventDefault()
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
  e.preventDefault()
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




/// ANIMATION CONTROL ///

/// START - ANIMATION ///

function startAnimateWindow() {
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
}

if (!tabPort.matches && !phone.matches) {
  startAnimateWindow()
} else {
  appEl.style.opacity = "1"
  barAnimate()

}




/// SKILL SCORE - ANIMATION ///

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


/// AVARTAR - ANIMATION ///


let imgHtml
let imgeNo
let imgFrame = 1



let windowActive = true
let frameStart = 1
let frameEnd = 60

let frameMiddle = 25 // Start BanckEord
let frameBegin = 14 // End BanckWord

function startAvater() {

  for (imgeNo = 1200; imgeNo < 1500; imgeNo += 5) {
    imgHtml = `<img src="img/anime/0${imgeNo}-removebg-preview.png" alt="" class="avatarImg avatarHidden frame-${imgFrame}">`
    avatar.insertAdjacentHTML("afterbegin", imgHtml);
    imgFrame++
  }

  const startWindow = setInterval(() => {
    overlayApparelEl.classList.remove('disable')
    overlayAvatarEL.classList.remove('disable')
    document.querySelector(`.frame-${frameStart}`).classList.toggle('avatarHidden')
    if (frameStart >= 2) document.querySelector(`.frame-${frameStart - 1}`).classList.toggle('avatarHidden')
    frameStart++
    if (frameStart > frameEnd) {
      clearInterval(startWindow)
      overlayApparelEl.classList.add('disable')
      overlayAvatarEL.classList.add('disable')

      frameStart = frameMiddle
    }
  }, 100);
}

if (!avatarBP.matches) {
  startAvater()
}



/// SWITCH AVATAR-WINDOW - ANIMATION ///

function apparelSwitch() {

  if (windowActive == true) {
    overlayApparelEl.classList.remove('disable')
    overlayAvatarEL.classList.remove('disable')

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
        overlayApparelEl.classList.add('disable')
        overlayAvatarEL.classList.add('disable')

        frameStart = frameBegin
        windowActive = false
      }
    }, 100);
  }
  else {
    overlayApparelEl.classList.remove('disable')
    overlayAvatarEL.classList.remove('disable')

    const interVForward = setInterval(() => {
      document.querySelector(`.frame-${frameStart}`).classList.toggle('avatarHidden')
      document.querySelector(`.frame-${frameStart + 1}`).classList.toggle('avatarHidden')
      frameStart++
      console.log()
      if (frameStart >= frameMiddle) {
        clearInterval(interVForward)
        overlayApparelEl.classList.add('disable')
        overlayAvatarEL.classList.add('disable')

        frameStart = frameMiddle - 1
        windowActive = true
      }
    }, 100);

  }
}

