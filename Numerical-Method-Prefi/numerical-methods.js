// ==========================================
//  NUMERICAL METHODS (Prefinals)
// ==========================================
const questionsData = [
    // --- ITERATIVE METHODS OVERVIEW ---
    { q: "Iterative methods are based on the successive improvement of what starting point?", options: ["The final answer", "Initial guesses", "The exact solution", "A random variable"], ans: 1 },
    { q: "What is another name for the Jacobi Method?", options: ["Method of Successive Displacement", "Liebmann Method", "Method of Simultaneous Displacement", "Bisection Method"], ans: 2 },
    { q: "The process of iteration is repeated until which condition is reached?", options: ["The variables equal zero", "Desired accuracy is obtained", "The variables become negative", "Three iterations are finished"], ans: 1 },
    { q: "What determines the next approximation in iterative methods?", options: ["The previous approximation", "The constant value b only", "A fixed number 10", "The first initial guess only"], ans: 0 },
    { q: "True or False: Iterative methods always provide the exact solution in a single step.", options: ["True", "False"], ans: 1 },

    // --- JACOBI METHOD ---
    { q: "In the Jacobi Method, what values are used to calculate all variables in the next iteration?", options: ["The values from the current iteration", "The values from the previous iteration", "Only the x1 value", "Only the constant b"], ans: 1 },
    { q: "When solving for the second iteration in Jacobi, which approximation is used?", options: ["Initial approximation", "First approximation", "Third approximation", "The exact solution"], ans: 1 },
    { q: "In the Jacobi example, what was the initial approximation for all variables?", options: ["1", "0.5", "0", "4"], ans: 2 },
    { q: "If a Jacobi iteration is represented as k plus 1, where do the values for the calculation come from?", options: ["Iteration k", "Iteration k plus 2", "Iteration k plus 1", "The original system only"], ans: 0 },
    { q: "In the Jacobi example, how many iterations were required to reach an accuracy less than 0.005?", options: ["3 iterations", "5 iterations", "6 iterations", "10 iterations"], ans: 2 },

    // --- GAUSS-SEIDEL METHOD ---
    { q: "What are two other names for the Gauss-Seidel Method?", options: ["Simultaneous Displacement and Jacobi", "Successive Displacement and Liebmann", "Initial Guess and Successive", "Iterative and Constant"], ans: 1 },
    { q: "How does Gauss-Seidel differ from Jacobi when solving for x2 in the same iteration?", options: ["It uses the initial guess", "It uses the newly calculated x1", "It ignores x1", "It uses the x3 from the next iteration"], ans: 1 },
    { q: "What values does the Gauss-Seidel method use to get the next approximation?", options: ["Only initial guesses", "The latest available values", "Only previous iteration values", "Only constants"], ans: 1 },
    { q: "When calculating the last variable in a Gauss-Seidel iteration, which values are used for all previous variables?", options: ["Values from iteration k", "Values from iteration k plus 1", "Initial guesses", "Constants from the right side"], ans: 1 },
    { q: "In the provided example, which method reached the desired accuracy faster?", options: ["Jacobi Method", "Gauss-Seidel Method", "They were the same", "Neither reached it"], ans: 1 },
    { q: "How many iterations did the Gauss-Seidel method take to reach the target accuracy in the example?", options: ["1", "2", "3", "6"], ans: 2 },

    // --- MATHEMATICAL SETUP ---
    { q: "To solve a system iteratively, what is the first step?", options: ["Substitute 1 for all x", "Rewrite the system of equations", "Multiply the equations together", "Find the determinant"], ans: 1 },
    { q: "When rewriting the equation for x1, which coefficient is used as a divisor?", options: ["a11", "a12", "a22", "ann"], ans: 0 },
    { q: "In iterative formulas, what does the letter k typically represent?", options: ["The constant b", "The current iteration number", "The number of variables", "The error margin"], ans: 1 },
    { q: "What is the exact solution for x1, x2, and x3 in the examples provided?", options: ["0, 0, 0", "0.9, 0.9, 0.9", "1, 1, 1", "3, 7, 4"], ans: 2 },

    // --- COMPARISON & LOGIC ---
    { q: "Which method is characterized by Simultaneous Displacement?", options: ["Jacobi", "Gauss-Seidel", "Iterative", "Numerical"], ans: 0 },
    { q: "Which method is characterized by Successive Displacement?", options: ["Jacobi", "Gauss-Seidel", "Direct", "Linear"], ans: 1 },
    { q: "If you have just calculated a new x1 and immediately use it to find x2, which method are you using?", options: ["Jacobi", "Gauss-Seidel", "Bisection", "Elimination"], ans: 1 },
    { q: "If you wait until you have calculated all new x values before using them for the next step, which method is it?", options: ["Jacobi", "Gauss-Seidel", "Liebmann", "Successive"], ans: 0 },
    { q: "In the Gauss-Seidel formula for x at k plus 1, variables from index 1 to i minus 1 use which iteration?", options: ["k", "k plus 1", "k minus 1", "0"], ans: 1 },
    { q: "In the Jacobi formula for x at k plus 1, all variables on the right side use which iteration?", options: ["k", "k plus 1", "k minus 1", "Initial guess"], ans: 0 },
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