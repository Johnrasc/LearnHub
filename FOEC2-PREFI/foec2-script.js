// ==========================================
// DATASET: FOEC2 (Prefinals)
// ==========================================
const questionsData = [
    // --- AMPLIFIER CLASSES & CHARACTERISTICS ---
    { q: "Which amplifier class has a conduction angle of 360 degrees and remains active for the entire input cycle?", options: ["Class A", "Class B", "Class AB", "Class C"], ans: 0 },
    { q: "Which class uses two active devices that each conduct for 180 degrees of the cycle?", options: ["Class A", "Class B", "Class AB", "Class C"], ans: 1 },
    { q: "Which amplifier class combines properties of both Class A and Class B using an intermediate conduction angle?", options: ["Class A", "Class B", "Class AB", "Class C"], ans: 2 },
    { q: "Which amplifier class is a parallel tuned amplifier that can achieve up to 80% efficiency?", options: ["Class A", "Class B", "Class AB", "Class C"], ans: 3 },
    { q: "The term used to represent the input cycle proportion when current passes through an amplifier is:", options: ["Conduction Angle", "Amplification Stage", "Classification", "Frequency Response"], ans: 0 },
    { q: "What is the primary purpose of an amplifier?", options: ["Change wave shape", "Increase frequency", "Increase signal amplitude", "Filter noise"], ans: 2 },

    // --- GAIN CONCEPTS & DECIBELS ---
    { q: "In an electronic system, Voltage Gain is the ratio of output voltage to what other parameter?", options: ["Input Current", "Input Voltage", "Output Power", "Resistance"], ans: 1 },
    { q: "When calculating gain in decibels for voltage or current, what multiplier is used with the logarithm?", options: ["Multiplied by 10", "Multiplied by 15", "Multiplied by 20", "Multiplied by 30"], ans: 2 },
    { q: "If a system produces a 24mV output from a 12mV input, what is the resulting gain in decibels?", options: ["3 dB", "12 dB", "6 dB", "20 dB"], ans: 2 },
    { q: "When calculating Power Gain in decibels, what multiplier is used with the logarithm of the power ratio?", options: ["Multiplied by 5", "Multiplied by 10", "Multiplied by 20", "Multiplied by 40"], ans: 1 },
    { q: "In multistage amplifiers, the overall voltage gain is the product of what?", options: ["The sum of all individual gains", "The individual gains of each stage", "The average of all stages", "The difference between stages"], ans: 1 },
    { q: "To find the total decibel gain of a cascaded amplifier, you should perform which operation on the individual dB gains?", options: ["Multiplication", "Division", "Addition", "Subtraction"], ans: 2 },

    // --- COUPLING & MULTISTAGE ---
    { q: "Which type of coupling uses a network of resistors and capacitors to transfer signals between stages?", options: ["Direct Coupled", "Transformer Coupled", "RC Coupled", "Tuned Coupled"], ans: 2 },
    { q: "What is a major purpose of a coupling device besides transferring the AC output?", options: ["Increase gain", "Isolate the DC conditions of one stage from the next", "Reduce total power", "Increase wave frequency"], ans: 1 },
    { q: "Which coupling method connects the output of one stage directly to the input of the following stage?", options: ["RC Coupled", "Transformer Coupled", "Direct Coupled", "Impedance Coupled"], ans: 2 },
    { q: "Which coupling method is effective for transferring signals using transformer action?", options: ["Direct", "RC", "Transformer", "Bypass"], ans: 2 },

    // --- DISTORTION ---
    { q: "Which type of distortion occurs when peak values are attenuated due to incorrect biasing or clipping?", options: ["Frequency Distortion", "Phase Distortion", "Amplitude Distortion", "Harmonic Distortion"], ans: 2 },
    { q: "What occurs when the level of amplification varies with the frequency of the input signal?", options: ["Clipping", "Frequency Distortion", "Phase Distortion", "Amplitude Distortion"], ans: 1 },
    { q: "Which distortion involves a time delay between the input signal and its appearance at the output?", options: ["Amplitude", "Frequency", "Phase", "Clipping"], ans: 2 },
    { q: "Clipping off the positive or negative cycle of a signal results in which type of distortion?", options: ["Frequency Distortion", "Amplitude Distortion", "Phase Distortion", "Linear Amplification"], ans: 1 },

    // --- FILTER FUNDAMENTALS ---
    { q: "Which type of filter includes only passive components like resistors, capacitors, and inductors?", options: ["Active Filter", "Passive Filter", "Digital Filter", "Op-Amp Filter"], ans: 1 },
    { q: "Active filters can provide voltage gain and are capable of dealing with frequencies approaching:", options: ["1 MHz", "0 Hz", "1 kHz", "100 kHz"], ans: 1 },
    { q: "The cut-off frequency of a filter is often defined as the point where the signal is attenuated by how many decibels?", options: ["-1 dB", "-3 dB", "-6 dB", "-10 dB"], ans: 1 },
    { q: "A Bode Plot shows how the gain of an output responds to input signals at different:", options: ["Voltages", "Frequencies", "Currents", "Temperatures"], ans: 1 },
    { q: "What term describes the slope of the Bode plot in the attenuating range of the filter?", options: ["Passband", "Rolloff", "Bandwidth", "Stopband"], ans: 1 },

    // --- FILTER TYPES ---
    { q: "Which filter allows low-frequency signals without attenuation but rejects high-frequency signals?", options: ["High-pass", "Low-pass", "Bandpass", "Bandstop"], ans: 1 },
    { q: "A filter that allows a specific band of frequencies and blocks all others is a:", options: ["Notch Filter", "Low-pass Filter", "Bandpass Filter", "High-pass Filter"], ans: 2 },
    { q: "A Bandstop filter, which rejects signals between two cutoff frequencies, is also known as a:", options: ["Flat Filter", "Equal Ripple Filter", "Notch Filter", "Pass Filter"], ans: 2 },
    { q: "Which application uses filters to channel low frequencies to woofers and high frequencies to tweeters?", options: ["Radio communications", "DC power supplies", "Audio crossover networks", "ADC conversion"], ans: 2 },

    // --- FILTER CHARACTERISTICS ---
    { q: "Which filter characteristic is known as a 'flat filter' with an essentially flat response up to the cut-off?", options: ["Bessel", "Butterworth", "Chebyshev", "Notch"], ans: 1 },
    { q: "Which filter type is ideal for pulse applications due to its linear phase response?", options: ["Butterworth", "Chebyshev", "Bessel", "Active"], ans: 2 },
    { q: "What is a characteristic disadvantage of the Chebyshev filter?", options: ["Gentle skirt slope", "Presence of gain ripples below the cutoff", "Non-linear phase", "High noise level"], ans: 1 },
    { q: "The difference between the higher and lower cutoff frequencies in a bandpass filter is called:", options: ["Center Frequency", "Bandwidth", "Operating Point", "Passband"], ans: 1 },

    // --- CALCULATIONS (TEXT-BASED) ---
    { q: "In a low-pass filter calculation, if the resistor is 1k ohm and the capacitor is 0.22 microfarads, the cut-off is approximately:", options: ["723.4 Hz", "1.061 Hz", "5.48 kHz", "8.087 kHz"], ans: 0 },
    { q: "The center frequency of a bandpass filter is calculated as the square root of the product of which two values?", options: ["Voltage and Current", "Lower and Upper Cutoff Frequencies", "Resistance and Capacitance", "Gain and Bandwidth"], ans: 1 },
    { q: "The Quality Factor (Q) of a circuit is found by dividing the center frequency by the:", options: ["Resistance", "Capacitance", "Bandwidth", "Input Voltage"], ans: 2 }
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