window.onload = function() {
    loadSection('Text_and_Documentations');
    loadSection('Images_and_Illustrations');
    loadSection('Videos_and_Films');
    loadSection('Music_and_Audio');
    loadSection('Education_and_Courses');
    loadSection('Events_and_Communities');
    loadSection('Organizations');
    loadSection('Material_Projects_and_Products');
    loadSection('Submit_Your_Suggestions');
}

function loadSection(sectionName) {
    fetch(sectionName + '.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById(sectionName).innerHTML = data;
        });
}
