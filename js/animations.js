// ===== SCROLL FADE-IN =====
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// ===== NAVBAR SHRINK =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if(window.scrollY > 50){
        navbar.classList.add('shrink');
    } else {
        navbar.classList.remove('shrink');
    }
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// ===== HERO ANIMATION PLACEHOLDER =====
const canvas = document.getElementById('hero-animation');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Simple subtle grid lines animation
const gridSpacing = 50;
function drawGrid(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.strokeStyle = 'rgba(200,200,200,0.2)';
    ctx.lineWidth = 1;
    for(let x=0;x<canvas.width;x+=gridSpacing){
        ctx.beginPath();
        ctx.moveTo(x,0);
        ctx.lineTo(x,canvas.height);
        ctx.stroke();
    }
    for(let y=0;y<canvas.height;y+=gridSpacing){
        ctx.beginPath();
        ctx.moveTo(0,y);
        ctx.lineTo(canvas.width,y);
        ctx.stroke();
    }
}
function animateGrid(){
    drawGrid();
    requestAnimationFrame(animateGrid);
}
animateGrid();

// Optional: resize canvas on window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});