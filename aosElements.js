
let carElements = Array.from(document.querySelectorAll('.Car'));
//console.log(aosElements);
window.addEventListener('scroll', throttle(scanElementscar, 50))
function scanElementscar() {
    carElements.forEach(element => {
        if (carVisable(element)) {
           var item = document.getElementById('Car');
           item.animate([
               {transform: 'translateX(-50%)', },
               {transform: 'translateX(100%)', },
           ], {
               duration: 15000,
               easing: 'linear',
               iterations: 1,
               direction: 'normal',
               fill: 'forwards'
            
           });
        } 
    });
}
function carVisable(element) {
    const elementDiv = element.getBoundingClientRect();
    let distanceFromTopcar = 800;
    return elementDiv.top - window.innerHeight < distanceFromTopcar ? true : false;
}

let rocketElements = Array.from(document.querySelectorAll('.Rocket, .afterburn, .pThird'));
//console.log(aosElements);
window.addEventListener('scroll', throttle(scanElementsrocket, 50))
function scanElementsrocket() {
    rocketElements.forEach(element => {
        if (rocketVisable(element)) {
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        }
    });
}
function rocketVisable(element) {
    const elementDiv = element.getBoundingClientRect();
    let distanceFromToprocket = 20;
    return elementDiv.top - window.innerHeight < distanceFromToprocket ? true : false;
}


let trainElements = Array.from(document.querySelectorAll('.Train'));
//console.log(aosElements);
window.addEventListener('scroll', throttle(scanElementstrain, 50))
function scanElementstrain() {
    trainElements.forEach(element => {
        if (trainVisable(element)) {
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        }
    });
}
function trainVisable(element) {
    const elementDiv = element.getBoundingClientRect();
    let distanceFromToptrain = 200;
    return elementDiv.top - window.innerHeight < distanceFromToptrain ? true : false;
}

let psecondElements = Array.from(document.querySelectorAll('.pSecond'));
//console.log(aosElements);
window.addEventListener('scroll', throttle(scanElements2, 50))
function scanElements2() {
    psecondElements.forEach(element => {
        if (psecondVisable(element)) {
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        }
    });
}
function psecondVisable(element) {
    const elementDiv = element.getBoundingClientRect();
    let distanceFromTop2 = 0;
    return elementDiv.top - window.innerHeight < distanceFromTop2 ? true : false;
}



let pmainElements = Array.from(document.querySelectorAll('.pMain'));
//console.log(aosElements);
window.addEventListener('scroll', throttle(scanElements, 50))
function scanElements() {
    pmainElements.forEach(element => {
        if (pmainVisable(element)) {
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        }
    });
}
function pmainVisable(element) {
    const elementDiv = element.getBoundingClientRect();
    let distanceFromTop = -600;
    return elementDiv.top - window.innerHeight < distanceFromTop ? true : false;
}

const sidetext = document.querySelector('.sidetext')

window.addEventListener('scroll', () =>{
    const scrolled = window.pageYOffset;
    const val = scrolled * 0.5;
    sidetext.style.transform = `translateY(${-2 *val}%) rotate(270deg)`
}

)

function throttle(fn, delay){
    let lastCall = 0;
    return (...arg)=>{
        let context = this;
        let current = new Date().getTime();

        if(current - lastCall < delay){
            return
        }
        lastCall = current;
        return fn.apply(context, ...arg)
    }
}


