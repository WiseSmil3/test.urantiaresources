

window.addEventListener('DOMContentLoaded', (event) => {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            loadContent(this.getAttribute('href').substring(1));
        });
    });
});

function loadContent(section) {
    fetch(`${section}.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => console.error(error));
// Load the initial content
    loadSection('Text_and_Documentations');
    loadSection('Images_and_Illustrations');
    loadSection('Videos_and_Films');
    loadSection('Music_and_Audio');
    loadSection('Education_and_Courses');
    loadSection('Events_and_Communities');
    loadSection('Organizations');
    loadSection('Projects_and_Products');
    loadSection('Submit_Your_Suggestions');
}
