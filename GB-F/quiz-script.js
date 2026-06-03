/**
 * LEARNHUB ENGINE CODES // PRODUCTION RE-PATCH v4.4
 * Clean Publication Editorial State Machine (Local Audio Edition)
 */

const questionsData = [
    { 
        q: "Which form of literature is defined as written or spoken language that follows natural speech patterns without formal structures like rhyme or meter?", 
        options: ["Poetry", "Drama", "Prose", "Epic"], 
        ans: 2,
        hint: "It is used in most everyday writing and contrasts with rhymed verse.",
        why: "Prose is written or spoken language that follows natural speech patterns and does not use a formal structure like rhyme or meter."
    },
    { 
        q: "What subgenre of fictional prose is characterized as a long, structured narrative featuring complex characters and multiple intertwined events?", 
        options: ["Short Story", "Novel", "Legend", "Myth"], 
        ans: 1,
        hint: "An example of this subgenre given in the text is 'Don Quixote' by Miguel de Cervantes.",
        why: "A novel is a long, structured narrative that features complex characters and multiple intertwined events."
    },
    { 
        q: "According to the text, what literary term refers to a short tale that features animal characters and conveys a lesson?", 
        options: ["Fable", "Fairy Tale", "Myth", "Legend"], 
        ans: 0,
        hint: "An example of this is 'The Tortoise and the Hare' by Aesop.",
        why: "A fable is a short tale that features animal characters and conveys a lesson."
    },
    { 
        q: "Which subgenre of nonfictional prose is a detailed account of a person's life story written by someone else?", 
        options: ["Autobiography", "Memoir", "Biography", "Essay"], 
        ans: 2,
        hint: "The text provides Walter Isaacson's 'Leonardo da Vinci' as an example.",
        why: "A biography is defined as a detailed account of a person's life story written by someone else."
    },
    { 
        q: "What form of poetry consists of a 14-line poem with a specific rhyme scheme, often exploring love or reflection?", 
        options: ["Haiku", "Limerick", "Ballad", "Sonnet"], 
        ans: 3,
        hint: "William Shakespeare's 'Sonnet 18' is an example mentioned in the handout.",
        why: "A sonnet is a 14-line poem with a specific rhyme scheme, often exploring love or reflection."
    },
    { 
        q: "Which poetic form is characterized as a humorous 5-line poem with an AABBA rhyme scheme?", 
        options: ["Limerick", "Free Verse", "Haiku", "Ballad"], 
        ans: 0,
        hint: "The text points to 'The Adventurous Man from Peru' as an example.",
        why: "A limerick is a humorous 5-line poem with an AABBA rhyme scheme."
    },
    { 
        q: "What genre of drama describes a serious play where the main character faces a tragic downfall or death?", 
        options: ["Comedy", "Tragedy", "Historical Drama", "Musical"], 
        ans: 1,
        hint: "Shakespeare's 'Romeo and Juliet' is classified under this genre.",
        why: "Tragedy is a serious drama where the main character faces a downfall or death."
    },
    { 
        q: "What broad category encompasses both literary elements and literary techniques used by authors to enhance storytelling?", 
        options: ["Plot Structure", "Literary Devices", "Point of View", "Genres of Prose"], 
        ans: 1,
        hint: "It is an umbrella term for components like setting, conflict, metaphor, and irony.",
        why: "Literary devices are a broad category that encompasses both literary elements and techniques used by authors to enhance storytelling."
    },
    { 
        q: "In a plot structure, what term describes the most intense point of the story where the conflict reaches its peak?", 
        options: ["Exposition", "Rising Action", "Climax", "Resolution"], 
        ans: 2,
        hint: "This is the turning point where the outcome begins to shift.",
        why: "The climax is the most intense point of the story, where the conflict reaches its peak, and the outcome begins to shift."
    },
    { 
        q: "Which type of internal conflict features a character struggling with personal doubts, emotions, or difficult decisions?", 
        options: ["Character vs. Character", "Character vs. Society", "Character vs. Self", "Character vs. Fate"], 
        ans: 2,
        hint: "This struggle happens inside the mind and highlights inner growth or change.",
        why: "In Character vs. Self internal conflict, a character struggles with personal doubts, emotions, or difficult decisions."
    },
    { 
        q: "What point of view features a narrator who knows and describes the thoughts, feelings, and actions of multiple characters?", 
        options: ["First Person", "Third Person Limited", "Third Person Omniscient", "Dramatic Point of View"], 
        ans: 2,
        hint: "The narrator acts as an all-knowing storyteller.",
        why: "Third Person Omniscient is where the narrator knows and describes the thoughts, feelings, and actions of multiple characters."
    },
    { 
        q: "Which literary technique is a direct comparison between two unlike things *without* using the words 'like' or 'as'?", 
        options: ["Symbolism", "Metaphor", "Irony", "Imagery"], 
        ans: 1,
        hint: "An example from the text is: 'The classroom was a zoo.'",
        why: "A metaphor is a direct comparison between two unlike things without using 'like' or 'as'."
    },
    { 
        q: "What type of irony occurs when the actual outcome of an event is the exact opposite of what was originally expected?", 
        options: ["Verbal Irony", "Situational Irony", "Dramatic Irony", "Cosmic Irony"], 
        ans: 1,
        hint: "The text illustrates this with an example of a fire station burning down.",
        why: "Situational Irony highlights a contrast when the actual outcome is the opposite of what was expected."
    },
    { 
        q: "Ancient literature refers to the earliest written works created before which year?", 
        options: ["500 BCE", "500 CE", "1300 CE", "1660 CE"], 
        ans: 0,
        hint: "This baseline period predates classical civilizations and includes texts inscribed on clay or papyrus.",
        why: "Ancient literature refers to the earliest written works created before 500 BCE."
    },
    { 
        q: "What term refers to the ancient practice of passing down stories, values, and knowledge through spoken words across generations?", 
        options: ["Written Records", "Oral Tradition", "Epic Poetry", "Mythology"], 
        ans: 1,
        hint: "It relies on memory and performance and risks being lost over time if not documented.",
        why: "Oral tradition is the practice of passing down stories, values, and knowledge through spoken words across generations."
    },
    { 
        q: "The word 'epic' originates from the ancient Greek word 'epos', which means both:", 
        options: ["Hero and Warrior", "God and Mortal", "Story and Poem", "History and Myth"], 
        ans: 2,
        hint: "It defines long narrative poems that recount heroic journeys.",
        why: "The word epic comes from the Greek word epos, meaning both 'story' and 'poem'."
    },
    { 
        q: "Which ancient epic is explicitly highlighted in the text as a reflection on the fragility of life, mortality, and the desire for legacy?", 
        options: ["The Iliad", "The Odyssey", "The Epic of Gilgamesh", "The Mahabharata"], 
        ans: 2,
        hint: "It is mentioned under the theme 'The Human Condition and Mortality'.",
        why: "The Human Condition and Mortality theme reflects on life and death, 'as in The Epic of Gilgamesh'."
    },
    { 
        q: "What storytelling technique does Homer use in 'The Iliad' by starting the poem right in the middle of the Trojan War action?", 
        options: ["Flashback", "In media res", "Prophecy", "Subplot"], 
        ans: 1,
        hint: "It is a Latin phrase meaning 'in the midst of things.'",
        why: "Homer begins the poem in the middle of the action, a technique called in media res."
    },
    { 
        q: "Who is described in 'The Iliad' as the Greeks' greatest warrior, known for his strength and pride?", 
        options: ["Agamemnon", "Achilles", "Patroclus", "Menelaus"], 
        ans: 1,
        hint: "He faces an internal dilemma between a long, quiet life or a short one filled with glory.",
        why: "Achilles is described as 'The Greeks' greatest warrior, known for his strength and pride'."
    },
    { 
        q: "What Trojan woman was taken by Achilles and later claimed by Agamemnon, sparking Achilles' withdrawal from battle?", 
        options: ["Helen", "Briseis", "Cinderella", "Ophelia"], 
        ans: 1,
        hint: "Her confiscation represents the primary insult that triggers the epic's initial conflict.",
        why: "Briseis was a Trojan woman taken by Achilles, later claimed by Agamemnon, sparking Achilles' anger."
    },
    { 
        q: "In 'The Iliad', who enters the battle wearing Achilles' armor and is subsequently killed by Hector?", 
        options: ["Paris", "Priam", "Patroclus", "Menelaus"], 
        ans: 2,
        hint: "He was Achilles' loyal friend and companion, whose death forced Achilles to seek revenge.",
        why: "The climax occurs when Patroclus, Achilles' companion, wears Achilles' armor... Hector kills Patroclus."
    },
    { 
        q: "Who is the King of Troy and the father of both Hector and Paris in 'The Iliad'?", 
        options: ["Priam", "Agamemnon", "Menelaus", "Achilles"], 
        ans: 0,
        hint: "He courageously visits Achilles' camp to beg for his son's desecrated body.",
        why: "King Priam is the King of Troy and father of Hector and Paris."
    },
    { 
        q: "Which line opens the important passages of 'The Iliad' listed in the text?", 
        options: ["'Victory passes back and forth between men.'", "'Sing, O Goddess, the anger of Achilles.'", "'To be, or not to be, that is the question.'", "'Human beings can be awful cruel to one another.'"], 
        ans: 1,
        hint: "It directly introduces the epic's core theme of rage.",
        why: "The first listed important passage from The Iliad is 'Sing, O Goddess, the anger of Achilles.'"
    },
    { 
        q: "What literary period spanned from 1660 to 1800 CE and focused heavily on reason, logic, social critique, and moral order?", 
        options: ["Renaissance Literature", "Enlightenment and Neoclassical Literature", "Romanticism", "Modernism"], 
        ans: 1,
        hint: "This era is also known as the Age of Reason and revived ancient classical literary forms.",
        why: "Enlightenment and Neoclassical literature (1660–1800 CE) focused on reason, logic, social critique, and moral order."
    },
    { 
        q: "Which French Enlightenment author wrote the novella 'Candide' to critique blind optimism and societal injustices?", 
        options: ["Jonathan Swift", "Voltaire", "William Wordsworth", "James Joyce"], 
        ans: 1,
        hint: "He utilized sharp reasoning, wit, and philosophy to challenge traditional authority.",
        why: "Voltaire, a French Enlightenment writer and philosopher, used his novella Candide to critique blind optimism."
    },
    { 
        q: "What literary tool did Jonathan Swift use in 'A Modest Proposal' when he ironically suggested that the poor sell children as food?", 
        options: ["Haiku", "Satire", "Ballad", "Free Verse"], 
        ans: 1,
        hint: "It employs humor, irony, and extreme exaggeration to reveal societal flaws or government indifference.",
        why: "Satire in Enlightenment literature employs humor, irony, and exaggeration... Example: Jonathan Swift wrote A Modest Proposal."
    },
    { 
        q: "Which literary period (1780–1850 CE) broke away from strict rules to emphasize intense emotion, nature, and the sublime?", 
        options: ["Neoclassicism", "Romanticism", "Realism", "Postmodernism"], 
        ans: 1,
        hint: "Writers of this era celebrated personal freedom, imagination, and individualism.",
        why: "Romanticism in literature (1780–1850 CE) emphasized emotion, nature, imagination, the sublime, and individualism."
    },
    { 
        q: "Who wrote 'I Wandered Lonely as a Cloud' to celebrate how a simple scene of daffodils can inspire joy and reflection?", 
        options: ["Percy Bysshe Shelley", "William Wordsworth", "Lord Byron", "Samuel Taylor Coleridge"], 
        ans: 1,
        hint: "He was an English Romantic poet focused on the emotional resonance of natural scenery.",
        why: "William Wordsworth, an English poet, wrote I Wandered Lonely as a Cloud to celebrate how a simple scene of daffodils can inspire joy."
    },
    { 
        q: "In Romantic literature, what concept conveys overwhelming beauty, awe, or terror, often tied to nature's vast power?", 
        options: ["Individualism", "Reason", "The Sublime", "Satire"], 
        ans: 2,
        hint: "Samuel Taylor Coleridge's 'The Rime of the Ancient Mariner' is used to evoke this precise feeling.",
        why: "The Sublime in Romanticism conveys overwhelming beauty, awe, or terror, often connected to nature or intense emotion."
    },
    { 
        q: "Who wrote the imaginative novel 'Frankenstein' to explore ambition, ethics, and the consequences of challenging natural laws?", 
        options: ["Mary Shelley", "Percy Bysshe Shelley", "Mark Twain", "Haruki Murakami"], 
        ans: 0,
        hint: "She was an English novelist married to another famous Romantic poet.",
        why: "Mary Shelley, an English novelist and the wife of Percy Bysshe Shelley, wrote Frankenstein."
    },
    { 
        q: "What point of view is utilized in Part I of Jonathan Swift's 'Gulliver's Travels'?", 
        options: ["First Person", "Third Person Limited", "Third Person Omniscient", "Dramatic Point of View"], 
        ans: 0,
        hint: "Gulliver himself serves as the narrator, recounting his own shipwreck and experiences.",
        why: "Gulliver’s Travels Part I is told from a first-person perspective."
    },
    { 
        q: "In 'Gulliver's Travels' Part I, which two tiny societies are locked in a conflict over petty court rivalries and rules?", 
        options: ["Greeks and Trojans", "Lilliput and Blefuscu", "Sparta and Troy", "Norway and Denmark"], 
        ans: 1,
        hint: "Gulliver appears as a giant relative to these miniature characters.",
        why: "The text notes conflicts between Lilliput and Blefuscu along with court rivalries."
    },
    { 
        q: "What major American river serves as the central dynamic setting for freedom and adventure in Mark Twain's masterpiece?", 
        options: ["Amazon River", "Nile River", "Mississippi River", "Thames River"], 
        ans: 2,
        hint: "Huck and Jim navigate along this waterway to escape confinement and societal rules.",
        why: "The novel is set along the Mississippi River in 19th-century America."
    },
    { 
        q: "In 'The Adventures of Huckleberry Finn', who is Jim?", 
        options: ["Huck's abusive father", "A runaway slave owned by Miss Watson", "A conman who deceives townspeople", "An imaginative friend who plans escapes"], 
        ans: 1,
        hint: "He is a compassionate and loyal character who deeply values freedom and traveling alongside Huck.",
        why: "Jim is described as 'A runaway slave owned by Miss Watson; compassionate, loyal, and values freedom'."
    },
    { 
        q: "What major internal struggle constitutes the Character vs. Self conflict for Huck Finn?", 
        options: ["Escaping his father's physical control", "Fleeing from the Duke and King", "Deciding if helping a runaway slave is morally right versus following society's laws", "Surviving a shipwreck on the river"], 
        ans: 2,
        hint: "He constantly questions his conscience regarding societal expectations versus personal loyalty to Jim.",
        why: "Under Character vs. Self conflict: 'Huck struggles internally with whether helping Jim is morally right.'"
    },
    { 
        q: "Which literary period (1890–1945 CE) broke with traditional forms to reflect fragmentation, complexity, and uncertainty?", 
        options: ["Enlightenment", "Romanticism", "Modernism", "Postmodernism"], 
        ans: 2,
        hint: "This movement rejected conventional storytelling rules to highlight individual perception.",
        why: "Modernism (1890–1945 CE) broke with traditional forms to reflect the uncertainty, fragmentation, and complexity of modern life."
    },
    { 
        q: "What technique did James Joyce use in 'Ulysses' to capture a character's continuous, flowing thoughts and feelings?", 
        options: ["Stream of Consciousness", "In media res", "Satire", "Metafiction"], 
        ans: 0,
        hint: "It acts as an experimental mechanism to bypass standard chronological narration.",
        why: "The text references experimentation in Modernism, where writers rejected conventional rules using innovative structures like stream of consciousness."
    },
    { 
        q: "In Franz Kafka's 'The Metamorphosis', what does Gregor Samsa wake up transformed into?", 
        options: ["A wealthy boss", "A giant insect", "A magical bird", "A shadow"], 
        ans: 1,
        hint: "This disturbing physical alteration symbolizes alienation and modern anxiety.",
        why: "Gregor Samsa is famously transformed into a giant insect in Kafka's masterpiece."
    },
    { 
        q: "Who utters the line, 'He was a tool of the boss, without brains or backbone,' in 'The Metamorphosis'?", 
        options: ["Gregor Samsa", "Grete Samsa", "The Chief Clerk", "The Father"], 
        ans: 1,
        hint: "This character comments on Gregor's loss of independence and blind obedience to work duty.",
        why: "The text attributes this quote explicitly: '– (Grete Samsa on her brother’s blind obedience...)'"
    },
    { 
        q: "What parallel reality is introduced in Haruki Murakami's dystopian trilogy where characters spot two moons in the sky?", 
        options: ["Lilliput", "Troy", "1Q84", "The Sublime"], 
        ans: 2,
        hint: "It is an alternate version of Tokyo in the year 1984.",
        why: "The story introduces a parallel reality called 1Q84, where subtle differences, like two moons in the sky, create a sense of unease."
    },
    { 
        q: "In Book 1 of '1Q84', what is Aomame's dual profession?", 
        options: ["Mathematics teacher and writer", "Fitness instructor and part-time assassin", "Enigmatic cult leader", "Gymnast and documentarian"], 
        ans: 1,
        hint: "She uncovers subtle changes in the world while executing a secret mission.",
        why: "Aomame is described as a 'Fitness instructor and part-time assassin'."
    },
    { 
        q: "What is the title of the mysterious manuscript written by Fuka-Eri that Tengo is asked to rewrite in '1Q84'?", 
        options: ["The Metamorphosis", "Air Chrysalis", "Sakigake", "The Little People"], 
        ans: 1,
        hint: "This work uncovers supernatural elements and alternate world influences.",
        why: "Tengo is asked to rewrite a mysterious manuscript called Air Chrysalis, written by the enigmatic Fuka-Eri."
    },
    { 
        q: "What characters in '1Q84' represent otherworldly, supernatural entities who manipulate events in hidden ways?", 
        options: ["The Lilliputians", "The Little People", "The Duke and King", "The Knights of the Round Table"], 
        ans: 1,
        hint: "They are linked closely to Fuka-Eri's manuscript and the Sakigake cult.",
        why: "The Little People are defined as 'Mysterious, otherworldly beings influencing events in subtle, supernatural ways.'"
    },
    { 
        q: "Which Shakespearean play unfolds through a dramatic point of view via character dialogue, featuring Prince Hamlet's inner soliloquies?", 
        options: ["A Midsummer Night's Dream", "Romeo and Juliet", "Hamlet", "The Crucible"], 
        ans: 2,
        hint: "It explores betrayal in Denmark after a king is murdered by his brother Claudius.",
        why: "The text analyzes Hamlet's dramatic point of view, soliloquies, and character interactions."
    },
    { 
        q: "Who is Hamlet's loyal friend who survives the tragic duel at the end of the play to preserve and tell Hamlet's story?", 
        options: ["Laertes", "Claudius", "Horatio", "Polonius"], 
        ans: 2,
        hint: "He remains the sole anchor of loyalty amidst widespread deception in the Danish court.",
        why: "In the end, Horatio, Hamlet’s loyal friend, survives to tell the story."
    },
    { 
        q: "What famous line from Hamlet's soliloquies is explicitly referenced in the text to show direct access to his inner thoughts?", 
        options: ["'Sing, O Goddess, the anger of Achilles.'", "'To be, or not to be'", "'Human beings can be awful cruel to one another.'", "'Dharma is the highest virtue.'"], 
        ans: 1,
        hint: "It is perhaps the most universally recognized philosophical quote in English drama.",
        why: "The text notes: 'However, Prince Hamlet’s soliloquies (e.g., “To be, or not to be”) provide direct access...'"
    },
    { 
        q: "In 'The Mahabharata', who delivers the vital guidance regarding performing actions with detachment to their fruits?", 
        options: ["Arjuna", "Krishna", "Yudhishthira", "Homer"], 
        ans: 1,
        hint: "This supreme teacher counsels a warrior right before the onset of the epic Kurukshetra war.",
        why: "The text quotes Krishna to Arjuna: 'Perform every action with your heart fixed on the Supreme Lord. Renounce attachment to the fruits.'"
    },
    { 
        q: "According to Yudhishthira in 'The Mahabharata', what is the highest virtue that constitutes the path to righteousness?", 
        options: ["Honor", "Dharma", "Satire", "Revenge"], 
        ans: 1,
        hint: "It demands acting justly even when it brings immense personal suffering.",
        why: "Yudhishthira states: 'Dharma is the highest virtue; to act justly, even when it brings suffering, is the path to righteousness.'"
    },
    { 
        q: "What form of prose presents facts, real events, or opinions based on truth?", 
        options: ["Fictional prose", "Nonfictional prose", "Free verse", "Tragedy"], 
        ans: 1,
        hint: "Biographies, essays, and speeches fall under this broad prose classification.",
        why: "Nonfictional prose presents facts, real events, or opinions based on truth."
    },
    { 
        q: "The text mentions that '1Q84' explores a guiding force in an important passage where Aomame says there is salvation in life if you can do what?", 
        options: ["Defeat your enemies in war", "Love someone with your whole heart", "Escape societal rules permanently", "Achieve undying glory and fame"], 
        ans: 1,
        hint: "Even if you cannot get together with that person, this emotion serves as an anchor.",
        why: "The important passage from 1Q84 states: 'If you can love someone with your whole heart, even one person, then there's salvation in life.'"
    }
];

let masterActiveArray = [];
let currentIndex = 0;
let savedUserAnswers = []; 
let availableHintTokens = 10;
let initialPlayTriggered = false;

const domQuestionText = document.getElementById('question-text');
const domOptionsContainer = document.getElementById('options-container');
const domQNum = document.getElementById('q-num');
const domProgressFill = document.getElementById('progress-fill');
const domProgressPercent = document.getElementById('progress-percent');
const domPrevBtn = document.getElementById('prevBtn');
const domNextBtn = document.getElementById('nextBtn');
const domHintBtn = document.getElementById('hintBtn');
const domHintCount = document.getElementById('hint-count');
const domHintContentBox = document.getElementById('hintContentBox');
const domHintText = document.getElementById('hintText');
const domExplanationSlate = document.getElementById('explanationSlate');
const domExplanationText = document.getElementById('explanationText');
const domJumpDeckGrid = document.getElementById('jumpDeckGrid');

window.addEventListener('load', () => {
    const entryLoader = document.getElementById('loader');
    if (entryLoader) {
        entryLoader.style.opacity = '0';
        setTimeout(() => entryLoader.style.display = 'none', 550);
    }
    initializeReviewerContext();
    
    // Global safety listener: Automatically boots up background audio on any first gesture
    window.addEventListener('click', ensureBackgroundMusicPlays, { once: true });
    window.addEventListener('keydown', ensureBackgroundMusicPlays, { once: true });
});

function initializeReviewerContext() {
    masterActiveArray = [...questionsData];
    for (let i = masterActiveArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [masterActiveArray[i], masterActiveArray[j]] = [masterActiveArray[j], masterActiveArray[i]];
    }
    
    savedUserAnswers = new Array(masterActiveArray.length).fill(null);
    availableHintTokens = 10;
    domHintCount.innerText = availableHintTokens;
    
    buildJumpIndexRegistry();
    loadQuestionSheet();
}

function buildJumpIndexRegistry() {
    domJumpDeckGrid.innerHTML = '';
    masterActiveArray.forEach((_, idx) => {
        const dot = document.createElement('button');
        dot.className = 'jump-index-dot';
        dot.innerText = String(idx + 1).padStart(2, '0');
        dot.title = `Jump directly to question reference sheet ${idx + 1}`;
        dot.onclick = () => jumpToSpecificQuestion(idx);
        domJumpDeckGrid.appendChild(dot);
    });
}

function refreshJumpDeckStatus() {
    const dots = domJumpDeckGrid.querySelectorAll('.jump-index-dot');
    dots.forEach((dot, idx) => {
        dot.classList.remove('active', 'answered');
        if (idx === currentIndex) {
            dot.classList.add('active');
        } else if (savedUserAnswers[idx] !== null) {
            dot.classList.add('answered');
        }
    });
}

function loadQuestionSheet() {
    refreshJumpDeckStatus();

    domHintContentBox.classList.add('hidden');
    domExplanationSlate.classList.add('hidden');
    domHintBtn.disabled = false;

    const sheetData = masterActiveArray[currentIndex];
    
    domQNum.innerText = String(currentIndex + 1).padStart(2, '0');
    domQuestionText.innerText = sheetData.q;

    const currentProgressRatio = Math.round((savedUserAnswers.filter(a => a !== null).length / masterActiveArray.length) * 100);
    domProgressFill.style.width = `${currentProgressRatio}%`;
    domProgressPercent.innerText = `${currentProgressRatio}% Processed`;

    domOptionsContainer.innerHTML = '';
    sheetData.options.forEach((optionString, optionIdx) => {
        const optionBtn = document.createElement('button');
        optionBtn.className = 'opt-btn';
        optionBtn.innerText = optionString;
        optionBtn.onclick = () => evaluateSelectedOption(optionIdx, optionBtn);
        domOptionsContainer.appendChild(optionBtn);
    });

    domPrevBtn.disabled = (currentIndex === 0);
    
    if (savedUserAnswers[currentIndex] !== null) {
        lockAndExposeSheetResults(savedUserAnswers[currentIndex]);
    } else {
        domNextBtn.disabled = true;
        domNextBtn.innerText = "Advance Question →";
    }
}

function evaluateSelectedOption(selectedIdx, targetNode) {
    if (savedUserAnswers[currentIndex] !== null) return;

    const correctIndex = masterActiveArray[currentIndex].ans;
    savedUserAnswers[currentIndex] = selectedIdx;

    lockAndExposeSheetResults(selectedIdx);
    
    // Clean audio tracking evaluation channel
    if (selectedIdx === correctIndex) {
        triggerHapticSound('snd-correct');
    } else {
        triggerHapticSound('snd-wrong');
    }
    
    refreshJumpDeckStatus();
}

function lockAndExposeSheetResults(chosenIdx) {
    const correctIdx = masterActiveArray[currentIndex].ans;
    const allOptionNodes = domOptionsContainer.querySelectorAll('.opt-btn');

    allOptionNodes.forEach((node, idx) => {
        if (idx === correctIdx) {
            node.classList.add('is-correct');
        } else if (idx === chosenIdx) {
            node.classList.add('is-wrong');
        }
    });

    domExplanationText.innerText = masterActiveArray[currentIndex].why;
    domExplanationSlate.classList.remove('hidden');
    domHintBtn.disabled = true;

    domNextBtn.disabled = false;
    if (currentIndex === masterActiveArray.length - 1) {
        domNextBtn.innerText = "Finalize Evaluation";
    } else {
        domNextBtn.innerText = "Advance Question →";
    }
}

function jumpToSpecificQuestion(targetTargetIdx) {
    if (targetTargetIdx >= 0 && targetTargetIdx < masterActiveArray.length) {
        currentIndex = targetTargetIdx;
        triggerHapticSound('snd-click'); 
        loadQuestionSheet();
    }
}

function stepNextQuestion() {
    if (currentIndex < masterActiveArray.length - 1) {
        triggerHapticSound('snd-click');
        currentIndex++;
        loadQuestionSheet();
    } else {
        triggerHapticSound('snd-tada');
        renderTerminalSummaryReport();
    }
}

function stepPreviousQuestion() {
    if (currentIndex > 0) {
        currentIndex--;
        triggerHapticSound('snd-click');
        loadQuestionSheet();
    }
}

function revealHintToken() {
    if (availableHintTokens > 0 && savedUserAnswers[currentIndex] === null) {
        availableHintTokens--;
        domHintCount.innerText = availableHintTokens;
        
        domHintText.innerText = masterActiveArray[currentIndex].hint;
        domHintContentBox.classList.remove('hidden');
        domHintBtn.disabled = true;
        triggerHapticSound('snd-click');
    }
}

function renderTerminalSummaryReport() {
    document.getElementById('quiz-box').classList.add('hidden');
    const resultBox = document.getElementById('result-box');
    resultBox.classList.remove('hidden');

    let tallyCorrect = 0;
    masterActiveArray.forEach((q, idx) => {
        if (savedUserAnswers[idx] === q.ans) tallyCorrect++;
    });

    const accuracyScorePercentage = Math.round((tallyCorrect / masterActiveArray.length) * 100);
    document.getElementById('score-val').innerText = `${accuracyScorePercentage}%`;

    confetti({
        particleCount: 140,
        spread: 65,
        origin: { y: 0.62 },
        colors: ['#1c1d1f', '#8e949c', '#fbf9f4', '#e2f4ec']
    });
}

/**
 * Robust background audio ignition bypasses strict browser initialization blocks
 */
function ensureBackgroundMusicPlays() {
    if (initialPlayTriggered) return;
    const track = document.getElementById('bg-focus-music');
    if (track) {
        track.volume = 0.25;
        track.muted = false; 
        track.play().then(() => {
            initialPlayTriggered = true;
            // Align style setup metrics instantly if already playing
            const btn = document.getElementById('audioToggleBtn');
            if (btn) {
                btn.innerHTML = `<span class="audio-icon">🔊</span> MUSIC: ON`;
                btn.style.borderColor = 'var(--ink-main)';
                btn.style.color = 'var(--ink-main)';
            }
        }).catch(() => {});
    }
}

/**
 * FIXED: Clean stateless toggle switch functions instantly without component deadlock
 */
function toggleAmbientMusic() {
    const track = document.getElementById('bg-focus-music');
    const btn = document.getElementById('audioToggleBtn');
    
    if (!track) return;

    // Force engine trigger if user directly clicked the button first
    if (!initialPlayTriggered) {
        track.volume = 0.25;
        track.muted = false;
        track.play().then(() => {
            initialPlayTriggered = true;
            btn.innerHTML = `<span class="audio-icon">🔊</span> MUSIC: ON`;
            btn.style.borderColor = 'var(--ink-main)';
            btn.style.color = 'var(--ink-main)';
        }).catch(() => {});
        return;
    }

    if (!track.muted) {
        track.muted = true;
        btn.innerHTML = `<span class="audio-icon">🔈</span> MUSIC: MUTED`;
        btn.style.borderColor = 'var(--line-border)';
        btn.style.color = 'var(--ink-muted)';
    } else {
        track.muted = false;
        btn.innerHTML = `<span class="audio-icon">🔊</span> MUSIC: ON`;
        btn.style.borderColor = 'var(--ink-main)';
        btn.style.color = 'var(--ink-main)';
    }
}

function triggerHapticSound(targetAudioElementId) {
    const voiceChannelNode = document.getElementById(targetAudioElementId);
    if (voiceChannelNode) {
        voiceChannelNode.currentTime = 0;
        voiceChannelNode.play().catch(() => {});
    }
}