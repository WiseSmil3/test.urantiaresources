document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        var targetId = this.getAttribute('href');
        var targetElement = document.querySelector(targetId);
        var navbarHeight = document.querySelector('.navbar').offsetHeight;
        window.scrollTo(0, targetElement.offsetTop - navbarHeight);
        fetch(targetId.substring(1) + '.html')
            .then(response => response.text())
            .then(data => {
                document.querySelector('.container').innerHTML = data;
            })
            .catch(error => console.error(error));
    });
});
