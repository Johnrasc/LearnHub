// ==========================================
// DATASET: PPC (Prefinals)
// ==========================================
const questionsData = [
    // --- ORIGINAL PILIPINO MUSIC (OPM) ---
    { q: "What does the acronym OPM stand for in the context of Filipino culture?", options: ["Only Philippine Music", "Original Pilipino Music", "Organized Pilipino Melodies", "Official Pinoy Music"], ans: 1 },
    { q: "Which artist was dubbed 'Asia's Queen of Songs' and is famous for her signature 'liyad' pose?", options: ["Sylvia La Torre", "Regine Velasquez", "Pilita Corrales", "Sarah Geronimo"], ans: 2 },
    { q: "During the 1970s Golden Era, what specific fusion of Filipino themes with Western pop, funk, and disco emerged?", options: ["Pinoy Rock", "Manila Sound", "K-pop Style", "Indie Rise"], ans: 1 },
    { q: "Which band is credited for urban life anthems like 'Manila' and 'Annie Batungbakal'?", options: ["VST & Company", "Hotdog", "Eraserheads", "Rivermaya"], ans: 1 },
    { q: "Often called 'The Beatles of the Philippines,' this band is famous for the hit 'Ang Huling El Bimbo':", options: ["The Dawn", "Parokya ni Edgar", "Eraserheads", "Rivermaya"], ans: 2 },
    { q: "Who is known as 'Asia's Songbird' and became a defining voice of OPM power ballads in the 1990s-2000s?", options: ["Sarah Geronimo", "Jolina Magdangal", "Regine Velasquez", "Pilita Corrales"], ans: 2 },
    { q: "Which P-pop group made history as the first Southeast Asian act nominated for the Billboard Music Awards?", options: ["BINI", "Ben&Ben", "SB19", "MYMP"], ans: 2 },
    { q: "In 2026, which girl group is set to be the first all-Filipino group to perform at Coachella?", options: ["SB19", "BINI", "UDD", "MNL48"], ans: 1 },
    { q: "Which indie-folk pop band is formed by brothers Paolo and Miguel Guico and known for 'Kathang Isip'?", options: ["The Benjamins/Ben&Ben", "Rivermaya", "The Dawn", "Up Dharma Down"], ans: 0 },
    { q: "Which genre saw a rise in the 2000s-2010s with bands like MYMP focusing on simpler, stripped-down arrangements?", options: ["Heavy Metal", "Acoustic Revival", "Disco", "Electronic Jazz"], ans: 1 },

    // --- FILIPINO FOOD ---
    { q: "Filipino cuisine is described as a diverse mix of influences from Malay, Chinese, Spanish, and which other culture?", options: ["American", "French", "Italian", "Japanese"], ans: 0 },
    { q: "Which Filipino fast-food chain has gained global fame for 'Chickenjoy' and 'Jolly Spaghetti'?", options: ["Mang Inasal", "Chowking", "Jollibee", "Max's"], ans: 2 },
    { q: "In 2025, Gordon Ramsay collaborated with Abi Marquez, also known as the:", options: ["Adobo Queen", "Lumpia Queen", "Sinigang Expert", "Lechon Master"], ans: 1 },
    { q: "The Netflix series 'Street Food: Asia' featured regional cuisines from which Philippine city?", options: ["Manila", "Davao", "Cebu", "Iloilo"], ans: 2 },
    { q: "What does 'Pinoy Altanghap' stand for in the docuseries 'I Love Filipino'?", options: ["Alcohol-Tanghalian-Hapunan", "Almusal-Tanghalian-Hapunan", "Almusal-Tinapay-Hapunan", "Asim-Tamis-Hanghang"], ans: 1 },

    // --- FASHION TRENDS ---
    { q: "What was the traditional clothing for Filipino men during the Pre-Colonial Period?", options: ["Camisa de Chino", "Barong Tagalog", "Bahag", "Baro"], ans: 2 },
    { q: "Which formal gown for women during the Spanish Colonial period embodied modesty and Catholic values?", options: ["Tapis", "Maria Clara gown", "Patadyong", "Full skirt"], ans: 1 },
    { q: "In the 1970s, which fashion style featured bell-bottom jeans and psychedelic prints?", options: ["Grunge", "Disco", "Y2K", "Streetwear"], ans: 1 },
    { q: "Who influenced male streetwear in the late 90s with baggy jeans and oversized T-shirts?", options: ["Francis Magalona", "Vice Ganda", "Paolo Ballesteros", "Jake Zyrus"], ans: 0 },
    { q: "Jolina Magdangal is considered a blueprint for which colorful, accessory-heavy fashion trend?", options: ["Maria Clara", "Pre-Colonial", "Y2K", "Baro't Saya"], ans: 2 },
    { q: "Modern Filipino fashion often adapts traditional textiles into designs, such as T'nalak and:", options: ["Silk", "Denim", "Inabel", "Polyester"], ans: 2 },

    // --- SUBCULTURES & COMMODIFICATION ---
    { q: "Social groups that challenge mainstream norms or aesthetics are called:", options: ["Mainstream Cultures", "Oppositional Subcultures", "Elite Societies", "Traditionalists"], ans: 1 },
    { q: "Which song by Bamboo addresses social issues like structural inequality?", options: ["Sirena", "Tatsulok", "Manila", "Gento"], ans: 1 },
    { q: "What is the process of turning cultural expressions or art into marketable products for profit?", options: ["Advocacy", "Commodification", "Traditionalism", "SOGIESC"], ans: 1 },
    { q: "Which show hosted by Paolo Ballesteros presents drag as a form of artistic expression?", options: ["Drag Den", "Drag Race Philippines", "MasterChef Pinoy", "Sarap Diva"], ans: 1 },

    // --- SOGIESC ---
    { q: "In the acronym SOGIESC, what does 'GI' stand for?", options: ["Gender Interest", "Gender Identity", "General Information", "Gender Indicator"], ans: 1 },
    { q: "Which term answers the question: 'How do you express yourself through dress and behavior?'", options: ["Sexual Orientation", "Gender Identity", "Gender Expression", "Sex Characteristics"], ans: 2 },
    { q: "Physical features relating to chromosomes, hormones, and anatomy are known as:", options: ["Sex Characteristics", "Gender Identity", "Sexual Orientation", "Gender Expression"], ans: 0 },
    { q: "Sexual Orientation answers the question:", options: ["How do you see yourself?", "To whom are you attracted?", "How do you dress?", "What are your sex features?"], ans: 1 },
    { q: "Which OPM artist reflects their journey as a trans man through the song 'Anino'?", options: ["Jake Zyrus", "Vice Ganda", "Ice Seguerra", "Manila Luzon"], ans: 2 },
];

// ==========================================
// QUIZ ENGINE
// ==========================================
let index = 0;
let score = 0;
let randomizedQuestions = [];

function initQuiz() {
    randomizedQuestions = shuffleArray([...questionsData]);
    loadQuestion();
}

function loadQuestion() {
    const data = randomizedQuestions[index];
    const correctVal = data.options[data.ans];
    
    document.getElementById('q-num').innerText = index + 1;
    document.getElementById('question-text').innerText = data.q;
    
    // PROGRESS BAR LOGIC
    const totalQuestions = randomizedQuestions.length;
    const progressPercentage = (index / totalQuestions) * 100;
    

    const fill = document.getElementById('progress-fill');
    const percentText = document.getElementById('progress-percent');
    
    if (fill) {
        fill.style.width = progressPercentage + "%";
    }
    if (percentText) {
        percentText.innerText = Math.round(progressPercentage) + "%";
    }

    // Load Options
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    const shuffledOptions = shuffleArray([...data.options]);
    const correctIdxInShuffled = shuffledOptions.indexOf(correctVal);

    shuffledOptions.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'opt-btn';
        btn.innerText = opt;
        btn.onclick = () => handleChoice(i, correctIdxInShuffled, btn);
        optionsContainer.appendChild(btn);
    });
}

function handleChoice(userChoice, correctIdx, btn) {
    const allBtns = document.querySelectorAll('.opt-btn');
    allBtns.forEach(b => b.style.pointerEvents = 'none');

    const quizCard = document.getElementById('quiz-box');

    if (userChoice === correctIdx) {
        btn.classList.add('is-correct');
        playSound('snd-correct');
        score++;
    } else {
        btn.classList.add('is-wrong');
        allBtns[correctIdx].classList.add('is-correct');
        quizCard.classList.add('shake');
        playSound('snd-wrong');
        setTimeout(() => quizCard.classList.remove('shake'), 500);
    }

    setTimeout(() => {
        index++;
        if (index < randomizedQuestions.length) {
            loadQuestion();
        } else {
            showFinalResults();
        }
    }, 1200);
}

function showFinalResults() {
    document.getElementById('quiz-box').classList.add('hidden');
    document.getElementById('result-box').classList.remove('hidden');
    document.getElementById('score-val').innerText = Math.round((score / randomizedQuestions.length) * 100) + "%";
    
    playSound('snd-tada');
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00f2ff', '#00ff88', '#ffffff']
    });
}

function playSound(id) {
    const s = document.getElementById(id);
    if (s) {
        s.currentTime = 0;
        s.play().catch(e => console.log("Audio play blocked by browser."));
    }
}

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Start the sequence
window.onload = initQuiz;