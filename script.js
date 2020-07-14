//SCROLL TO TOP
function smoothScrollTo(yPos) {
    var step = 20;
    if (yPos < scrollY) {
        step *= -1;
    }
    if (Math.abs(yPos - scrollY) <= step) { // stop Condition
        return;
    }
    window.scrollBy(0, step);
    setTimeout(function () {
        smoothScrollTo(yPos)
    }, 10);
}


// FADE ANIMATION
function myFadeIn(elem) {
    var elemOpacity = Number(getComputedStyle(elem).opacity).toPrecision(2);
    elem.style.opacity = elemOpacity;
    if (elemOpacity >= 1) {
        return;
    }
    elem.style.opacity = Number(elemOpacity) + 0.01;
    setTimeout(function () {
        myFadeIn(elem)
    }, 10)
}

function myFadeOut(elem) {
    var elemOpacity = Number(getComputedStyle(elem).opacity).toPrecision(2);
    elem.style.opacity = elemOpacity;
    if (elemOpacity <= 0) {
        return;
    }
    elem.style.opacity = Number(elemOpacity) - 0.01;
    setTimeout(function () {
        myFadeOut(elem)
    }, 10)
}
Element.prototype.fadeIn = function () {
    myFadeIn(this);
}
Element.prototype.fadeOut = function () {
    myFadeOut(this);
}



