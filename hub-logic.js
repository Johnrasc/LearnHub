window.onload = () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => loader.style.display = 'none', 800);
    }, 1600);
};

document.addEventListener('DOMContentLoaded', () => {
    const quizLinks = document.querySelectorAll('.action-btn.quiz');
    const loader = document.getElementById('quiz-loader');

    quizLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Prevent the browser from leaving the page immediately
            e.preventDefault();
            const destination = this.getAttribute('href');

            // Show the loading screen
            loader.style.display = 'flex';

            // Wait for the animation to finish (1.5s)
            setTimeout(() => {
                window.location.href = destination;
            }, 1500); 
        });
    });
});

const searchInput = document.querySelector('#searchInput');
const searchGlow = document.querySelector('.search-glow');

if (searchInput) {
    searchInput.addEventListener('mousemove', (e) => {
        const rect = searchInput.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        searchGlow.style.setProperty('--x', `${x}%`);
        searchGlow.style.setProperty('--y', `${y}%`);
    });
}

// Search Filter Logic
function filterCards() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('.subject-card');
    
    cards.forEach(card => {
        const title = card.querySelector('h3').innerText.toLowerCase();
        const code = card.querySelector('.subject-code').innerText.toLowerCase();
        
        if (title.includes(input) || code.includes(input)) {
            card.style.display = "flex";
            // fade-in
            setTimeout(() => { card.style.opacity = "1"; }, 10);
        } else {
            card.style.opacity = "0";
            card.style.display = "none";
        }
    });
}

function filterTerm(term) {
    const cards = document.querySelectorAll('.subject-card');
    const buttons = document.querySelectorAll('.filter-btn');
    
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    cards.forEach(card => {
        const code = card.querySelector('.subject-code').innerText.toLowerCase();
        if (term === 'all' || code.includes(term)) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    });
}


function toggleMenu(subjectName) {
    console.log(`Accessing extended resources for: ${subjectName}`);
    alert(`[SYSTEM NOTICE]: Additional modules for ${subjectName} (Flashcards & Video Refs) are currently being encrypted. Check back soon!`);
}

console.log("%c LEARNHUB PREMIUM v2.1 ", "color: #00f2ff; font-weight: bold; font-size: 20px; background: #05070a; padding: 10px; border: 1px solid #00f2ff;");
