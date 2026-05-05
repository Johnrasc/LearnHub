// ==========================================
// DATASET: ETHICS (Prefinals)
// ==========================================
const questionsData = [
    // --- FINANCIAL MANAGEMENT & START-UP COSTS ---
    { q: "Which cost category includes expenditures like market research and legal fees incurred before a business begins operations?", options: ["At-Launch Costs", "Growth Costs", "Pre-Launch Costs", "Operational Costs"], ans: 2 },
    { q: "What term refers to the rate at which a startup consumes its cash reserves, usually measured monthly?", options: ["Churn Rate", "Burn Rate", "Growth Rate", "Interest Rate"], ans: 1 },
    { q: "Which of the following is an example of an 'At-Launch' cost?", options: ["Business Plan Development", "Grand opening events", "Office lease deposits", "Product prototyping"], ans: 1 },
    { q: "Financial sustainability is summarized by which principle?", options: ["CAC > CLV", "CLV > CAC", "COGS > Revenue", "Burn Rate > ARPU"], ans: 1 },
    { q: "What are the direct costs attributable to the production of goods or delivery of services?", options: ["Operating Expenses", "Capital Expenditures", "Cost of Goods Sold", "Fixed Costs"], ans: 2 },
    { q: "Which metric represents the level of sales where total revenues equal total costs?", options: ["Gross Margin", "Net Profit", "Break-Even Point", "EBITDA"], ans: 2 },

    // --- FINANCIAL PROJECTIONS & STATEMENTS ---
    { q: "Which financial statement tracks projected cash inflows and outflows from operating, investing, and financing activities?", options: ["Income Statement", "Balance Sheet", "Cash Flow Statement", "Retained Earnings Statement"], ans: 2 },
    { q: "A 'Pro-forma' version of which document shows projected assets, liabilities, and equity at a specific point in time?", options: ["Income Statement", "Balance Sheet", "Cash Flow Statement", "Budget Plan"], ans: 1 },
    { q: "What analytical tool examines how changes in key assumptions like pricing impact financial outcomes?", options: ["Break-Even Analysis", "Profitability Analysis", "Sensitivity Analysis", "Trend Analysis"], ans: 2 },
    { q: "Which metric is calculated by dividing Net Income by Net Revenue?", options: ["Gross Margin", "Profit Margin", "Burn Rate", "ARPU"], ans: 1 },
    { q: "What does Customer Lifetime Value (CLV) measure?", options: ["Cost to acquire one customer", "Total revenue generated per active user", "Total revenue a customer generates throughout the relationship", "Percentage of customers who stop using a service"], ans: 2 },

    // --- BOOTSTRAPPING & FUNDING OPTIONS ---
    { q: "What is 'Bootstrapping' in the context of a startup?", options: ["Securing Venture Capital", "Funding via personal savings or business revenue", "Taking a traditional bank loan", "Crowdfunding from the public"], ans: 1 },
    { q: "Which funding source is typically associated with the 'Seed Stage'?", options: ["IPO", "Angel Investors", "Private Equity Firms", "Corporate Acquirers"], ans: 1 },
    { q: "What is a 'SAFE' or 'Convertible Note' used for?", options: ["Immediate equity dilution", "Traditional bank collateral", "Raising capital while deferring valuation", "Paying employee salaries"], ans: 2 },
    { q: "Which company is cited as a successful example of a bootstrapped business?", options: ["Grab", "Mailchimp", "PayMaya", "TikTok"], ans: 1 },
    { q: "What is the primary funding source for a startup during the 'Series A' stage?", options: ["Friends & Family", "Crowdfunding", "Venture Capital firms", "Government grants"], ans: 2 },

    // --- CO-FOUNDERS & MENTORS ---
    { q: "What is the term for the division of ownership shares among partners in a business?", options: ["Due Diligence", "Equity Split", "Venture Debt", "Capital Expenditure"], ans: 1 },
    { q: "Which process involves thoroughly investigating a potential investment to minimize risks?", options: ["Sensitivity Analysis", "Due Diligence", "Market Validation", "Pitching"], ans: 1 },
    { q: "According to the text, what is a leading cause of startup failure?", options: ["Lack of a website", "Co-founder conflict", "High interest rates", "Using freelancers"], ans: 1 },
    { q: "What is the primary role of a mentor for a startup founder?", options: ["Sharing financial risks", "Building the MVP", "Providing guidance and industry insights", "Managing daily operations"], ans: 2 },
    { q: "When is an appropriate time to recruit a co-founder?", options: ["Only after the IPO", "When critical skill gaps are identified", "Only after 5 years of operation", "When the founder wants to retire"], ans: 1 },

    // --- BUILDING AN INITIAL TEAM ---
    { q: "What is a 'Balanced Team' in a startup environment?", options: ["A team where everyone has the same degree", "A team with diverse skills, perspectives, and expertise", "A team composed only of family members", "A team where everyone works part-time"], ans: 1 },
    { q: "Why might a startup utilize 'Gig Workers' or freelancers?", options: ["To ensure long-term employment loyalty", "To handle specialized tasks with cost efficiency", "To replace the founding team", "To avoid all legal registrations"], ans: 1 },
    { q: "Which of the following is NOT a key element of a healthy startup culture?", options: ["Open Communication", "Diversity and Inclusion", "Groupthink and resistance to change", "Flexibility and Autonomy"], ans: 2 },
    { q: "What resource connects startups with mentors, office space, and legal support?", options: ["Stock Market", "Startup Incubator", "Bank", "Social Media"], ans: 1 },

    // --- SCALING & THE VALLEY OF DEATH ---
    { q: "The 'Valley of Death' typically occurs during which transition?", options: ["Ideation to Prototype", "Early traction to sustainable revenue", "IPO to Acquisition", "Pre-seed to Seed"], ans: 1 },
    { q: "What is a 'Minimum Viable Product' (MVP)?", options: ["A final polished product for global launch", "A product with only essential features to test in the market", "A prototype that doesn't actually work", "A business plan without a product"], ans: 1 },
    { q: "Which metric tracks the percentage of customers who stop using your product?", options: ["Burn Rate", "Churn Rate", "NPS", "Gross Margin"], ans: 1 },
    { q: "As a startup scales, how should the founder's leadership role evolve?", options: ["Doing every task themselves", "Focusing on vision while delegating responsibilities", "Reducing communication with the team", "Avoiding all financial data"], ans: 1 },

    // --- PERSUASIVE STORYTELLING & PITCHING ---
    { q: "What is 'Traction' in a startup pitch?", options: ["The weight of the hardware", "Measurable proof the startup is gaining momentum", "The speed of the office internet", "The number of slides in a deck"], ans: 1 },
    { q: "What is the '10-20-30 Rule' for pitch presentations?", options: ["10 team members, 20 slides, 30 minutes", "10 slides, 20 minutes, 30-point font", "10 goals, 20 years, 30 investors", "10% equity, 20% growth, 30% profit"], ans: 1 },
    { q: "A 30-second to 2-minute persuasive summary of a business is called a/an:", options: ["Tagline Pitch", "Full Pitch", "Elevator Pitch", "Technical Manual"], ans: 2 },
    { q: "Which 'Pillar of Pitching' involves tailoring the presentation to specific interests?", options: ["Know Your Audience", "Tell Your Story", "Understand Your Metrics", "Deliver Powerful Points"], ans: 0 },
    { q: "What is a 'Tagline Pitch'?", options: ["A 20-slide presentation", "A short, memorable phrase summarizing core value", "A detailed financial spreadsheet", "A contract for investors"], ans: 1 },
    { q: "What is the primary goal of persuasive storytelling in startups?", options: ["To hide financial risks", "To make complex ideas relatable and inspiring", "To replace the need for a business model", "To extend the pitch time"], ans: 1 }
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