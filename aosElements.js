import "./scroll-timeline.js"

let carElements = Array.from(document.querySelectorAll(".Car"))
//console.log(aosElements);
window.addEventListener("scroll", throttle(scanElementscar, 50))
function scanElementscar() {
  carElements.forEach(element => {
    if (carVisable(element)) {
      element.classList.add("active")
    } else {
      element.classList.remove("active")
    }
  })
}
function carVisable(element) {
  const elementDiv = element.getBoundingClientRect()
  let distanceFromTopcar = 100
  return elementDiv.top - window.innerHeight < distanceFromTopcar ? true : false
}

let rocketElements = Array.from(
  document.querySelectorAll(".Rocket, .afterburn")
)
//console.log(aosElements);
window.addEventListener("scroll", throttle(scanElementsrocket, 50))
function scanElementsrocket() {
  rocketElements.forEach(element => {
    if (rocketVisable(element)) {
      element.classList.add("active")
    } else {
      element.classList.remove("active")
    }
  })
}
function rocketVisable(element) {
  const elementDiv = element.getBoundingClientRect()
  let distanceFromToprocket = 20
  return elementDiv.top - window.innerHeight < distanceFromToprocket
    ? true
    : false
}

//let trainElements = Array.from(document.querySelectorAll(".Train"))
//console.log(aosElements);
//window.addEventListener("scroll", throttle(scanElementstrain, 50))
//function scanElementstrain() {
// trainElements.forEach(element => {
//   if (trainVisable(element)) {
//     element.classList.add("active")
//   } else {
//     element.classList.remove("active")
//   }
// })
//}
//function trainVisable(element) {
// const elementDiv = element.getBoundingClientRect()
// let distanceFromToptrain = 50
// return elementDiv.top - window.innerHeight < distanceFromToptrain
//   ? true
//   : false
//}

function throttle(fn, delay) {
  let lastCall = 0
  return (...arg) => {
    let context = this
    let current = new Date().getTime()

    if (current - lastCall < delay) {
      return
    }
    lastCall = current
    return fn.apply(context, ...arg)
  }
}

const scrollTracker = document.querySelector(".sidetext")

const scrollTrackingTimeline = new ScrollTimeline({
  source: document.scrollingElement,
  orientation: "block",
  scrollOffsets: [CSS.percent(0), CSS.percent(100)],
})

scrollTracker.animate(
  {
    transform: [
      "translateY(45vh) rotate(270deg)",
      "translateY(0vh) rotate(270deg)",
    ],
  },
  {
    duration: 1,
    timeline: scrollTrackingTimeline,
  }
)
const trainElement = document.querySelector(".Mountains")
const particleShower = document.querySelector(".particleShower")
const observeParticle = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return
      // console.log(entry.target)
      entry.target.classList.toggle("active", entry.isIntersecting)
      observeParticle.unobserve(entry.target)
    })
  },
  {
    threshold: 0.3,
    rootMargin: "-200px 0px 0px 0px",
  }
)

const observeMountains = new IntersectionObserver(
  entries => {
    entries.forEach(entry1 => {
      if (!entry1.isIntersecting) return
      // console.log(entry.target)
      entry1.target.classList.toggle("active", entry1.isIntersecting)
    })
    observeMountains.unobserve(trainElement)
  },
  {
    threshold: 0.5,
  }
)
observeParticle.observe(particleShower)
observeMountains.observe(trainElement)
