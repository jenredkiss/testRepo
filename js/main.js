
/*-----Show Menu-----*/

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')


/*-----Remove Menu Mobile-----*/

const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav_link, we remove the show menu class
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/* ================ Scroll Section Active Link ===============*/


const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)
function scrollActive(){
    const scrollY = window.pageYOffset
    
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')
        
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*='+sectionId+']').classList.add('active-link')
        }
        else{
            document.querySelector('.nav_menu a[href*='+sectionId+']').classList.remove('active-link')
        }

    })
}

window.addEventListener('scroll', scrollActive)


/* Change Background Header */

function scrollHeader(){
    const nav = document.getElementById('header')
    const resize = document.getElementById('resize-header');
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 200) 
        {
        nav.classList.add('scroll-header'); 
        resize.classList.add('scroll-resize');
        }
    else {
        nav.classList.remove('scroll-header');
        resize.classList.remove('scroll-resize');
    }
}
window.addEventListener('scroll', scrollHeader)


// Change the position of the social media
function myFunction(x) {
    if (x.matches) { // If media query matches
       
        
    } else {
        const divi = document.getElementById("bio_social_icons_wrapper");
        const newDiv = document.getElementById("picture_bio_wrapper");
        newDiv.appendChild(divi);
    }
  }
  
  var x = window.matchMedia("(max-width: 700px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction)