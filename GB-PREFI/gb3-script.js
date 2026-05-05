// ==========================================
// DATASET: PPC (Prefinals)
// ==========================================
const questionsData = [
    // --- LITERARY PERIODS & MOVEMENTS ---
    { q: "Which period was heavily influenced by Enlightenment ideals and revived Greek and Roman forms?", options: ["Realism", "Romanticism", "Naturalism", "Neoclassicism"], ans: 3 },
    { q: "Which period emphasized emotion, nature, imagination, and individualism?", options: ["Realism", "Naturalism", "Romanticism", "Enlightenment"], ans: 2 },
    { q: "Which literary movement is dedicated to depicting everyday life as it is?", options: ["Realism", "Naturalism", "Romanticism", "Neoclassicism"], ans: 0 },
    { q: "Which form of Romanticism explores creativity, fantasy, and alternative realities?", options: ["Nature", "Emotion", "Imagination", "Individualism"], ans: 2 },
    { q: "Which concept promotes logical understanding and was a cornerstone of the Enlightenment?", options: ["Reason", "Satire", "Emotion", "Nature"], ans: 0 },
    { q: "The idea that environment and external forces shape human behavior is central to:", options: ["Romanticism", "Neoclassicism", "Naturalism", "Individualism"], ans: 2 },

    // --- SATIRE & SOCIAL CRITIQUE ---
    { q: "What literary technique employs humor, irony, and exaggeration to reveal human flaws or social vices?", options: ["Sublime", "Satire", "Realism", "Reason"], ans: 1 },
    { q: "Which famous satirical work suggests selling children as food to highlight social indifference?", options: ["Gulliver’s Travels", "A Modest Proposal", "Frankenstein", "Huckleberry Finn"], ans: 1 },
    { q: "In 'Gulliver’s Travels', the conflict between Lilliput and Blefuscu serves as a satire of:", options: ["Scientific discovery", "Politics and power", "Religious freedom", "Family dynamics"], ans: 1 },
    { q: "The obsession with trivial things and arrogance in Lilliput highlights which theme?", options: ["Politics", "Friendship", "Pride and vanity", "Morality"], ans: 2 },
    { q: "Which author is best known for his use of satire to critique 18th-century society and optimism?", options: ["Jonathan Swift", "William Wordsworth", "Mark Twain", "Mary Shelley"], ans: 0 },

    // --- GULLIVER’S TRAVELS & HUCKLEBERRY FINN ---
    { q: "Which point of view is used in 'Gulliver’s Travels' Part I?", options: ["First person", "Second person", "Third person limited", "Third person omniscient"], ans: 0 },
    { q: "What is Gulliver’s profession before he becomes a traveler?", options: ["Ship’s cook", "Ship’s surgeon", "Emperor’s advisor", "Merchant"], ans: 1 },
    { q: "Who is the narrator of 'The Adventures of Huckleberry Finn'?", options: ["Jim", "Tom Sawyer", "Huck", "Mark Twain"], ans: 2 },
    { q: "Huck’s struggle between his conscience and social laws is an example of what conflict?", options: ["Character vs. self", "Character vs. fate", "Character vs. nature", "Character vs. character"], ans: 0 },
    { q: "Which of the following is NOT part of the setting in 'Huckleberry Finn'?", options: ["Mississippi River", "Lilliput", "Cabins", "Farms"], ans: 1 },
    { q: "What is a central theme of 'Huckleberry Finn' regarding the protagonist's journey?", options: ["Romantic idealism", "Moral growth", "Scientific ambition", "Supernatural focus"], ans: 1 },

    // --- ROMANTIC POETRY & PROSE ---
    { q: "Who wrote the poem 'I Wandered Lonely as a Cloud'?", options: ["Mary Shelley", "William Wordsworth", "Percy Bysshe Shelley", "Samuel Taylor Coleridge"], ans: 1 },
    { q: "Which Romantic poem emphasizes beauty and the joy derived from nature?", options: ["Ode to the West Wind", "The Rime of the Ancient Mariner", "I Wandered Lonely as a Cloud", "Frankenstein"], ans: 2 },
    { q: "Who is the author of 'Ode to the West Wind'?", options: ["Lord Byron", "Samuel Taylor Coleridge", "Percy Bysshe Shelley", "William Wordsworth"], ans: 2 },
    { q: "Which Romanticism form is believed to provide deep spiritual insight?", options: ["Nature", "Emotion", "Imagination", "Individualism"], ans: 0 },
    { q: "Which work best describes themes of fear, guilt, and wonder at sea?", options: ["A Modest Proposal", "The Rime of the Ancient Mariner", "Gulliver’s Travels", "Huckleberry Finn"], ans: 1 },

    // --- FRANKENSTEIN & ETHICS ---
    { q: "Who wrote the gothic novel 'Frankenstein'?", options: ["Mary Shelley", "Lord Byron", "Mark Twain", "Percy Bysshe Shelley"], ans: 0 },
    { q: "Which of the following is a primary critique explored in 'Frankenstein'?", options: ["Strict social rules", "The beauty of nature", "Unchecked scientific ambition", "The joy of childhood"], ans: 2 },
    { q: "Which of the following is NOT true about Neoclassicism?", options: ["Revives Greek forms", "Values clarity", "Emphasizes reason and imagination", "Uses satire"], ans: 2 },

    // --- MISCELLANEOUS CONCEPTS ---
    { q: "A story that focuses on a character's moral growth within a corrupt society uses which form?", options: ["Satire", "The Sublime", "Social critique", "Gothic horror"], ans: 2 },
    { q: "Which is NOT an importance of studying Enlightenment literature?", options: ["Gain appreciation of reason", "Understand social critique", "Develop critical thinking", "Depicting everyday life"], ans: 3 },
    { q: "In the end of 'Huckleberry Finn', what does Huck decide to do?", options: ["Return to captivity", "Become a slave owner", "Continue independently", "Live with Tom Sawyer"], ans: 2 },
    { q: "Which of the following is NOT a form of Romanticism?", options: ["Nature", "Reason", "Emotion", "Individualism"], ans: 1 },
    { q: "Gulliver’s realization at the end of Part I leads him to:", options: ["Stay and rule Lilliput", "Criticize human quarrels", "Become a giant", "Ignore his home in England"], ans: 1 }
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