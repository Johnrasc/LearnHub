// ==========================================
//  ENGINEERING DATA ANALYSIS (Prefinals)
// ==========================================
const questionsData = [
    // --- RANDOM VARIABLES & DISTRIBUTIONS ---
    { q: "What is the term for a function whose domain is a sample space and whose range is a set of real numbers?", options: ["Sample Space", "Random Variable", "Probability Mass", "Function Range"], ans: 1 },
    { q: "Which type of random variable assumes a finite or countable number of possible outcomes?", options: ["Continuous", "Discrete", "Stochastic", "Infinite"], ans: 1 },
    { q: "Which of the following is an example of a Continuous Random Variable?", options: ["Number of siblings", "Depth of drilling to find oil", "Number of phone rings", "Number of accidents"], ans: 1 },
    { q: "A Probability Mass Function (PMF) provides probabilities for which type of random variable?", options: ["Continuous", "Discrete", "Uniform", "Normal"], ans: 1 },
    { q: "What is the name of the function that describes the shape and relative likelihoods of a random variable's values?", options: ["Probability Distribution", "Domain Set", "Relative Frequency", "Variable Range"], ans: 0 },

    // --- EXPECTED VALUE & VARIANCE ---
    { q: "What is another common name for the Expected Value of a random variable?", options: ["Standard Deviation", "Variance", "Mean", "Median"], ans: 2 },
    { q: "How is the expected value (mean) of a discrete probability distribution calculated?", options: ["Average of all values", "Sum of each value multiplied by its probability", "Square root of the variance", "Highest probability value"], ans: 1 },
    { q: "The variance of a random variable is found by summing the squared differences from the mean, multiplied by what?", options: ["Sample size", "Standard deviation", "Individual probabilities", "Number of trials"], ans: 2 },
    { q: "The standard deviation of a random variable is mathematically defined as the:", options: ["Sum of squares", "Square root of the variance", "Square of the mean", "Total number of trials"], ans: 1 },
    { q: "Costronic Technologies sells iPhones for Apple Inc. It usually sells the number of iPhones on Sunday. The store manager, Gary, has established the probability distribution for the number of iPhones the store expects to sell on a particular Sunday. In the iPhone sales example, what did an expected value of 3.51 represent?", options: ["The minimum sales possible", "The maximum sales possible", "The average number of units expected to be sold", "The total number of units in stock"], ans: 2 },

    // --- BINOMIAL DISTRIBUTION ---
    { q: "Which distribution is used for experiments with a fixed number of independent trials and exactly two outcomes?", options: ["Poisson", "Normal", "Binomial", "Continuous"], ans: 2 },
    { q: "What does the letter 'p' represent in the Binomial Distribution formula?", options: ["Number of trials", "Probability of success", "Number of successes", "Probability of failure"], ans: 1 },
    { q: "In the Binomial formula, how is 'q' (the probability of failure) calculated?", options: ["1 minus p", "p squared", "n minus r", "1 divided by p"], ans: 0 },
    { q: "Trials in a Binomial experiment must be independent, meaning one outcome:", options: ["Determines the next", "Does not affect another", "Always results in success", "Must be the opposite of the last"], ans: 1 },
    { q: "If you are finding the probability of '3 or more' successes in a sample of 5, which probabilities should you add?", options: ["P(0), P(1), and P(2)", "P(3), P(4), and P(5)", "P(1), P(2), and P(3)", "P(3) and P(5) only"], ans: 1 },

    // --- POISSON DISTRIBUTION ---
    { q: "Which distribution is useful for determining the number of occurrences over a given time, area, or volume?", options: ["Binomial", "Poisson", "Discrete Mass", "Linear"], ans: 1 },
    { q: "In the Poisson formula, what does the Greek letter 'mu' (μ) represent?", options: ["Sample size", "Mean number of occurrences", "Natural logarithm base", "Total area"], ans: 1 },
    { q: "The constant 'e' used in Poisson calculations is approximately equal to which value?", options: ["3.14159", "1.41421", "2.71828", "0.01831"], ans: 2 },
    { q: "What is a key characteristic of the Poisson Distribution regarding the outcomes of interest?", options: ["They are very common", "They are rare relative to possible outcomes", "They are always equal to 1", "They are dependent on previous trials"], ans: 1 },
    { q: "In the school flood example with a mean of 4, what was the probability of closing for exactly 6 days?", options: ["0.4096", "0.0183", "0.10416", "0.0266"], ans: 2 },

    // --- MATHEMATICAL CONCEPTS & LOGIC ---
    { q: "What is the requirement for a relation to be considered a 'function'?", options: ["The range must be larger than the domain", "Each element of the domain is paired with exactly one range element", "It must result in two or more results for one input", "The domain must be all real numbers"], ans: 1 },
    { q: "In the probability distribution for tossing two dice, what is the total number of possible outcomes in the sample space?", options: ["6", "12", "24", "36"], ans: 3 },
    { q: "When constructing a probability distribution table, the sum of all probabilities f(x) must equal:", options: ["0", "0.5", "1", "10"], ans: 2 },
    { q: "If a wallet contains four 100 bills, two 200 bills, three 500 bills, and one 1,000 bill, what is the probability of picking a 500 bill?", options: ["0.10", "0.20", "0.30", "0.40"], ans: 2 },
    { q: "The range of a function is defined as the set of all:", options: ["Input values", "Output values", "Random variables", "Independent trials"], ans: 1 },

    // --- PROBLEM SOLVING & IDENTIFICATION ---
    { q: "In the three-coin toss experiment, how many total outcomes are in the sample space?", options: ["3", "4", "6", "8"], ans: 3 },
    { q: "What is the probability of getting exactly zero heads when tossing three balanced coins?", options: ["1/8", "3/8", "1/2", "7/8"], ans: 0 },
    { q: "A manufacturing sample tests 5 transistors with a 0.15 failure rate. To find the probability of exactly 3 defectives, what is 'r'?", options: ["5", "0.15", "3", "0.85"], ans: 2 },
    { q: "Which distribution would best model the number of people arriving at a bank teller queue per hour?", options: ["Binomial", "Poisson", "Continuous", "Discrete"], ans: 1 },
    { q: "What occurs when a random variable is denoted by 'X' and its specific possible values by 'x'?", options: ["Standard Notation", "Expected Logic", "Variable Masking", "Probability Mapping"], ans: 0 },

    // --- DEFINITIONS & CHARACTERISTICS ---
    { q: "Which term is an alias for a Random Variable?", options: ["Static Variable", "Stochastic Variable", "Constant Variable", "Linear Variable"], ans: 1 },
    { q: "In a Binomial experiment, what happens to the probability of success for each trial?", options: ["It increases", "It decreases", "It remains fixed", "It doubles"], ans: 2 },
    { q: "The 'summation of each value of the variable multiplied by its probability' defines the:", options: ["Variance", "Median", "Mean of a probability distribution", "Standard Deviation"], ans: 2 },
    { q: "Why is the sum of two dice being '1' considered a null event?", options: ["The dice are unfair", "The minimum sum possible is 2", "The probability is 1/36", "It is a continuous variable"], ans: 1 },
    { q: "Which of the following describes a 'Discrete Random Variable' outcome?", options: ["Uncountable", "Countable", "Interval-based", "Infinite decimals"], ans: 1 }
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