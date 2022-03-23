
let pthirdElements = Array.from(document.querySelectorAll('.pThird'));
//console.log(aosElements);
window.addEventListener('scroll', throttle(scanElements3, 50))
function scanElements3() {
    pthirdElements.forEach(element => {
        if (pthirdVisable(element)) {
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        }
    });
}
function pthirdVisable(element) {
    const elementDiv = element.getBoundingClientRect();
    let distanceFromTop3 = 30;
    return elementDiv.top - window.innerHeight < distanceFromTop3 ? true : false;
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
    sidetext.style.transform = `translateX(${-2 *val}%)`;

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