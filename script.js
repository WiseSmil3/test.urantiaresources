window.addEventListener('scroll', function () {
    var scrollY = window.scrollY;
    var zoom = 100 + Math.log(1 + scrollY / 100) * 20;
    document.body.style.backgroundSize = zoom + '%';
});

window.addEventListener('resize', function () {
    var navbar = document.querySelector('.navbar');
    if (window.innerWidth <= 600) {
        navbar.classList.add('navbar-bottom');
    } else {
        navbar.classList.remove('navbar-bottom');
    }
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        var targetId = this.getAttribute('href');
        var targetElement = document.querySelector(targetId);
        var navbarHeight = document.querySelector('.navbar').offsetHeight;
        window.scrollTo(0, targetElement.offsetTop - navbarHeight);
    });
});
