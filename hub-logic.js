
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
            // Gentle fade-in
            setTimeout(() => { card.style.opacity = "1"; }, 10);
        } else {
            card.style.opacity = "0";
            card.style.display = "none";
        }
    });
}


function toggleMenu(subjectName) {
    console.log(`Accessing extended resources for: ${subjectName}`);
    alert(`[SYSTEM NOTICE]: Additional modules for ${subjectName} (Flashcards & Video Refs) are currently being encrypted. Check back soon!`);
}

console.log("%c LEARNHUB PREMIUM v2.1 ", "color: #00f2ff; font-weight: bold; font-size: 20px; background: #05070a; padding: 10px; border: 1px solid #00f2ff;");