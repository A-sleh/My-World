
// select Elements 
let links = document.querySelector('#links') ,
    megaMenu =document.querySelector('.mega-menu') ,
    toFooter = document.querySelector('#down') ,
    mov_Top = document.querySelector('.button-scrolle'), 
    mainText = document.querySelector('.landing .text h1 span');

//  Click On Scrolle Button To Move To Top
    mov_Top.onclick = () => {
        window.scrollTo({
            top : 0 , 
            behavior : 'smooth' ,
        })
    }

// =================== Header ================
var open = false ;
// When Click on The Other Links 
    links.onclick = (e) => {
        openMegaMenu()
    }
// funtion To Open The Megamenu
    function openMegaMenu() {
        if ( !open) {
            megaMenu.style.cssText = `
                opacity: 1;
                z-index: 10;
                top: calc(100% );
            `
            links.innerHTML = 'close' ;
            links.style.color = 'red ';
            open = true ;
        } else {
            open = false ;
            megaMenu.style.cssText = `
            opacity: 0;
            top: calc(100% + 50px);
        `
        links.innerHTML = 'other links' ;
        links.style.color = 'black ';
        }
    }

    writerWorld(mainText,500);

    function writerWorld(srcCode,speed) {

        let innerName = srcCode.innerHTML ;
        let index = 0 , test = true;
        srcCode.innerHTML = innerName[index++] ;

        let write = setInterval(()=>{
            if( index < innerName.length && test ) {
                srcCode.innerHTML += innerName[index++] ;
            }else {
                let index_2 = 0 ;
                srcCode.innerHTML = innerName[index_2++];
                for( ; index_2 < index ; index_2 ++ ) {
                    srcCode.innerHTML += innerName[index_2];
                }
                index--; test = false ;
                if(index == -1 ) {
                    test = true ;
                    index = 1 ;
                }
            }
        },speed)
    }
// ===================== landing =======================

    toFooter.onclick = () => {
        window.scrollTo({
            top : document.documentElement.scrollHeight - document.documentElement.clientHeight ,
            behavior : "smooth" ,
        })
    }

//======================= articles ============

let allArticlesLinks = document.querySelectorAll('.articles .box .info span') ,
    screen = document.querySelector('.articles .screen') ,
    innerBox = document.querySelector('.articles .read-more') ,
    closeButton = document.querySelector('.articles .read-more #close') ;
    allArticlesLinks.forEach( link => {
        link.onclick = () => {
            screen.style.cssText = `transform: translatex(0);`
            innerBox.style.cssText = `opacity: 1; z-index : 100` ;
            window.scrollTo({
                top : innerBox.offsetTop + 400 ,
                behavior : 'smooth' ,
            });
        };
    })
    closeButton.onclick = () => {
        screen.style.cssText = `transform: translateX(-100%);`
        innerBox.style.cssText = `opacity: 0 ; z-index : -10`;
    }

//======================== Our Skills =====================


let progres = document.querySelectorAll('.the-progress span') ;
let s = document.querySelector('.our-skills') ;
let start = false ;

// ======================= How It Work ====================

let allBoxWorkStep = [...document.querySelectorAll('.work-step .info .box')] ,
    mainSecOfWorkStep = document.querySelector('.work-step')  ,
    isShowed = false ;


// ====================== servecs =========================

let boxServecs = document.querySelectorAll('.services .container .box'),
    mainBoxServecs = document.querySelector('.services') ,
    isShow = false ;

// =========================== events ======================

let days = document.querySelector('#days') ,
    hours = document.querySelector('#hours') ,
    minutes = document.querySelector('#minutes') ,
    seconds = document.querySelector('#seconds') ;
let startDate = new Date('2026/1/1');

    setInterval( function () {

        let goalDate = startDate - new Date().getTime() ;
        
        let d = Math.floor( goalDate / ( 1000 * 60 * 60 * 24 ) ) ;
        days.innerHTML = d < 10 ? '0' + d : d ;

        let h = Math.floor(( goalDate % ( 1000 * 60 * 60 * 24 ) ) / ( 1000 * 60 * 60 ) ) ;
        hours.innerHTML = h < 10 ? '0' + h : h ;

        let m = Math.floor( goalDate % ( 1000 * 60 * 60 ) / ( 1000 * 60 ) ) ; 
        minutes.innerHTML = m < 10 ? '0' + m : m ;

        let s = Math.floor( goalDate % ( 1000 * 60 ) /  1000 ) ;
        seconds.innerHTML = s < 10 ? '0' + s : s ;
    } , 1000)

// valid input Email
let email = document.querySelector('.events .subscribe #em') ,
    pattern = /\w{1,10}[@gamil]?[.com]?/ig;
document.onkeyup = () => {
    if((email.value).match(pattern) && (email.value).length <= 20) {
        email.style.border = `1px solid green`;
    }else if ((email.value).length >= 20){
        email.style.border = `1px solid red`;
    }else {
        email.style.border = `none`;
    }
}

// ======================= our stats ========================

let numberCount = Array.from(document.querySelectorAll('.stats .number')) , 
    statsSection = document.querySelector('.stats') ,
    isRun = false ;

//====================================================================
//============================ on scrolle evet =======================
//============================ on scrolle evet =======================
//====================================================================

window.onscroll = () => {
    // ======================= our stats ========================
    if( window.scrollY >= statsSection.offsetTop - 200 && !isRun) {
        numberCount.forEach((num) => {
            inccresNumber(num) ;
        });
        isRun = true ;
    } else if (window.scrollY < statsSection.offsetTop - 200 && isRun) {
        numberCount.forEach((num) => {
            num.innerHTML = '0' ;
        });
        isRun = false ;
    }
    //======================== Our Skills =====================
    if(window.scrollY >= s.offsetTop - 300 && !start ) {
        progres.forEach((e) => {
            e.style.width = `${e.dataset.width}% `; 
        })
        start = true ;
    } else if( window.scrollY < s.offsetTop - 300 && start ) {
        progres.forEach((e) => {
            e.style.width = `0%`; 
        })
        start = false ;
    }
    // ====================== servecs =========================
    if(window.scrollY >= mainBoxServecs.offsetTop - 300 && !isShow ) {
        for(let i = 0 , j = boxServecs.length - 1 ; i < j ; ++ i , j -- ) {
            setTimeout(() => {
                boxServecs[i].classList.add('ASLEH');
                boxServecs[j].classList.add('ASLEH');
            } , 500 * (i+1) );
        }
        isShow = true ;
    } else if( isShow &&window.scrollY < mainBoxServecs.offsetTop - 300 ) {
        for(let i = 1 ; i <= boxServecs.length ; ++ i ) {
            setTimeout(() => {
                boxServecs[i-1].classList.remove('ASLEH');
            } , 300 * i / 2 );
        }
        isShow = false ;
    }
    // ======================= How It Work ====================
    if(window.scrollY >= mainSecOfWorkStep.offsetTop - 300 && !isShowed ) {
        for(let i = 1 ; i <= allBoxWorkStep.length ; ++ i ) {
            setTimeout(() => {
                allBoxWorkStep[i-1].style.transform = 'translateX(0)' ;
            } , 200 * i / 2 );
        }
        isShowed = true ;
    }else if(window.scrollY < mainSecOfWorkStep.offsetTop - 300 && isShowed){
        for(let i = 1 ; i <= allBoxWorkStep.length ; ++ i ) {
            setTimeout(() => {
                allBoxWorkStep[i-1].style.transform = 'translateX(104%)' ;
            } , 200 * i / 2 );
        }
        isShowed = false ;
    }
    //  Click On Scrolle Button To Move To Top
    if( window.scrollY >= 600 ) {
        mov_Top.style.transform = 'translateX(0)';
    }else {
        mov_Top.style.transform = 'translateX(200%)';
    }
}
// Funtion To Inccres The Number Of innerHTML 
    function inccresNumber(num) {
        let goal = num.dataset.number ;
        let count = setInterval(()=>{
            num.innerHTML = 1 + parseInt(num.innerHTML) ;
            if(parseInt(num.innerHTML) >= goal ) {
                clearInterval(count) ;
            }
        } , 2000 / goal );
    }

// === this section in order to scrolle to the goal section from the page ==

// links in the navbar
let artic = document.querySelector('.header .main-nav #artic') ,
    Gallery = document.querySelector('.header .main-nav #gall') ,
    features = document.querySelector('.header .main-nav .features') ;
// if the button is clicked
    artic.onclick = (from) => ifClicked(from,'articles');
    Gallery.onclick = (from) => ifClicked(from,'gallery');
    features.onclick = (from) => ifClicked(from,'features');
// links in the megamenu
    let allLinks = document.querySelectorAll('.header .main-nav .mega-menu .links a') ;
// if the button in the megamenu are clicked
    allLinks.forEach((link) => {
        link.onclick = (from) => {
            ifClicked(from,link.dataset.id);
            openMegaMenu() ;
        }
    } )
// to scroll To the location
    function ifClicked(from , to) {
        from.preventDefault();
        window.scrollTo({
            top : document.querySelector(`#${to}`).offsetTop , 
            behavior : 'smooth' ,
        })
    }