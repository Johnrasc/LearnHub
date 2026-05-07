// ==========================================
//  OBJECT ORIENTED PROGRAMMING (Prefinals)
// ==========================================
const questionsData = [
    // --- REGULAR EXPRESSIONS (REGEX) ---
    { q: "What is a character or sequence of characters that represents a string or multiple strings?", options: ["Regular Expression", "Inner Class", "Staging", "Method Overloading"], ans: 0 },
    { q: "Which Java package contains classes to help form and use regular expressions?", options: ["java.lang.regex", "java.util.regex", "java.io.regex", "java.text.regex"], ans: 1 },
    { q: "Which String method returns true if a string matches a given regular expression?", options: ["equals()", "compareTo()", "matches()", "contains()"], ans: 2 },
    { q: "In regex, which symbol represents the 'OR' operator, allowing a match against multiple values?", options: ["&", "|", "$", "^"], ans: 1 },
    { q: "Which regex metacharacter matches any single character except for a newline?", options: ["*", "+", "?", "."], ans: 3 },
    { q: "Which regex metacharacter matches the preceding element zero or more times?", options: ["*", "+", "?", "."], ans: 0 },
    { q: "Which regex metacharacter matches the preceding element one or more times?", options: ["*", "+", "?", "."], ans: 1 },
    { q: "Which regex metacharacter matches the preceding element zero or one time?", options: ["*", "+", "?", "."], ans: 2 },
    { q: "What does the regex character class '[abc]' match?", options: ["Any character except a, b, or c", "Exactly the string 'abc'", "Any single character a, b, or c", "A string starting with a"], ans: 2 },
    { q: "Which character class matches any digit from 0 to 9?", options: ["[a-z]", "[0-9]", "[A-Z]", "[!0-9]"], ans: 1 },
    { q: "What does the caret symbol (^) signify when placed inside a bracket like '[^abc]'?", options: ["Starts with abc", "Ends with abc", "Any character except a, b, or c", "Matches a, b, and c"], ans: 2 },
    { q: "Which predefined character class represents any digit, equivalent to [0-9]?", options: ["\\s", "\\w", "\\d", "\\D"], ans: 2 },
    { q: "Which predefined character class represents any word character (letters, digits, or underscore)?", options: ["\\s", "\\w", "\\d", "\\W"], ans: 1 },
    { q: "Which predefined character class represents any whitespace character?", options: ["\\s", "\\S", "\\w", "\\d"], ans: 0 },
    { q: "The regex '^' (outside of brackets) is used to match what?", options: ["The end of a line", "The beginning of a line", "Any digit", "A newline"], ans: 1 },
    { q: "The regex '$' is used to match what?", options: ["The beginning of a line", "The end of a line", "A currency symbol", "Any whitespace"], ans: 1 },

    // --- ENUMERATIONS (ENUM) ---
    { q: "What is a special 'class' that represents a group of constants (unchangeable variables)?", options: ["Interface", "Abstract Class", "Enum", "Final Class"], ans: 2 },
    { q: "Which keyword is used to define an enumeration in Java?", options: ["enumeration", "list", "enum", "const"], ans: 2 },
    { q: "How should the names of enum constants be written according to standard Java conventions?", options: ["lowercase", "camelCase", "UPPERCASE", "kebab-case"], ans: 2 },
    { q: "Which enum method returns an array of all the constants in the enum?", options: ["toString()", "values()", "ordinal()", "valueOf()"], ans: 1 },
    { q: "Which enum method returns the position of an enum constant in its declaration (starting at 0)?", options: ["index()", "position()", "ordinal()", "rank()"], ans: 2 },
    { q: "True or False: An enum can be defined inside or outside of a class, but not inside a method.", options: ["True", "False"], ans: 0 },
    { q: "Which statement is commonly used with enums to check for specific constant values?", options: ["if-else", "for loop", "switch statement", "while loop"], ans: 2 },
    { q: "Can an enum have fields, methods, and constructors?", options: ["Yes", "No"], ans: 0 },

    // --- COMPOSITION ---
    { q: "Which concept refers to a class having an instance of another class as a field?", options: ["Inheritance", "Polymorphism", "Composition", "Encapsulation"], ans: 2 },
    { q: "Composition is often described as what kind of relationship?", options: ["IS-A relationship", "HAS-A relationship", "USES-A relationship", "PART-OF relationship"], ans: 1 },
    { q: "In composition, if a 'Car' class has an 'Engine' field, the 'Car' is the _____ class.", options: ["Child", "Subclass", "Composite", "Abstract"], ans: 2 },
    { q: "What is a primary advantage of using composition over inheritance?", options: ["It allows access to private members of the parent", "It is more flexible and supports better encapsulation", "It makes code run faster", "It reduces the number of classes"], ans: 1 },

    // --- NESTED AND INNER CLASSES ---
    { q: "What is the term for a class defined within another class?", options: ["Subclass", "Superclass", "Nested Class", "Anonymous Class"], ans: 2 },
    { q: "What is a non-static nested class called?", options: ["Static nested class", "Inner class", "Outer class", "Local class"], ans: 1 },
    { q: "Which keyword is used to make a nested class accessible without an instance of the outer class?", options: ["private", "final", "static", "protected"], ans: 2 },
    { q: "An inner class can access its top-level class's fields and methods, even if they are:", options: ["public", "static", "private", "final"], ans: 2 },
    { q: "If a nested class is made 'private', where can it be used?", options: ["In any class in the package", "Only within the outer class it resides in", "In any subclass", "Anywhere in the project"], ans: 1 },
    { q: "What is the primary reason to use an inner class?", options: ["To make the code longer", "To logically group classes used in only one place", "To replace inheritance", "To increase memory usage"], ans: 1 },

    // --- RECURSION ---
    { q: "What is the process in which a method calls itself continuously?", options: ["Looping", "Iteration", "Recursion", "Reflecting"], ans: 2 },
    { q: "In recursion, what is the condition that stops the method from calling itself?", options: ["Recursive Case", "Base Case", "Stop Case", "Final Case"], ans: 1 },
    { q: "What happens if a recursive method does not have a base case?", options: ["The program completes faster", "It results in an infinite loop/StackOverflowError", "It automatically stops after 100 calls", "It converts into a for-loop"], ans: 1 },
    { q: "Which mathematical operation is a classic example of recursion?", options: ["Addition", "Factorial", "Multiplication", "Division"], ans: 1 },
    { q: "In the recursive call 'return n * factorial(n - 1)', what part is 'factorial(n - 1)'?", options: ["Base case", "Recursive case", "Infinite case", "Static case"], ans: 1 },

    // --- ADDITIONAL CONCEPTS ---
    { q: "What does the 'toString()' method do in a Java class?", options: ["Converts a string to a number", "Returns a string representation of an object", "Deletes an object", "Compares two strings"], ans: 1 },
    { q: "Which keyword prevents a class from being inherited or a method from being overridden?", options: ["static", "final", "abstract", "private"], ans: 1 },
    { q: "Which class provides the 'matches' method used for regex in the examples?", options: ["Scanner", "String", "Math", "System"], ans: 1 },
    { q: "A static nested class is essentially a top-level class that has been nested for what purpose?", options: ["Packaging convenience", "Accessing private instance variables", "Speed", "Security"], ans: 0 },
    { q: "How many arguments does the 'equals()' method compare at once?", options: ["One", "Two", "Unlimited", "Zero"], ans: 0 },
    { q: "In the regex '[0-9]{3}', what does the '{3}' indicate?", options: ["Matches the number 3", "Matches exactly three digits", "Matches at least three digits", "Matches up to three digits"], ans: 1 }
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