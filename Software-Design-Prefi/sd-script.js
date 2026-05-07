// ==========================================
//  SOFTWARE DESIGN (Prefinals)
// ==========================================
const questionsData = [
    // --- SOFTWARE QUALITY ASSURANCE BASICS ---
    { q: "What is defined as the degree to which a software product meets gathered requirements?", options: ["Software Quality", "Technical Debt", "Prototyping", "Integration"], ans: 0 },
    { q: "Which process defines and assesses the adequacy of software processes to establish confidence in product quality?", options: ["Software Testing", "Software Quality Assurance", "Coding", "Marketing"], ans: 1 },
    { q: "What term refers to the high cost of maintaining and developing poor-quality software over the long term?", options: ["Legal Debt", "Software Tax", "Technical Debt", "Certification Cost"], ans: 2 },
    { q: "Which of the following is NOT a reason that drives software quality assurance?", options: ["Reputation", "Technical Debt", "Legality", "Increasing Marketing Budget"], ans: 3 },
    { q: "Why is reputation important for software developers and organizations?", options: ["It reduces taxes", "Software bugs can have immediate negative impacts on clients", "It guarantees zero bugs", "It replaces the need for testing"], ans: 1 },

    // --- PROTOTYPING ---
    { q: "What is a preliminary version of a software system used to demonstrate concepts and try out design options?", options: ["Beta Version", "Final Release", "Prototype", "Patch"], ans: 2 },
    { q: "In which process is a prototype used to help stakeholders understand the system to be developed?", options: ["Maintenance", "Evolutionary Prototyping", "Coding", "Deployment"], ans: 1 },
    { q: "What is the main purpose of 'Throw-away Prototyping'?", options: ["To become the final system", "To clarify requirements and reduce risks", "To save storage space", "To replace the developer"], ans: 1 },
    { q: "Prototyping reduces risk by revealing errors and omissions in which phase?", options: ["Requirements", "Closing", "Marketing", "Billing"], ans: 0 },
    { q: "What happens to a 'Throw-away' prototype after the requirements are finalized?", options: ["It is sold to customers", "It is discarded", "It is used as the database", "It is patented"], ans: 1 },

    // --- SOFTWARE REVIEW AND INSPECTION ---
    { q: "What is a formal or informal meeting where software is presented to a group of people for comment?", options: ["Software Review", "Daily Standup", "Board Meeting", "Code Sprint"], ans: 0 },
    { q: "Which type of review is highly formal and involves a team of people with specific roles like 'Moderator'?", options: ["Technical Review", "Management Review", "Software Inspection", "Informal Walkthrough"], ans: 2 },
    { q: "In a software inspection, who is responsible for leading the meeting and ensuring the checklist is followed?", options: ["Reader", "Moderator", "Author", "Recorder"], ans: 1 },
    { q: "What is the primary objective of a Software Review?", options: ["To find defects and check quality", "To fire underperforming staff", "To increase code length", "To delay the project"], ans: 0 },
    { q: "Who in the inspection team presents the code or document to the others?", options: ["The Manager", "The Moderator", "The Reader", "The Client"], ans: 2 },
    { q: "What is the role of the 'Recorder' in a formal inspection?", options: ["To fix the bugs", "To record identified defects", "To read the code aloud", "To manage the budget"], ans: 1 },

    // --- READING TECHNIQUES ---
    { q: "Which reading technique involves simply reading through the software artifact sequentially?", options: ["Checklist-based", "Ad-hoc Reading", "Scenario-based", "Perspective-based"], ans: 1 },
    { q: "What technique uses a list of questions to guide the reviewer's focus on common defects?", options: ["Checklist-based Reading", "Ad-hoc Reading", "Perspective-based Reading", "Code Analysis"], ans: 0 },
    { q: "In which technique do reviewers take on the role of different stakeholders (e.g., end-user, designer)?", options: ["Ad-hoc", "Perspective-based Reading", "Defect-based", "Sequential"], ans: 1 },
    { q: "Scenario-based reading is useful for finding specific types of defects by providing what?", options: ["A list of names", "Specific instructions or scenarios", "A new computer", "Free coffee"], ans: 1 },
    { q: "What is a disadvantage of Ad-hoc reading?", options: ["It is too formal", "It lacks structure and may miss significant defects", "It requires too many tools", "It is very expensive"], ans: 1 },

    // --- CONTINUOUS INTEGRATION (CI) ---
    { q: "What practice involves developers merging their changes into a central repository several times a day?", options: ["Waterfall", "Continuous Integration", "Manual Deployment", "Isolated Development"], ans: 1 },
    { q: "In CI, what is automatically triggered after a developer pushes their code?", options: ["A coffee break", "An automated build and test", "A meeting", "The project deadline"], ans: 1 },
    { q: "What is a key benefit of Continuous Integration?", options: ["It prevents all bugs", "It allows for faster detection of integration errors", "It removes the need for developers", "It makes the software free"], ans: 1 },
    { q: "The 'mainline' in CI refers to what?", options: ["The power cord", "The central shared branch of the code", "The internet provider", "The office floor plan"], ans: 1 },
    { q: "What does CI stand for?", options: ["Computer Integration", "Continuous Integration", "Coding Instruction", "Control Interface"], ans: 1 },

    // --- GIT & VERSION CONTROL ---
    { q: "What is a commonly used distributed version control system mentioned in the reviewer?", options: ["Word", "Git", "Excel", "Photoshop"], ans: 1 },
    { q: "What command is used to take a local copy of a remote repository?", options: ["Delete", "Clone", "Push", "Format"], ans: 1 },
    { q: "What is a 'Commit' in version control?", options: ["A promise to work harder", "A saved snapshot of changes in the repository", "A system crash", "An email to the boss"], ans: 1 },
    { q: "What does 'Pushing' mean in Git?", options: ["Deleting the code", "Uploading local commits to a remote repository", "Closing the laptop", "Forcefully closing a program"], ans: 1 },
    { q: "What is the process of creating a separate line of development in Git called?", options: ["Merging", "Branching", "Cloning", "Staging"], ans: 1 },

    // --- PULL REQUESTS & DEVELOPMENT WORKFLOW ---
    { q: "What is a 'Pull Request'?", options: ["A request to delete code", "A proposal to merge changes into a repository", "A request for a salary increase", "A way to download music"], ans: 1 },
    { q: "In a pull-based development workflow, who examines and integrates the proposed changes?", options: ["The Intern", "The Integrator", "The Janitor", "The Customer"], ans: 1 },
    { q: "What is the first step a developer takes in a pull-based workflow if they lack push privileges?", options: ["Ask for a password", "Fork or clone the repository", "Call the manager", "Quit the job"], ans: 1 },
    { q: "A 'Fork' in Git is essentially a:", options: ["Tool for eating", "Personal copy of someone else's project", "Bug in the system", "Type of hardware"], ans: 1 },
    { q: "What is the primary benefit of Pull Requests for quality assurance?", options: ["They make coding slower", "They allow for peer review before code is merged", "They hide the code", "They prevent developers from working"], ans: 1 },

    // --- MISCELLANEOUS QA CONCEPTS ---
    { q: "Why might an organization require software certification?", options: ["To look cool", "As evidence of quality control for legal or safety reasons", "To increase electricity costs", "To use more paper"], ans: 1 },
    { q: "Which type of prototyping is intended to be evolved into the final system?", options: ["Throw-away", "Evolutionary", "Paper", "Static"], ans: 1 },
    { q: "Formal inspections are often more effective at finding defects than what?", options: ["Informal reviews", "Writing code", "Sleeping", "Unit testing alone"], ans: 0 },
    { q: "The person who created the document being inspected is known as the:", options: ["Reader", "Moderator", "Author", "Scribe"], ans: 2 },
    { q: "What is a 'Checklist' in the context of software review?", options: ["A grocery list", "A set of standard items to verify for quality and errors", "A list of employee names", "A list of office rules"], ans: 1 },
    { q: "What is the main risk of not performing Software Quality Assurance?", options: ["Higher profits", "Unreliable products and loss of reputation", "Faster development", "More vacation time"], ans: 1 },
    { q: "In the CI process, if a 'Build' fails, what should the team do?", options: ["Ignore it", "Fix the issue immediately", "Delete the repository", "Wait for the next day"], ans: 1 },
    { q: "Peer review falls under which category of QA?", options: ["Management", "Software Review", "Marketing", "Human Resources"], ans: 1 },
    { q: "What does the 'Integrator' do with a Pull Request?", options: ["Ignores it", "Reviews and integrates it into the main code", "Deletes it", "Sends it to the client"], ans: 1 }
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