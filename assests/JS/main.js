//   HOME JS
  const navMenu = document.getElementById('nav-toggle');
    const showNav = document.querySelector('#nav-menu');
    const navClose = document.getElementById('nav-close');
    const closer = document.querySelectorAll('#items');
    const navLink = document.getElementsByClassName('nav__link');

    navMenu.addEventListener('click', showMenu);
    function showMenu (){
        showNav.classList.add('show-menu');
    }

    closer.forEach(n => n.addEventListener('click', closeMenu))
    
    navClose.addEventListener('click', closeMenu);
    function closeMenu (){
        showNav.classList.remove('show-menu');
    }


// SKILLS JS
const skillsContent = document.getElementsByClassName('skills__content')
const skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i=0; i < skillsContent.length; i++)
    {
        skillsContent[i].className = 'skills__content skills__close'
    }

    if(itemClass === 'skills__content skills__close')
    {
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((eL) =>{
    eL.addEventListener('click', toggleSkills)
})


// SERVICE JS
const modalViews = document.querySelectorAll('.services__modal')
const modalBtns = document.querySelectorAll('.services__button')
const modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtns, i) =>{
    modalBtns.addEventListener('click', ()=>{
        modal(i)
    })
})

modalCloses.forEach((modalCloses)=>{
    modalCloses.addEventListener('click', ()=>{
        modalViews.forEach((modalViews)=>{
            modalViews.classList.remove('active-modal')
        })
    })
})


//Scroll Section

// const sections = document.querySelectorAll('section[id]')

// function scrollActive(){
//     const scrollY = window.pageYOffset

//     sections.forEach(current => {
//         const sectionHeight = current.offsetHeight
//         const sectionTop = current.offsetTop - 50;
//         sectionId = current.getAttribute('id')

//         if(scrollY > screenTop && scrollY <= sectionTop + sectionHeight){
//             document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
//         }else{
//             document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
//         }
//     })
// }

// window.addEventListener('scroll', scrollActive)

// CHANGE BACKGROUND HEADER
function scrollHeader(){
    const nav = document.getElementById('header')
    if(this.scrollY >= 80) nav.classList.add('scroll-header');
    else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// DARK THEME
// const themeButton = document.getElementById('theme-button')
// const darkTheme = 'dark-theme'
// const iconTheme = 'uil-sun'

// const selectedTheme = localStorage.getItem('selected-theme')
// const selectedIcon = localStorage.getItem('selected-icon')

// const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
// const getCurrentTheme = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// if(selectedTheme){
//     document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
//     themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
// }

// themeButton.addEventListener('click', () => {
//     document.body.classList.toggle(darkTheme)
//     themeButton.classList.toggle(iconTheme)

//     localStorage.setItem('selected-theme', getCurrentTheme())
//     localStorage.setItem('selected-icon', getCurrentIcon())
// })


function linkAction(){
    const navMenuClose = document.getElementById('nav-menu');
    navMenu.classList.remove('nav-menu');
}

// navLink.forEach(n => n.addEventListener('click', linkAction))


var icon = document.getElementById('theme-button');
icon.onclick = function()
{
    document.body.classList.toggle('dark-theme');
    
}




function sendMail(){
    var name = $('#name').var();
    var email = $('#email').var();
    var project = $('#project').var();
    var message = $('#message').var();

    var body = 'Name: '+name+'<br>Email: '+email+'<br>Subject: '+subject+'<br>Message: '+message;



Email.send({
    SecureToken:"72f34fa8-ce6c-4d28-b14c-73f736b6640a",
    Host : "smtp.gmail.com",
    Username : "rahul.joshiit2018@indoreinstitute.com",
    Password : "Rajjoo12",
    To : 'rahulsamjoshi@gmail.com',
    From : "rahul.joshiit2018@indoreinstitute.com",
    Subject : "On Portfolio From:"+name,
    Body : body
    }).then(
        message =>{
            if(message == 'OK'){
            alert('Your mail has been send. Thank you for connecting.');
            }
            else{
                console.error (message);
                alert('There is error at sending message. ')
                
            }

        }
    );
}








