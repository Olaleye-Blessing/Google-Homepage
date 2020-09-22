

const nav = document.querySelector('.nav');

const btnToggle = document.querySelector('.toggle-btn');

const navHome = document.querySelector('.nav__hidden-home');

const navParent = document.querySelector('.nav__hidden');

const menu = document.querySelector('.js-menu');

function showNav(event) {
    event.preventDefault();
    if (event.target != btnToggle) return;

    navParent.classList.add('is-open');

    for (const menus of menu.children) {
        for (const menu of menus.children) {
            if (menu.tagName != 'UL') {
                continue;
            } else {
                if (!menu.classList.contains(close)) {
                    menu.classList.add('close');
                }
            }
        }
    }
    setTimeout(() => {
        document.body.style.background = '#aaa';
        document.body.querySelector('.footer').style.background = '#aaa';
    }, 800);
}

function hideNav(event) {
    event.preventDefault();
    navParent.classList.remove('is-open');
    document.body.style.background = '';
    document.body.querySelector('.footer').style.background = '';
}

btnToggle.addEventListener('click', showNav);

navHome.addEventListener('click', hideNav);

// document.body.addEventListener('click', hideNav);

// const menu = document.querySelector('.js-menu');

function menuToggle(event) {
    // event.preventDefault();
    let target = event.target.closest('.menu-links');

    if (!target) return;

    if (navParent.classList.contains('is-open')) {
        navParent.classList.toggle('is-open');
        document.body.style.background = '';
        document.body.querySelector('.footer').style.background = '';
    }

    target.nextElementSibling.classList.toggle('close');
    
    
}

menu.addEventListener('click', menuToggle);

function activateBlue(event) {
    event.preventDefault();
    let target = event.target.closest('.js-active');

    if (!target) return;

    for (const element of document.querySelectorAll('.js-active')) {
        if(element.classList.contains('active')) {
            element.classList.remove('active');
            element.firstElementChild.classList.remove('active-child');
        }
    }

    target.classList.add('active');
    target.firstElementChild.classList.add('active-child');
}

nav.addEventListener('click', activateBlue)