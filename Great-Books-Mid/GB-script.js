// ==========================================
// DATASET: Great Books (Midterm)
// ==========================================
const questionsData = [
    // --- CLASSICAL LITERATURE ---
    { q: "Classical literature refers to the enduring works of ancient Greece and Rome produced between:", options: ["1000 BCE–100 CE", "500 BCE–500 CE", "500 CE–1500 CE", "100 CE–400 CE"], ans: 1 },
    { q: "Which of the following is NOT a main form of Classical Literature mentioned in the handout?", options: ["Drama", "Philosophy", "Lyric Poetry", "Chivalric Romance"], ans: 3 },
    { q: "This ancient Greek playwright is best known for his Theban plays, including Antigone:", options: ["Plato", "Sophocles", "Sappho", "Socrates"], ans: 1 },
    { q: "In the play Antigone, the protagonist disobeys the king to bury her:", options: ["Father", "Husband", "Brother", "Son"], ans: 2 },
    { q: "Who founded 'The Academy' (Platonic Academy) in Athens?", options: ["Socrates", "Aristotle", "Plato", "Sophocles"], ans: 2 },
    { q: "Which work by Plato explores justice, the ideal state, and the journey from ignorance to knowledge?", options: ["The Republic", "Antigone", "The Prince", "Utopia"], ans: 0 },
    { q: "This ancient Greek poet from Lesvos focused on personal themes like love, longing, and identity:", options: ["Sophocles", "Sappho", "Homer", "Virgil"], ans: 1 },
    { q: "Classical Drama often uses these two elements to reflect on the consequences of choices:", options: ["Action and Mystery", "Tragic or Comedic", "Epic and Lyric", "Prose and Verse"], ans: 1 },
    { q: "Studying Classical Literature helps us understand the foundations of:", options: ["Eastern Philosophy", "Western Civilization", "Medieval Feudalism", "The Industrial Revolution"], ans: 1 },
    { q: "Plato was a student of which famous philosopher?", options: ["Aristotle", "Sophocles", "Socrates", "Sappho"], ans: 2 },

    // --- MEDIEVAL LITERATURE ---
    { q: "The Middle Ages is a period spanning approximately:", options: ["500 BCE–500 CE", "500 CE–1500 CE", "1300 CE–1600 CE", "100 CE–400 CE"], ans: 1 },
    { q: "Medieval literature is characterized by a strong influence from:", options: ["The Industrialists", "The Military", "The Church", "Classical Humanists"], ans: 2 },
    { q: "In Medieval literature, what form uses characters and objects to symbolize deeper spiritual meanings?", options: ["Epic", "Allegory", "Drama", "Lyric Poetry"], ans: 1 },
    { q: "Dante Alighieri’s 'The Divine Comedy' is an epic allegory of the soul's journey toward:", options: ["Rome", "Dharma", "God", "Exile"], ans: 2 },
    { q: "Which part of the soul's journey in The Divine Comedy represents Hell?", options: ["Purgatorio", "Paradiso", "Inferno", "Everyman"], ans: 2 },
    { q: "This 15th-century English morality play features a character who must account for his life before God:", options: ["Sir Gawain", "Antigone", "Everyman", "Hamlet"], ans: 2 },
    { q: "Chivalry in Medieval literature focuses on which social group?", options: ["Knights", "Philosophers", "Peasants", "Monks"], ans: 0 },
    { q: "Who is the credited (though anonymous) author of 'Sir Gawain and the Green Knight'?", options: ["Dante Alighieri", "The Pearl Poet", "Geoffrey Chaucer", "William Shakespeare"], ans: 1 },
    { q: "The Divine Comedy emphasizes two major concepts regarding humans:", options: ["Reason and Creativity", "Responsibility and Divine Justice", "Honor and Chivalry", "Madness and Grief"], ans: 1 },
    { q: "Which Medieval theme highlights bravery, loyalty, and social codes of the aristocracy?", options: ["Humanism", "Individualism", "Chivalry", "Philosophy"], ans: 2 },

    // --- RENAISSANCE LITERATURE ---
    { q: "The Renaissance period occurred roughly during:", options: ["500–1500 CE", "1300–1600 CE", "500 BCE–500 CE", "1600–1800 CE"], ans: 1 },
    { q: "Unlike the Middle Ages, Renaissance literature emphasizes:", options: ["Collective ideals", "Individual experience", "Religious dominance", "Feudal structures"], ans: 1 },
    { q: "Which Renaissance 'ism' focuses on the potential of humans to reason and shape their world?", options: ["Feudalism", "Humanism", "Individualism", "Stoicism"], ans: 1 },
    { q: "Who wrote 'Oration on the Dignity of Man'?", options: ["Baldassare Castiglione", "Giovanni Pico della Mirandola", "William Shakespeare", "Niccolò Machiavelli"], ans: 1 },
    { q: "This work highlights manners, skills, and moral character as ways to excel in society:", options: ["The Republic", "The Book of the Courtier", "Everyman", "The Prince"], ans: 1 },
    { q: "Who wrote 'The Book of the Courtier'?", options: ["Giovanni Pico della Mirandola", "William Shakespeare", "Baldassare Castiglione", "Sophocles"], ans: 2 },
    { q: "In Renaissance Drama, what form presents stories of human suffering and the consequences of choices?", options: ["Comedy", "Tragedy", "Satire", "Epic"], ans: 1 },
    { q: "Shakespeare’s 'Romeo and Juliet' is an example of which Renaissance form?", options: ["Epic Poetry", "Philosophy", "Drama (Tragedy)", "Allegory"], ans: 2 },
    { q: "Renaissance literature revived learning from which era?", options: ["Ancient Egypt", "Classical Greece and Rome", "The Dark Ages", "The Victorian Era"], ans: 1 },
    { q: "The 'Oration on the Dignity of Man' reflects Renaissance optimism about:", options: ["Divine intervention", "Human capabilities", "The fall of the Church", "Military conquest"], ans: 1 },

    // --- MAHABHARATA ---
    { q: "The Mahabharata is an ancient Indian epic attributed to:", options: ["Krishna", "Vyasa", "Arjuna", "Valmiki"], ans: 1 },
    { q: "The Mahabharata was passed down in this way before being written:", options: ["Through secret scrolls", "Orally", "In Latin texts", "On stone tablets"], ans: 1 },
    { q: "What does the symbolism in the Mahabharata primarily represent?", options: ["Love and Hate", "Dharma and Karma", "Heaven and Hell", "Wealth and Poverty"], ans: 1 },
    { q: "The epic is set around which ancient cities in northern India?", options: ["Ayodhya and Mathura", "Hastinapur and Indraprastha", "Mumbai and Delhi", "Pataliputra"], ans: 1 },
    { q: "What literary device is used in the Mahabharata to dramatize battles?", options: ["Soliloquies", "Epic similes", "Moralities", "Lyric stanzas"], ans: 1 },
    { q: "Modern-day Meerut district is the site of which ancient city?", options: ["Indraprastha", "Hastinapur", "Elsinore", "Athens"], ans: 1 },
    { q: "The rivalry in the Mahabharata is between which two groups of cousins?", options: ["Greeks and Romans", "Pandavas and Kauravas", "Danes and Norwegians", "Knights and Earls"], ans: 1 },
    { q: "Who is the eldest Pandava, known for being wise and just?", options: ["Bhima", "Arjuna", "Yudhishthira", "Nakula"], ans: 2 },
    { q: "Which Pandava is known as an extremely strong and courageous warrior?", options: ["Arjuna", "Sahadeva", "Bhima", "Duryodhana"], ans: 2 },
    { q: "Who is the skilled archer guided by Krishna?", options: ["Arjuna", "Karna", "Abhimanyu", "Nakula"], ans: 0 },
    { q: "Whose humiliation in the Kaurava court sparks the conflict leading to war?", options: ["Gandhari", "Kunti", "Draupadi", "Satyavati"], ans: 2 },
    { q: "Who is the leader of the Kauravas, described as ambitious and envious?", options: ["Shakuni", "Karna", "Duryodhana", "Bhishma"], ans: 2 },
    { q: "This warrior is allied with the Kauravas but meets a tragic end in battle:", options: ["Arjuna", "Karna", "Abhimanyu", "Yudhishthira"], ans: 1 },
    { q: "Who is the divine guide who teaches duty and righteousness to the Pandavas?", options: ["Vyasa", "Ganga", "Krishna", "Shantanu"], ans: 2 },
    { q: "Who is the uncle of Duryodhana that cheats the Pandavas in a dice game?", options: ["Bhishma", "Shakuni", "Karna", "Drona"], ans: 1 },
    { q: "Where does the climax of the Mahabharata occur?", options: ["The Forest of Exile", "The Kaurava Court", "The Kurukshetra war", "The Palace of Indraprastha"], ans: 2 },
    { q: "According to the POV section, the Mahabharata is told from which perspective?", options: ["First-person", "Third-person limited", "Third-person omniscient", "Dramatic POV"], ans: 2 },
    { q: "Which character struggles with 'Character vs. Self' until guided by Krishna?", options: ["Duryodhana", "Arjuna", "Karna", "Shakuni"], ans: 1 },
    { q: "What is the moral of the Mahabharata regarding personal gain?", options: ["Personal gain is the goal of life", "Upholding dharma is more important", "Revenge is necessary", "Wealth brings happiness"], ans: 1 },
    { q: "In the resolution, what happens to the Pandavas?", options: ["They are exiled forever", "They reclaim their kingdom", "They become monks", "They lose the war"], ans: 1 },
    { q: "Dharma is the highest virtue is a passage attributed to whom?", options: ["Krishna", "Arjuna", "Yudhishthira", "Vyasa"], ans: 2 },
    { q: "King Shantanu had sons with which goddess of the river?", options: ["Saraswati", "Ganga", "Yamuna", "Lakshmi"], ans: 1 },

    // --- HAMLET ---
    { q: "Hamlet is a tragic play set in Elsinore Castle, located in:", options: ["Norway", "England", "Denmark", "Italy"], ans: 2 },
    { q: "Who murdered King Hamlet to take the throne?", options: ["Laertes", "Polonius", "Claudius", "Fortinbras"], ans: 2 },
    { q: "This character is Hamlet's love interest who descends into madness:", options: ["Gertrude", "Ophelia", "Beatrice", "Desdemona"], ans: 1 },
    { q: "Who is the meddling advisor to the king and father of Laertes?", options: ["Horatio", "Claudius", "Polonius", "Rosencrantz"], ans: 2 },
    { q: "Who is the loyal friend of Hamlet that survives to tell his story?", options: ["Laertes", "Fortinbras", "Horatio", "Guildenstern"], ans: 2 },
    { q: "This Prince of Norway becomes king after the tragedy at Elsinore:", options: ["Hamlet", "Claudius", "Fortinbras", "Laertes"], ans: 2 },
    { q: "Shakespeare uses these alone-on-stage speeches to reveal a character's inner thoughts:", options: ["Dialogue", "Soliloquies", "Epics", "Sonnets"], ans: 1 },
    { q: "The castle in Hamlet feels dark and tense, reflecting death, grief, and:", options: ["Chivalry", "Corruption", "Humanism", "Comedy"], ans: 1 },
    { q: "Hamlet pretends to be mad in order to:", options: ["Escape the castle", "Win Ophelia's heart", "Observe and uncover Claudius's guilt", "Become the King of Norway"], ans: 2 },
    { q: "Hamlet stages a play to 'catch the conscience' of which character?", options: ["Gertrude", "Claudius", "Polonius", "Laertes"], ans: 1 },
    { q: "How does Hamlet die?", options: ["By his own hand", "By drinking poison", "Wounds from a poisoned duel", "Old age"], ans: 2 },
    { q: "The theme 'Madness and Grief' is reflected in the breakdown of which character?", options: ["Gertrude", "Ophelia", "Horatio", "Fortinbras"], ans: 1 },
    { q: "What point of view does the play Hamlet follow?", options: ["First-person", "Third-person limited", "Dramatic point of view", "Omniscient narrator"], ans: 2 },
    { q: "Which passage begins with 'To be, or not to be: that is the question'?", options: ["Act 1, Scene 1", "Act 2, Scene 2", "Act 3, Scene 1", "Act 5, Scene 2"], ans: 2 },
    { q: "Hamlet teaches that unchecked ambition and what other trait can lead to tragedy?", options: ["Indecision", "Bravery", "Loyalty", "Wisdom"], ans: 0 },
    { q: "Who reveals the truth about King Hamlet's murder to the Prince?", options: ["Horatio", "The Ghost", "Gertrude", "Polonius"], ans: 1 },
    { q: "In the duel, Hamlet fights against which character?", options: ["Claudius", "Fortinbras", "Laertes", "Horatio"], ans: 2 },
    { q: "What is the 'play-within-a-play' intended to reveal?", options: ["Hamlet's love for Ophelia", "Claudius's crime", "Gertrude's innocence", "Polonius's spying"], ans: 1 }
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