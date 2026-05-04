// ==========================================
// DATASET: ETHICS (Prefinals)
// ==========================================
const questionsData = [
    // --- BIOETHICS & MEDICAL ETHICS FUNDAMENTALS ---
    { q: "Which field encompasses broader ethical concerns in biology, biotechnology, and global health, including environmental ethics?", options: ["Medical Ethics", "Bioethics", "Clinical Ethics", "Legal Ethics"], ans: 1 },
    { q: "Which area focuses specifically on patient care, doctor-patient relationships, and clinical decisions like informed consent?", options: ["Bioethics", "Biotechnology", "Medical Ethics", "Social Ethics"], ans: 2 },
    { q: "The ethical pledge that serves as the foundation for medical ethics and rules followed by doctors is the:", options: ["Nightingale Pledge", "Hippocratic Oath", "Geneva Declaration", "Patient's Bill of Rights"], ans: 1 },
    { q: "The principle that patients have the right to make their own informed healthcare decisions is called:", options: ["Beneficence", "Justice", "Non-maleficence", "Autonomy"], ans: 3 },
    { q: "Which pillar of medical ethics requires healthcare providers to act in the 'best interest' of the patient?", options: ["Autonomy", "Beneficence", "Non-maleficence", "Justice"], ans: 1 },
    { q: "The principle of 'do no harm,' which aims to avoid unnecessary suffering or excessive treatments, is known as:", options: ["Beneficence", "Justice", "Non-maleficence", "Autonomy"], ans: 2 },
    { q: "Which ethical pillar ensures that all patients receive equal and unbiased treatment regardless of financial status?", options: ["Autonomy", "Beneficence", "Justice", "Non-maleficence"], ans: 2 },
    { q: "When a scientist uses gene editing to cure a hereditary disease with oversight, they are addressing which bioethical issue?", options: ["Animal Experimentation", "Genetic Engineering", "AI in Research", "Environmental Bioethics"], ans: 1 },
    { q: "Using technology to enhance physical or cognitive abilities beyond natural limits refers to:", options: ["Human Enhancement", "Biodiversity", "Clinical Care", "Medical Fairness"], ans: 0 },
    { q: "Balancing scientific progress with the humane treatment of living subjects in research is the focus of:", options: ["Genetic Engineering", "Animal Experimentation", "AI Ethics", "Biotechnology"], ans: 1 },

    // --- AI ETHICS AND TECHNOLOGY ---
    { q: "What is the primary focus of AI Ethics?", options: ["Maximizing processing speed", "Increasing hardware efficiency", "Complementing human values and social responsibility", "Reducing the cost of AI development"], ans: 2 },
    { q: "Which AI concern occurs when hiring tools or algorithms disadvantage certain groups based on ethnicity or gender?", options: ["Privacy Violation", "Bias and Discrimination", "Job Displacement", "Misinformation"], ans: 1 },
    { q: "The concern regarding mass surveillance and the collection of personal data through CCTV is categorized as:", options: ["Lack of Transparency", "Privacy Violation", "Bias", "Sensationalism"], ans: 1 },
    { q: "AI-generated deepfakes and fake news that deceive the public are examples of:", options: ["Human Enhancement", "Beneficence", "Misinformation and Disinformation", "Justice"], ans: 2 },
    { q: "The reduction of employment opportunities in manufacturing due to automation is called:", options: ["Job Displacement", "Transparency Issue", "Bias", "AI Autonomy"], ans: 0 },
    { q: "When an AI system rejects a scholarship application without providing a reason, it demonstrates a:", options: ["Privacy Violation", "Lack of Transparency", "Beneficence", "Non-maleficence"], ans: 1 },
    { q: "To ensure ethical AI, developers and policymakers must prioritize which of the following?", options: ["Market Dominance", "Transparency and Accountability", "Maximum Speed", "Minimal Human Oversight"], ans: 1 },
    { q: "Which student role involves critically evaluating content to prevent the spread of false AI-generated news?", options: ["Educating yourself", "Advocating for bias", "Promoting unfairness", "Critically evaluating content"], ans: 3 },

    // --- MEDIA ETHICS & COMMUNICATION ---
    { q: "Which principle of ethical communication requires information to be well-researched and free from distortion?", options: ["Fairness", "Truth and Accuracy", "Transparency", "Privacy"], ans: 1 },
    { q: "Interviewing candidates from different political parties to provide balanced views is an example of:", options: ["Truth", "Privacy", "Fairness and Impartiality", "Sensationalism"], ans: 2 },
    { q: "A reporter withholding a victim's name to protect their dignity is practicing:", options: ["Transparency", "Privacy and Respect", "Impartiality", "Accuracy"], ans: 1 },
    { q: "What should an ethical communicator do when they discover they have made a mistake in their reporting?", options: ["Ignore it", "Hide the source", "Correct the mistake", "Delete the account"], ans: 2 },
    { q: "When a social media influencer clearly states that a post is a paid partnership, they are showing:", options: ["Bias", "Transparency", "Sensationalism", "Objectivity"], ans: 1 },
    { q: "Exaggerated or misleading headlines used solely to gain clicks and engagement are known as:", options: ["Clickbait", "Deepfakes", "Impartiality", "Informed Consent"], ans: 0 },
    { q: "Framing stories or altering content to fit a specific agenda or distort the truth is called:", options: ["Truth and Accuracy", "Manipulation and Misrepresentation", "Beneficence", "Justice"], ans: 1 },
    { q: "Which ethical issue involves online platforms amplifying harmful behavior that affects an individual's well-being?", options: ["Privacy Violation", "Cyberbullying and Harassment", "Job Displacement", "Human Enhancement"], ans: 1 },
    { q: "Invading a grieving family's privacy to get an exclusive interview is an example of:", options: ["Fairness", "Exploiting Human Suffering", "Transparency", "Objectivity"], ans: 1 },
    { q: "In the context of media ethics, 'Disinformation' refers to:", options: ["Accidental errors", "False information used to distort reality", "Balanced reporting", "High-quality journalism"], ans: 1 },
    { q: "Which pillar is violated if a doctor forces a treatment on a patient who has already refused it?", options: ["Beneficence", "Autonomy", "Justice", "Non-maleficence"], ans: 1 },
    { q: "What is the primary role of 'Informed Consent' in medical ethics?", options: ["To charge the patient", "To protect the doctor's time", "To ensure the patient makes an educated choice", "To avoid social media bias"], ans: 2 },
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