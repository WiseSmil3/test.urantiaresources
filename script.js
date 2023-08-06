document.addEventListener('DOMContentLoaded', function() {
    const sections = ['Text_and_Documentations', 'Images_and_Illustrations', 'Videos_and_Films', 'Music_and_Audio', 'Education_and_Courses', 'Events_and_Communities', 'Organizations', 'Material_Projects_and_Products', 'Submit_Your_Suggestions'];
    const navbar = document.querySelector('.navbar-container');
    const container = document.querySelector('.container');

    function loadSection(section) {
        fetch(section + '.html')
            .then(response => response.text())
            .then(html => {
                container.innerHTML = html;
            });
    }

    navbar.addEventListener('click', function(e) {
        if (e.target.classList.contains('nav-link')) {
            e.preventDefault();
            const section = e.target.getAttribute('href').slice(1);
            loadSection(section);
        }
    });

    loadSection(sections[0]);
});
