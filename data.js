function closeModal() {
  document.getElementById("modal").style =
    "  transform: translate(-50%, -50%) scale(0);"
  document.getElementById("overlay").style =
    " transition: opacity 2s; opacity:0; pointer-events: none;"
}

function displayRadiationText() {
  document.getElementById("RadiationText").style =
    " transition: opacity 2s; opacity:1"
  animationDuration = "1s"
}

function hideRadiationText() {
  document.getElementById("RadiationText").style =
    "transition: opacity 0.5s; opacity:0"
}

function displayDeepSpaceText() {
  document.getElementById("DeepSpaceText").style =
    " transition: opacity 2s; opacity:1"
  animationDuration = "1s"
}

function hideDeepSpaceText() {
  document.getElementById("DeepSpaceText").style =
    "transition: opacity 0.5s; opacity:0"
}

function displayLowEarthText() {
  document.getElementById("LowEarthText").style =
    " transition: opacity 2s; opacity:1"
  animationDuration = "1s"
}

function hideLowEarthText() {
  document.getElementById("LowEarthText").style =
    "transition: opacity 0.5s; opacity:0"
}

function AirplaneText() {
  document.getElementById("AirplaneText").style =
    " transition: opacity 2s; opacity:1"
  animationDuration = "1s"
}

function hideAirplaneText() {
  document.getElementById("AirplaneText").style =
    "transition: opacity 0.5s; opacity:0"
}
function displayGeoText() {
  document.getElementById("GeoText").style =
    " transition: opacity 2s; opacity:1"
  animationDuration = "1s"
}

function hideGeoText() {
  document.getElementById("GeoText").style =
    "transition: opacity 0.5s; opacity:0"
}
function GroundLevelText() {
  document.getElementById("GroundLevel").style =
    " transition: opacity 2s; opacity:1"
  animationDuration = "1s"
}

function hideGroundLevelText() {
  document.getElementById("GroundLevel").style =
    "transition: opacity 0.5s; opacity:0"
}

function textEnglish() {
  document.getElementById("en").style = " display: block;"
  document.getElementById("fr").style = " display: none;"
}

function changeEnglish() {
  Array.from(document.getElementsByClassName("en")).forEach(function (elem) {
    elem.style.display = "block"
    Array.from(document.getElementsByClassName("fr")).forEach(function (elem) {
      elem.style.display = "none"
    })
  })
}

function changeFrench() {
  Array.from(document.getElementsByClassName("fr")).forEach(function (elem) {
    elem.style.display = "block"
    Array.from(document.getElementsByClassName("en")).forEach(function (elem) {
      elem.style.display = "none"
    })
  })
}
