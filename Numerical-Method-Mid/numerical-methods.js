// ==========================================
//  NUMERICAL METHODS (Midterm)
// ==========================================
const questionsData = [
    { q: "A system of linear equations consists of two or more linear equations that are being solved:", options: ["Sequentially", "Simultaneously", "Individually", "In reverse"], ans: 1 },
    { q: "A system that has at least one solution is classified as a/an:", options: ["Inconsistent system", "Consistent system", "Dependent system", "Independent system"], ans: 1 },
    { q: "If a system of linear equations has no solution, it is called a/an:", options: ["Consistent system", "Inconsistent system", "Independent system", "Singular system"], ans: 1 },
    { q: "Equations are considered ______ if they represent the same line and share all solutions.", options: ["Independent", "Inconsistent", "Dependent", "Linear"], ans: 2 },
    { q: "In a three-variable system, a single linear equation is graphically represented as a:", options: ["Line", "Point", "Plane", "Sphere"], ans: 2 },
    { q: "A consistent and independent system of equations will have exactly how many solutions?", options: ["Zero", "One", "Two", "Infinite"], ans: 1 },
    { q: "A system where the equations are multiples of each other and share infinitely many solutions is:", options: ["Consistent and Independent", "Consistent and Dependent", "Inconsistent", "Non-linear"], ans: 1 },
    { q: "Cramer's Rule uses which mathematical concept to solve systems of linear equations?", options: ["Derivatives", "Integrals", "Determinants", "Logarithms"], ans: 2 },
    { q: "Under what condition is Cramer's Rule NOT applicable for solving a system?", options: ["When the determinant is positive", "When the determinant is negative", "When the determinant is zero", "When the constants are zero"], ans: 2 },
    { q: "In Cramer's Rule, the denominator for solving every variable is always the determinant of the:", options: ["Augmented matrix", "Coefficient matrix", "Identity matrix", "Constants vector"], ans: 1 },
    { q: "The primary goal of the 'Forward Elimination' step in Gaussian Elimination is to transform the matrix into:", options: ["Identity form", "Lower triangular form", "Upper triangular form", "Diagonal form"], ans: 2 },
    { q: "After the matrix is in upper triangular form, which process is used to find the values of the variables?", options: ["Forward substitution", "Back substitution", "Partial pivoting", "Matrix inversion"], ans: 1 },
    { q: "In a matrix, the values located at positions a11, a22, ... ann are known as the:", options: ["Off-diagonal elements", "Pivot elements", "Augmented elements", "Constant elements"], ans: 1 },
    { q: "What is the name of the matrix that combines the coefficients and the constants of a system?", options: ["Identity matrix", "Coefficient matrix", "Augmented matrix", "Square matrix"], ans: 2 },
    { q: "Gauss-Jordan Elimination differs from Gaussian Elimination because it transforms the matrix into:", options: ["Upper triangular form", "Lower triangular form", "Reduced row echelon form (Identity)", "Non-singular form"], ans: 2 },
    { q: "Which method eliminates the need for back substitution by creating zeros both above and below the pivots?", options: ["Gaussian Elimination", "Cramer's Rule", "Gauss-Jordan Elimination", "LU Decomposition"], ans: 2 },
    { q: "The process of swapping rows to move a larger value into the pivot position is called:", options: ["Scaling", "Pivoting", "Substitution", "Normalization"], ans: 1 },
    { q: "Why is pivoting used during elimination methods?", options: ["To make the math harder", "To avoid division by zero or small numbers", "To increase the number of variables", "To change the solution"], ans: 1 },
    { q: "LU Decomposition involves factoring a square matrix A into two matrices, L and U, which stand for:", options: ["Linear and Unit", "Leading and Unified", "Lower and Upper triangular", "Left and Upwards"], ans: 2 },
    { q: "In LU Decomposition, after finding L and U, the first step in solving for X is to solve the system:", options: ["UX = B", "LY = B", "AX = B", "LX = Y"], ans: 1 },
    { q: "Which LU method requires the diagonal elements of the Lower triangular matrix (L) to be all 1s?", options: ["Crout's Method", "Doolittle's Method", "Cholesky's Method", "Gauss's Method"], ans: 1 },
    { q: "Which LU method requires the diagonal elements of the Upper triangular matrix (U) to be all 1s?", options: ["Crout's Method", "Doolittle's Method", "Gaussian Method", "Cramer's Method"], ans: 0 },
    { q: "LU Decomposition is especially efficient when solving systems that have:", options: ["Different coefficient matrices", "Multiple sets of constant vectors (B)", "Only one variable", "Large determinants"], ans: 1 },
    { q: "A matrix that has the same number of rows and columns is called a:", options: ["Rectangular matrix", "Square matrix", "Vector matrix", "Row matrix"], ans: 1 },
    { q: "A matrix where all elements below the main diagonal are zero is called:", options: ["Lower triangular", "Upper triangular", "Identity", "Diagonal"], ans: 1 },
    { q: "A matrix where all elements above the main diagonal are zero is called:", options: ["Lower triangular", "Upper triangular", "Identity", "Null"], ans: 0 },
    { q: "The Identity matrix is a square matrix with ______ on the main diagonal and zeros elsewhere.", options: ["Zeros", "Ones", "Variables", "Constants"], ans: 1 },
    { q: "Two matrices are said to be ______ if one can be obtained from the other through elementary row operations.", options: ["Identical", "Inverse", "Row-equivalent", "Symmetric"], ans: 2 },
    { q: "If the elimination process results in a row like [0 0 0 | 5], the system is:", options: ["Consistent", "Independent", "Inconsistent", "Identity"], ans: 2 },
    { q: "If the elimination process results in a row like [0 0 0 | 0], it typically indicates that the system has:", options: ["Exactly one solution", "No solution", "Infinitely many solutions", "One imaginary solution"], ans: 2 },
    { q: "Direct methods like Gaussian Elimination are preferred over iterative methods when the matrix is:", options: ["Very sparse", "Small to medium-sized and dense", "Non-existent", "Unstable"], ans: 1 },
    { q: "In Numerical Methods, what do we call the process of finding the value of one variable and using it to find the others?", options: ["Forward Elimination", "Substitution", "Normalization", "Pivoting"], ans: 1 },
    { q: "The number of variables in a system of linear equations must usually match the number of ______ to have a unique solution.", options: ["Constants", "Rows/Equations", "Pivots", "Determinants"], ans: 1 },
    { q: "Which of the following is NOT an elementary row operation?", options: ["Swapping two rows", "Multiplying a row by a non-zero constant", "Multiplying two rows together", "Adding a multiple of one row to another"], ans: 2 },
    { q: "The ______ of a square matrix must be non-zero for the matrix to have a unique inverse.", options: ["Trace", "Determinant", "Size", "Rank"], ans: 1 }
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