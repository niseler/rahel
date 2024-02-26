function show(e, id) {
    const sections = document.getElementsByClassName('section');
    for (let i = 0; i < sections.length; i++) {
        sections[i].classList.add('hidden');
    }

    const nav = document.getElementsByClassName('mainnav');
    for (let i = 0; i < nav.length; i++) {
        nav[i].classList.remove('active');
    }
    document.getElementById(id).classList.remove('hidden');
    e.classList.add('active');
}

function showLyrics(e, id) {
    const sections = document.getElementsByClassName('lyricsection');
    for (let i = 0; i < sections.length; i++) {
        sections[i].classList.add('hidden');
    }

    const nav = document.getElementsByClassName('subnav');
    for (let i = 0; i < nav.length; i++) {
        nav[i].classList.remove('active');
    }
    document.getElementById(id).classList.remove('hidden');
    e.classList.add('active');
}


document.addEventListener('DOMContentLoaded', function () {
    var startDate = new Date('2024-01-21T00:00:00'); // Beispiel: 1. Januar 2022, 12:00 Uhr UTC
    var counterElement = document.getElementById('counter');

    function updateCounter() {
        var currentDate = new Date();
        var timeDiff = currentDate - startDate;

        var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        // Aktualisiere den Counter im HTML
        counterElement.innerHTML = days + ' Tage, ' + hours + ' Stunden, ' + minutes + ' Minuten, ' + seconds + ' Sekunden';
    }

    // Initialisierung des Counters
    updateCounter();

    // Aktualisiere den Counter alle 1000 Millisekunden (1 Sekunde)
    setInterval(updateCounter, 1000);
});