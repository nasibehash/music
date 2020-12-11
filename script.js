$(document).ready(function() {


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
        setTimeout(function() {
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
        setTimeout(function() {
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
        setTimeout(function() {
            myFadeOut(elem)
        }, 10)
    }
    Element.prototype.fadeIn = function() {
        myFadeIn(this);
    }
    Element.prototype.fadeOut = function() {
        myFadeOut(this);
    }



    /* smooth scroll */

    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 3000, function() {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        }

                    });
                }
            }

        });
});