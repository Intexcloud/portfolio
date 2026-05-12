// Scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(el => {
        if (el.isIntersecting) {
            el.target.classList.add('visible');
            // Skill bars (if any)
            const bars = el.target.querySelectorAll ? el.target.querySelectorAll('.skill-bar') : [];
            bars.forEach(bar => {
                bar.style.width = bar.dataset.w + '%';
            });
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Also observe skill boxes for bars
document.querySelectorAll('.skill-box').forEach(box => {
    const io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('visible');
            }
        });
    }, { threshold: 0.3 });
    io.observe(box);
});

function handleSubmit(btn) {
    btn.textContent = 'Sending...';
    btn.disabled = true;
    setTimeout(() => {
        btn.textContent = '✓ Sent!';
        btn.style.background = '#28C840';
    }, 1500);
}