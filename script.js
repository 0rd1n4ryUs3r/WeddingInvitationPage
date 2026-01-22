// 1. Smooth Scroll
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// 2. Reveal Animation on Scroll
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// 3. RSVP Handling
document.getElementById('rsvpForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const msg = document.getElementById('responseMessage');
    msg.innerText = "Mengirim...";
    
    setTimeout(() => {
        msg.innerHTML = "✅ Terima kasih! Konfirmasi Anda telah kami terima.";
        msg.style.color = "green";
        this.reset();
    }, 2000);
});
