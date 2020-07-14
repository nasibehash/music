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

// HIDE NAV BY SCROLL
// (function createBtn(){
//     // var navS = document.getElementById(navId);
//     var goBtn = document.createElement('img');
//     goBtn.src="assets/icon/menu1.png";
//     goBtn.id="goUp";
//     document.body.appendChild(goBtn);
// //     function setNavVisibility(){
// //     if (window.screenY <=  100){
// //        goBtn.style.display ="none"; 
// //     }else {
// //         goBtn.style.display ="inline-block";
// //     }
// // }
// //window.addEventListener('scroll',setNavVisibility);
// }())

// (function scrollTop() {
//     var goUPBtn = document.createElement('img');
//     goUPBtn.src="assets/icon/menu1.png";
//     goUPBtn.id = "goUp";
//     document.body.appendChild(goUPBtn);

//     function setGoUpVisibility(){
//         if (window.screenY <=  100){
//                    goUPBtn.style.display ="none"; 
//                 }else {
//                     goUpBtn.style.display ="inline-block";
//                 }
//         }
//         window.addEventListener('scroll',setGoUpVisibility);
//         window.addEventListener('click',function(){scrollTo(0,0)})
// }())

// var goUPBtn = document.createElement('img');
//     goUPBtn.src="assets/icon/menu1.png";
//     goUPBtn.id = "goUp";
//     document.body.appendChild(goUPBtn);