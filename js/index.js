

const btnToggle = document.querySelector('.toggle-btn');

const navHome = document.querySelector('.nav__hidden-home');

const navParent = document.querySelector('.nav__hidden');

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
    }, 1000);
}

function hideNav(event) {
    event.preventDefault();
    navParent.classList.remove('is-open');
    document.body.style.background = '';
}

btnToggle.addEventListener('click', showNav);

navHome.addEventListener('click', hideNav);

// document.body.addEventListener('click', hideNav);

const menu = document.querySelector('.js-menu');

function menuToggle(event) {
    // event.preventDefault();
    let target = event.target.closest('.menu-links');

    if (!target) return;

    if (navParent.classList.contains('is-open')) {
        navParent.classList.toggle('is-open');
        document.body.style.background = '';
    }

    target.nextElementSibling.classList.toggle('close');
    
    
}

menu.addEventListener('click', menuToggle);

