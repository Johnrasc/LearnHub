// ==========================================
//  Engineering Data Analysis (Midterm)
// ==========================================
const questionsData = [
    // --- BIPOLAR JUNCTION TRANSISTORS (BJT) ---
    { q: "A transistor is technically a 'transfer resistor' that operates by having the output current determined by the:", options: ["Output voltage", "Input circuit current", "Supply resistance", "Magnetic field"], ans: 1 },
    { q: "The BJT is a type of transistor that indicates it has how many junctions between p-type and n-type semiconductors?", options: ["One", "Two", "Three", "Four"], ans: 1 },
    { q: "Which BJT layer is responsible for 'gathering' the charge carriers?", options: ["Emitter", "Base", "Collector", "Gate"], ans: 2 },
    { q: "In a PNP transistor, the arrow on the schematic symbol points:", options: ["Inward toward the base", "Outward from the emitter", "Directly to the collector", "Away from the junction"], ans: 0 },
    { q: "Which BJT configuration is known as a 'Voltage Follower' because it has high input impedance and low output impedance?", options: ["Common-Emitter", "Common-Base", "Common-Collector", "Common-Gate"], ans: 2 },
    { q: "A transistor works as a 'current booster' when it is functioning as a/an:", options: ["Switch", "Amplifier", "Oscillator", "Rectifier"], ans: 1 },
    { q: "Which region of BJT operation occurs when both junctions are forward-biased, making the transistor work as a closed switch?", options: ["Active Region", "Cut-off Region", "Saturation Region", "Breakdown Region"], ans: 2 },
    { q: "The BJT is considered a 'Bipolar' device because its operation involves:", options: ["Only electrons", "Only holes", "Both electrons and holes", "Neither electrons nor holes"], ans: 2 },

    // --- FIELD EFFECT TRANSISTORS (FET) ---
    { q: "Unlike the BJT, the FET is a 'uni-polar' transistor because it performs a:", options: ["Dual-channel operation", "Single-channel operation", "Triple-junction operation", "Zero-current operation"], ans: 1 },
    { q: "In a FET, the applied voltage controls the size and shape of the channel between the:", options: ["Emitter and Collector", "Base and Emitter", "Source and Drain", "Gate and Base"], ans: 2 },
    { q: "Which statement is true regarding the gain of a FET compared to a BJT?", options: ["BJT has higher current gain", "FET has higher current gain", "Both have equal gain", "FET has no gain"], ans: 1 },
    { q: "The three terminals of a Field-Effect Transistor are called:", options: ["Emitter, Base, Collector", "Gate, Source, Drain", "Anode, Cathode, Gate", "Positive, Negative, Neutral"], ans: 1 },

    // --- OSCILLATOR FUNDAMENTALS ---
    { q: "An oscillator is a circuit that generates a repetitive waveform (like a sine or square wave) using only a:", options: ["AC input", "DC energy source", "Mechanical trigger", "Magnetic resonator"], ans: 1 },
    { q: "To sustain oscillations, the feedback signal must be in phase with the input signal. This is called:", options: ["Negative Feedback", "Positive Feedback", "Neutral Feedback", "Degenerative Feedback"], ans: 1 },
    { q: "According to the Barkhausen Criterion, for a circuit to oscillate, the loop gain must be equal to:", options: ["Zero", "Less than one", "One", "Infinity"], ans: 2 },
    { q: "The specific frequency of an LC oscillator is determined by the components in its:", options: ["Power supply", "Biasing network", "Tank circuit", "Amplifier stage"], ans: 2 },
    { q: "The 'tank circuit' in an oscillator acts as an electrical resonator, storing energy in the:", options: ["Resistance", "Magnetic and Electric fields of L and C", "Transistor junctions", "DC Source"], ans: 1 },

    // --- OSCILLATOR TYPES & IDENTIFICATION ---
    { q: "Which oscillator uses a 'tapped' inductor or two inductors and one capacitor in its tank circuit?", options: ["Colpitts Oscillator", "Hartley Oscillator", "Clapp Oscillator", "Crystal Oscillator"], ans: 1 },
    { q: "The Colpitts oscillator is easily identified by its use of:", options: ["Two inductors", "A center-tapped transformer", "A capacitive voltage divider (two capacitors)", "A quartz crystal"], ans: 2 },
    { q: "Which oscillator provides the best frequency stability for high-frequency applications?", options: ["Armstrong", "Hartley", "Crystal Oscillator", "RC Phase Shift"], ans: 2 },
    { q: "A Crystal oscillator operates based on the 'Piezoelectric Effect' found in:", options: ["Silicon", "Germanium", "Quartz", "Copper"], ans: 2 },
    { q: "Which type of oscillator is typically used for low-frequency or audio-frequency (AF) ranges?", options: ["LC Oscillator", "RC Oscillator", "Crystal Oscillator", "Clapp Oscillator"], ans: 1 },
    { q: "In an RC Phase Shift oscillator, how many RC networks are typically used to achieve the required 180° phase shift?", options: ["One", "Two", "Three", "Four"], ans: 2 },

    // --- OPERATING PRINCIPLES & SYMBOLS ---
    { q: "When a transistor is used as a switch and is 'OFF' (no current flows), it is in the:", options: ["Saturation Region", "Active Region", "Cut-off Region", "Linear Region"], ans: 2 },
    { q: "The 'Q-point' (Quiescent point) is the point on the load line that represents the transistor's:", options: ["Maximum power", "Steady-state DC operating condition", "AC input peak", "Dynamic range"], ans: 1 },
    { q: "What is the primary function of the 'Base' terminal in a BJT?", options: ["To emit carriers", "To collect carriers", "To control the flow of carriers", "To provide the output voltage"], ans: 2 },
    { q: "Which oscillator uses a 'tickler coil' and transformer coupling to provide feedback?", options: ["Armstrong Oscillator", "Wien-Bridge Oscillator", "Colpitts Oscillator", "Hartley Oscillator"], ans: 0 },
    { q: "The stability of an oscillator's frequency is often measured by its:", options: ["Beta value", "Q-factor (Quality Factor)", "Alpha value", "Resistance"], ans: 1 },

    // --- COMPARISONS & CHARACTERISTICS ---
    { q: "Which of the following is a key advantage of FETs over BJTs?", options: ["Lower input impedance", "Higher input impedance", "Higher noise levels", "Smaller size only"], ans: 1 },
    { q: "In a Hartley oscillator, the frequency can be adjusted by varying the:", options: ["Supply voltage", "Capacitor in the tank circuit", "Transistor gain", "Feedback resistor"], ans: 1 },
    { q: "What happens to the output of an oscillator if the loop gain falls below 1?", options: ["Oscillations increase", "Oscillations remain constant", "Oscillations die out (damped)", "The frequency changes"], ans: 2 },
    { q: "The 'Resonant Frequency' is the frequency where:", options: ["Resistance is maximum", "Inductive and capacitive reactances are equal", "The transistor turns off", "The gain is zero"], ans: 1 },
    { q: "The common-base (CB) configuration is primarily used in:", options: ["Audio amplifiers", "High-frequency applications", "Voltage regulators", "Switching power supplies"], ans: 1 },
    { q: "A 'Crystal' in an oscillator circuit behaves like a/an:", options: ["Variable Resistor", "Extremely high-Q tuned circuit", "Battery", "Simple wire"], ans: 1 },
    { q: "Which region of the BJT is used for 'Linear' amplification?", options: ["Saturation", "Cut-off", "Active", "Breakdown"], ans: 2 }
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
