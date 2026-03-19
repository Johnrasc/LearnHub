// ==========================================
//  SOFTWARE DESIGN (Midterm)
// ==========================================
const questionsData = [
    { q: "Which characteristic of bad design describes software that is hard to change because one change affects many other parts?", options: ["Fragility", "Immobility", "Rigidity", "Complexity"], ans: 2 },
    { q: "According to Robert Martin, what is 'Fragility' in software architecture?", options: ["Hard to reuse modules", "Unexpected parts of the software break when changes are applied", "The software cannot be extracted from the current system", "The software is too large to compile"], ans: 1 },
    { q: "The 'Immobility' of a software design refers to the difficulty of:", options: ["Changing source code", "Testing the system", "Reusing modules in another software", "Fixing accidental errors"], ans: 2 },
    { q: "Who arranged the five software design principles into the acronym SOLID?", options: ["Robert Martin", "Michael Feathers", "Barbara Liskov", "Ralph Johnson"], ans: 1 },
    { q: "The Single Responsibility Principle (SRP) states that a class should have only one:", options: ["Method", "Reason to change", "Instance variable", "Inheritance level"], ans: 1 },
    { q: "In the SRP, what is considered the 'reason to change'?", options: ["A bug in the code", "A new compiler version", "The needs of a specific user or actor", "A hardware upgrade"], ans: 2 },
    { q: "Which principle states that classes should be 'open for extension but closed for modification'?", options: ["SRP", "OCP", "LSP", "ISP"], ans: 1 },
    { q: "The Liskov Substitution Principle (LSP) suggests that derived classes must be ______ for their base classes.", options: ["Hidden", "Substitutable", "Independent", "Abstracted"], ans: 1 },
    { q: "Which principle advises designers to avoid depending on things (methods/interfaces) that they do not use?", options: ["Interface Segregation Principle (ISP)", "Dependency Inversion Principle (DIP)", "Open-Closed Principle (OCP)", "Single Responsibility Principle (SRP)"], ans: 0 },
    { q: "The Dependency Inversion Principle (DIP) suggests that flexible software depends on:", options: ["Concrete classes", "Specific pieces of code", "Abstract classes or interfaces", "Global variables"], ans: 2 },
    { q: "Design patterns are best described as:", options: ["Specific pieces of code", "Reusable solutions to common design problems", "Programming languages", "Automatic code generators"], ans: 1 },
    { q: "Which feature of a design pattern explains 'when to use' the pattern and its context?", options: ["Pattern Name", "Problem", "Solution", "Consequences"], ans: 1 },
    { q: "The 'Consequences' feature of a design pattern includes:", options: ["The list of methods", "The context of the problem", "Results and tradeoffs like flexibility and extensibility", "The names of the developers"], ans: 2 },
    { q: "Which category of design patterns deals specifically with object creation mechanisms?", options: ["Structural Patterns", "Behavioral Patterns", "Creational Patterns", "Architectural Patterns"], ans: 2 },
    { q: "Patterns that describe how to assemble objects into larger structures while remaining flexible are:", options: ["Creational", "Structural", "Behavioral", "Singleton"], ans: 1 },
    { q: "Which pattern ensures that a class has only one instance and provides a global access point?", options: ["Factory Method", "Prototype", "Singleton", "Builder"], ans: 2 },
    { q: "The Singleton pattern violates which SOLID principle because it solves two problems at once?", options: ["SRP", "OCP", "LSP", "DIP"], ans: 0 },
    { q: "To implement a Singleton, you must make the default constructor:", options: ["Public", "Protected", "Private", "Static"], ans: 2 },
    { q: "Which pattern provides an interface for creating objects but lets subclasses alter the type of object created?", options: ["Abstract Factory", "Factory Method", "Builder", "Adapter"], ans: 1 },
    { q: "In the Factory Method pattern, the objects returned by the factory are often called:", options: ["Creators", "Prototypes", "Products", "Singletons"], ans: 2 },
    { q: "Which pattern allows you to copy existing objects without making code dependent on their classes?", options: ["Prototype", "Singleton", "Abstract Factory", "Adapter"], ans: 0 },
    { q: "A 'Prototype Registry' is used to:", options: ["Create new classes", "Store a set of pre-built objects ready to be cloned", "Delete unused objects", "Convert XML to JSON"], ans: 1 },
    { q: "The Abstract Factory pattern allows for the production of families of ______ objects.", options: ["Independent", "Related", "Static", "Global"], ans: 1 },
    { q: "Which pattern is best suited for constructing complex objects step-by-step using the same construction code?", options: ["Factory Method", "Prototype", "Builder", "Singleton"], ans: 2 },
    { q: "In the Builder pattern, which class defines the order of executing the building steps?", options: ["Product", "ConcreteBuilder", "Director", "Client"], ans: 2 },
    { q: "The Builder pattern is a solution for when a constructor has too many ______.", options: ["Methods", "Parameters", "Subclasses", "Interfaces"], ans: 1 },
    { q: "Which structural pattern allows objects with incompatible interfaces to collaborate?", options: ["Adapter", "Bridge", "Composite", "Decorator"], ans: 0 },
    { q: "An Adapter works by ______ one of the objects to hide the complexity of conversion.", options: ["Deleting", "Cloning", "Wrapping", "Extending"], ans: 2 },
    { q: "If a third-party library only uses JSON but your app uses XML, which pattern should you use?", options: ["Singleton", "Factory Method", "Adapter", "Builder"], ans: 2 },
    { q: "Object Adapters use the principle of ______ to implement their functionality.", options: ["Multiple Inheritance", "Object Composition", "Global Variables", "Back Substitution"], ans: 1 },
    { q: "What is the primary benefit of following SOLID principles?", options: ["Make code run faster", "Make software easier to change when requirements change", "Eliminate the need for documentation", "Reduce the size of the executable file"], ans: 1 },
    { q: "In the Prototype pattern, the cloning process is delegated to:", options: ["The Client class", "The actual objects being cloned", "A special Factory class", "The Director"], ans: 1 },
    { q: "Design patterns are used as ______ that developers can customize to solve recurring problems.", options: ["Final products", "Compilers", "Templates or blueprints", "Operating systems"], ans: 2 },
    { q: "Which creational pattern uses a 'static creation method' as the only way to get an object?", options: ["Builder", "Singleton", "Abstract Factory", "Adapter"], ans: 1 },
    { q: "Structural design patterns are mostly about ______ classes together to coordinate work.", options: ["Isolating", "Grouping", "Deleting", "Inheriting"], ans: 1 }
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
