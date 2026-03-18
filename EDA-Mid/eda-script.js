// ==========================================
//  NUMERICAL METHODS (Midterm)
// ==========================================
const QuestionsData = [
    { q: "What is the primary use of probability in statistics?", options: ["To guarantee outcomes", "To describe chance or randomness", "To eliminate bias", "To calculate exact future dates"], ans: 1 },
    { q: "Probability deals with the ______ of an occurrence rather than a guarantee.", options: ["Certainty", "Impossibility", "Likelihood", "History"], ans: 2 },
    { q: "Subjective probability is also commonly known as:", options: ["Empirical probability", "Experimental probability", "Theoretical or Classical probability", "Mathematical probability"], ans: 2 },
    { q: "Which type of probability is based on a person's past experience and judgment?", options: ["Objective", "Subjective", "Empirical", "Absolute"], ans: 1 },
    { q: "A major characteristic of subjective probability is that it contains a high degree of:", options: ["Mathematical accuracy", "Personal bias", "Universal agreement", "Data consistency"], ans: 1 },
    { q: "What is the name of the method where a panel of experts makes predictions about the future?", options: ["The Delphi method", "The Empirical method", "The Random method", "The Classical method"], ans: 0 },
    { q: "Objective probability is also referred to as:", options: ["Theoretical probability", "Subjective probability", "Empirical or Experimental probability", "Judgmental probability"], ans: 2 },
    { q: "In the probability formula P(E) = n(E) / n(S), what does n(S) represent?", options: ["The specific event", "The sample space", "The subjective error", "The number of trials"], ans: 1 },
    { q: "What is a 'Sample Space'?", options: ["A single outcome", "The set of all possible outcomes", "A biased prediction", "The probability percentage"], ans: 1 },
    { q: "When only one event occurs in an experiment, it is called a:", options: ["Compound event", "Simple event", "Independent event", "Mutually exclusive event"], ans: 1 },
    { q: "A sequence of two or more events occurring is known as a:", options: ["Simple event", "Primary event", "Compound event", "Binary event"], ans: 2 },
    { q: "If a manufacturer finds 45 non-defective monitors out of 50, what is the probability of picking a non-defective one?", options: ["0.45", "0.50", "0.90", "0.05"], ans: 2 },
    { q: "According to Property 1, the probability of any event must lie between:", options: ["-1 and 1", "0 and 1", "0 and 10", "1 and 100"], ans: 1 },
    { q: "What does P(φ) = 0 signify in probability theory?", options: ["The event is certain", "The event is impossible", "The event is subjective", "The sample space is empty"], ans: 1 },
    { q: "If an event is a 'Sure Event', its probability P(S) is equal to:", options: ["0", "0.5", "1", "Infinity"], ans: 2 },
    { q: "The 'OR' relationship between events usually triggers which rule?", options: ["The Multiplication Rule", "The Addition Rule", "The Subtraction Rule", "The Division Rule"], ans: 1 },
    { q: "Which rule is used for the probability that A or B occurs when the events are Mutually Exclusive?", options: ["General Addition Rule", "Special Addition Rule", "Special Multiplication Rule", "General Multiplication Rule"], ans: 1 },
    { q: "In a 'Not Mutually Exclusive' event, you must subtract what from the sum of probabilities?", options: ["The sample space", "The probability that both occur", "The subjective bias", "The individual events"], ans: 1 },
    { q: "The 'AND' relationship between events is associated with which rule?", options: ["Addition Rule", "Multiplication Rule", "Permutation Rule", "Combination Rule"], ans: 1 },
    { q: "Two events are ______ if the occurrence of one does NOT affect the likelihood of the other.", options: ["Dependent", "Independent", "Mutually Exclusive", "Sequential"], ans: 1 },
    { q: "If the occurrence of one event DOES affect the outcome of the next, the events are:", options: ["Independent", "Dependent", "Simple", "Theoretical"], ans: 1 },
    { q: "The 'Fundamental Principle of Counting' is also known as the:", options: ["Addition Principle", "Multiplication Principle", "Factorial Principle", "Combination Principle"], ans: 1 },
    { q: "The Multiplication Principle of Counting only works when all choices are:", options: ["Dependent", "Subjective", "Independent", "Mutually Exclusive"], ans: 2 },
    { q: "Which technique refers to the arrangement of objects where the 'order does matter'?", options: ["Combination", "Permutation", "Probability Scale", "Delphi Method"], ans: 1 },
    { q: "What is the formula for a permutation of 'n' objects taken 'r' at a time?", options: ["n! / r!", "n! / (n-r)!", "n! / r!(n-r)!", "n^r"], ans: 1 },
    { q: "In a permutation problem involving puppies, why is the order important?", options: ["Because they are different colors", "Because the order they are sold is specified", "Because it is a simple event", "Because the sample space is small"], ans: 1 },
    { q: "What formula is used for permutations where some items are 'look-alikes' or duplicates?", options: ["n!", "nPr = n! / (n1! * n2! ... nr!)", "nCr = n! / r!(n-r)!", "n^n"], ans: 1 },
    { q: "What does 'n!' (n factorial) mean?", options: ["n + (n-1) + ... + 1", "n * (n-1) * (n-2) * ... * 1", "n / (n-1)", "n^2"], ans: 1 },
    { q: "If Ramon arranges 5 books on a shelf, how many total possible arrangements (n!) are there?", options: ["25", "60", "120", "24"], ans: 2 },
    { q: "A selection of objects from a collection where the order 'does NOT' matter is a:", options: ["Permutation", "Combination", "Compound Event", "Factorial"], ans: 1 },
    { q: "In a combination, how many times can each object be selected?", options: ["Multiple times", "Only once", "Twice", "Zero times"], ans: 1 },
    { q: "Which formula is defined as C(n,r) = n! / [r!(n-r)!]?", options: ["Permutation", "Simple Probability", "Combination", "Empirical Rule"], ans: 2 },
    { q: "If 20 singers audition for a duet, why is this a combination problem?", options: ["Because order of selection doesn't matter", "Because everyone is a singer", "Because there are only 2 spots", "Because it is a subjective choice"], ans: 0 },
    { q: "What is the probability of a specific duet (Kevin and Phoebe) being picked out of 190 possible combinations?", options: ["1/20", "1/190", "2/20", "1/2"], ans: 1 },
    { q: "What does n(E) represent in the basic probability formula?", options: ["The total number of outcomes", "The number of ways a specific event can occur", "The subjective judgment", "The factorial of the set"], ans: 1 }
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
