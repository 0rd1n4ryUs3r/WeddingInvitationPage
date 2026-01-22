// 1. Smooth Scroll ke detail acara
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({ behavior: 'smooth' });
}

// 2. Animasi Reveal saat Scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.event, .rsvp');
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 500;
        if (top >= offset) {
            sec.classList.add('show');
        }
    });
});

// 3. Handling Form RSVP
const rsvpForm = document.getElementById('rsvpForm');
const responseMsg = document.getElementById('responseMessage');

rsvpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const attendance = document.getElementById('attendance').value;

    // Animasi loading sederhana
    responseMsg.innerText = "Mengirim konfirmasi...";
    
    setTimeout(() => {
        responseMsg.style.color = "#4a7c44";
        responseMsg.innerHTML = `<strong>Terima kasih, ${name}!</strong><br>Konfirmasi "${attendance}" telah kami terima.`;
        rsvpForm.reset();
    }, 1500);
});
