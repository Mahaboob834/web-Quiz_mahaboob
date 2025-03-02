document.getElementById("start-btn").addEventListener("click", startQuiz);

let currentQuestionIndex = 0;
let selectedAnswers = [];
let quizData = [];
let numQuestions = 0;

const questions = [
    { question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Madrid"], correctAnswer: "Paris" },
    { question: "Which programming language is known as the language of the web?", options: ["JavaScript", "Python", "C++", "Java"], correctAnswer: "JavaScript" },
    { question: "What is 5 + 3?", options: ["5", "8", "10", "12"], correctAnswer: "8" },
    { question: "Who wrote 'Hamlet'?", options: ["Shakespeare", "Dickens", "Hemingway", "Austen"], correctAnswer: "Shakespeare" },
    { question: "What is the largest planet in our solar system?", options: ["Earth", "Jupiter", "Mars", "Saturn"], correctAnswer: "Jupiter" },
    { question: "What is the square root of 16?", options: ["4", "2", "3", "5"], correctAnswer: "4" },
    { question: "Which element has the chemical symbol 'O'?", options: ["Oxygen", "Osmium", "Ozone", "Oxygenium"], correctAnswer: "Oxygen" },
    { question: "What is the boiling point of water?", options: ["90°C", "100°C", "110°C", "120°C"], correctAnswer: "100°C" },
    { question: "In which year did the Titanic sink?", options: ["1912", "1905", "1898", "1923"], correctAnswer: "1912" },
    { question: "Who discovered penicillin?", options: ["Alexander Fleming", "Marie Curie", "Albert Einstein", "Isaac Newton"], correctAnswer: "Alexander Fleming" },
    { question: "Which country is known as the Land of the Rising Sun?", options: ["China", "Japan", "South Korea", "Thailand"], correctAnswer: "Japan" },
    { question: "Which planet is known as the Red Planet?", options: ["Mars", "Venus", "Earth", "Jupiter"], correctAnswer: "Mars" },
    { question: "Who painted the Mona Lisa?", options: ["Da Vinci", "Picasso", "Van Gogh", "Rembrandt"], correctAnswer: "Da Vinci" },
    { question: "What is the atomic number of Carbon?", options: ["6", "8", "7", "12"], correctAnswer: "6" },
    { question: "Who is the author of '1984'?", options: ["George Orwell", "Aldous Huxley", "J.K. Rowling", "Ernest Hemingway"], correctAnswer: "George Orwell" },
    { question: "What is the capital of Japan?", options: ["Tokyo", "Beijing", "Seoul", "Bangkok"], correctAnswer: "Tokyo" },
    { question: "What is the chemical symbol for gold?", options: ["Au", "Ag", "Pb", "Fe"], correctAnswer: "Au" },
    { question: "What is the smallest prime number?", options: ["2", "3", "1", "5"], correctAnswer: "2" },
    { question: "Which planet is closest to the sun?", options: ["Mercury", "Venus", "Earth", "Mars"], correctAnswer: "Mercury" },
    { question: "What year did World War II end?", options: ["1945", "1939", "1918", "1963"], correctAnswer: "1945" },
    { question: "How many continents are there?", options: ["5", "6", "7", "8"], correctAnswer: "7" },
    { question: "What is the main ingredient in guacamole?", options: ["Tomato", "Avocado", "Onion", "Cucumber"], correctAnswer: "Avocado" },
    { question: "Which ocean is the largest?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], correctAnswer: "Pacific" },
    { question: "What is the square of 15?", options: ["225", "2250", "15", "150"], correctAnswer: "225" },
    { question: "Who was the first president of the United States?", options: ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "John Adams"], correctAnswer: "George Washington" },
    { question: "What is the longest river in the world?", options: ["Amazon", "Nile", "Yangtze", "Mississippi"], correctAnswer: "Nile" },
    { question: "What gas do plants absorb from the air?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], correctAnswer: "Carbon Dioxide" },
    { question: "What is the currency of the United Kingdom?", options: ["Euro", "Pound", "Dollar", "Yen"], correctAnswer: "Pound" },
    { question: "Which element has the symbol 'Na'?", options: ["Sodium", "Neon", "Nitrogen", "Nickel"], correctAnswer: "Sodium" },
    { question: "How many states are there in the United States?", options: ["50", "52", "48", "51"], correctAnswer: "50" },
    { question: "What is the chemical formula for water?", options: ["H2O", "CO2", "O2", "H2SO4"], correctAnswer: "H2O" },
    { question: "What is the largest ocean on Earth?", options: ["Atlantic", "Pacific", "Indian", "Southern"], correctAnswer: "Pacific" },
    { question: "Which scientist developed the theory of relativity?", options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Niels Bohr"], correctAnswer: "Albert Einstein" },
    { question: "What is the capital of Canada?", options: ["Toronto", "Ottawa", "Vancouver", "Montreal"], correctAnswer: "Ottawa" },
    { question: "How many bones are in the human adult body?", options: ["206", "205", "201", "212"], correctAnswer: "206" },
    { question: "What is the primary color of the sun?", options: ["Yellow", "Blue", "White", "Red"], correctAnswer: "Yellow" },
    { question: "What is the capital of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Perth"], correctAnswer: "Canberra" },
    { question: "Which animal is known as the 'King of the Jungle'?", options: ["Lion", "Tiger", "Elephant", "Bear"], correctAnswer: "Lion" },
    { question: "Who wrote 'Pride and Prejudice'?", options: ["Jane Austen", "Charles Dickens", "Charlotte Brontë", "Emily Brontë"], correctAnswer: "Jane Austen" },
    { question: "What is the largest desert in the world?", options: ["Sahara", "Gobi", "Kalahari", "Arctic"], correctAnswer: "Sahara" },
    { question: "How many planets are there in the solar system?", options: ["8", "9", "7", "6"], correctAnswer: "8" },
    { question: "Which animal is known for being able to change its color?", options: ["Chameleon", "Octopus", "Cuttlefish", "Squid"], correctAnswer: "Chameleon" },
    { question: "What is the speed of light?", options: ["3 x 10^8 m/s", "3 x 10^6 m/s", "3 x 10^10 m/s", "3 x 10^9 m/s"], correctAnswer: "3 x 10^8 m/s" },
    { question: "Who painted the 'Starry Night'?", options: ["Vincent van Gogh", "Pablo Picasso", "Claude Monet", "Salvador Dalí"], correctAnswer: "Vincent van Gogh" },
    { question: "Which animal is the largest mammal on Earth?", options: ["Elephant", "Blue Whale", "Giraffe", "Shark"], correctAnswer: "Blue Whale" },
    { question: "What is the longest running TV show?", options: ["The Simpsons", "Friends", "M*A*S*H", "The Office"], correctAnswer: "The Simpsons" },
    { question: "What year did the first man land on the moon?", options: ["1969", "1965", "1971", "1975"], correctAnswer: "1969" },
    { question: "Who was the first woman to win a Nobel Prize?", options: ["Marie Curie", "Madame Curie", "Rosalind Franklin", "Ada Lovelace"], correctAnswer: "Marie Curie" }
];

function startQuiz() {
    numQuestions = parseInt(document.getElementById("num-questions").value);
    if (numQuestions < 1 || numQuestions > questions.length) {
        alert("Please select a valid number of questions (1 to " + questions.length + ")");
        return;
    }

    quizData = shuffleArray(questions).slice(0, numQuestions);
    currentQuestionIndex = 0;
    selectedAnswers = [];

    document.getElementById("question-container").classList.add("hidden");
    document.getElementById("quiz").classList.remove("hidden");

    displayQuestion();
}

function displayQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    document.getElementById("question").textContent = currentQuestion.question;

    const answersContainer = document.getElementById("answers");
    answersContainer.innerHTML = "";
    currentQuestion.options.forEach(option => {
        const answerLabel = document.createElement("label");
        const answerInput = document.createElement("input");
        answerInput.type = "radio";
        answerInput.name = "answer";
        answerInput.value = option;
        answerLabel.appendChild(answerInput);
        answerLabel.appendChild(document.createTextNode(option));
        answersContainer.appendChild(answerLabel);
    });

    document.getElementById("next-btn").style.display = "block";
    document.getElementById("next-btn").disabled = true;

    document.querySelectorAll("input[name='answer']").forEach(input => {
        input.addEventListener("change", () => {
            document.getElementById("next-btn").disabled = false;
        });
    });
}

document.getElementById("next-btn").addEventListener("click", nextQuestion);

function nextQuestion() {
    const selectedOption = document.querySelector("input[name='answer']:checked");
    if (selectedOption) {
        selectedAnswers.push(selectedOption.value);
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < numQuestions) {
        displayQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    let score = 0;
    quizData.forEach((question, index) => {
        if (selectedAnswers[index] === question.correctAnswer) {
            score++;
        }
    });

    document.getElementById("quiz").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");

    document.getElementById("score").textContent = `You scored ${score} out of ${numQuestions}`;
}

document.getElementById("retry-btn").addEventListener("click", () => {
    document.getElementById("result").classList.add("hidden");
    document.getElementById("question-container").classList.remove("hidden");
});

function shuffleArray(array) {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}
