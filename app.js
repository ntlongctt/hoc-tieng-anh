const words = [
  {
    word: 'Serendipity',
    meaning: 'The occurrence of events by chance in a happy or beneficial way.',
  },
  {
    word: 'Diligent',
    meaning: 'Showing careful and persistent effort in your work.',
  },
  {
    word: 'Eloquent',
    meaning: 'Fluent or persuasive in speaking or writing.',
  },
  {
    word: 'Resilient',
    meaning: 'Able to recover quickly from difficulties.',
  },
];

const questions = [
  {
    prompt: 'Choose the correct sentence:',
    options: [
      'She go to school every day.',
      'She goes to school every day.',
      'She going to school every day.',
    ],
    answer: 1,
  },
  {
    prompt: 'Which is the past tense of “teach”?',
    options: ['teached', 'taught', 'teachen'],
    answer: 1,
  },
  {
    prompt: 'Fill in the blank: I have lived here ___ 2020.',
    options: ['for', 'since', 'from'],
    answer: 1,
  },
];

const wordEl = document.getElementById('word');
const meaningEl = document.getElementById('meaning');
const nextWordBtn = document.getElementById('next-word');

const questionEl = document.getElementById('question');
const answersEl = document.getElementById('answers');
const feedbackEl = document.getElementById('feedback');

let wordIndex = 0;
let questionIndex = 0;

function renderWord() {
  const item = words[wordIndex];
  wordEl.textContent = item.word;
  meaningEl.textContent = item.meaning;
}

function renderQuestion() {
  const q = questions[questionIndex];
  questionEl.textContent = q.prompt;
  feedbackEl.textContent = '';
  feedbackEl.className = 'feedback';

  answersEl.innerHTML = '';
  q.options.forEach((option, index) => {
    const btn = document.createElement('button');
    btn.className = 'answer';
    btn.type = 'button';
    btn.textContent = option;
    btn.addEventListener('click', () => checkAnswer(index));
    answersEl.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const q = questions[questionIndex];
  const isCorrect = selected === q.answer;

  feedbackEl.textContent = isCorrect ? 'Correct! Great job.' : 'Not quite. Try the next one!';
  feedbackEl.className = `feedback ${isCorrect ? 'ok' : 'bad'}`;

  questionIndex = (questionIndex + 1) % questions.length;
  setTimeout(renderQuestion, 800);
}

nextWordBtn.addEventListener('click', () => {
  wordIndex = (wordIndex + 1) % words.length;
  renderWord();
});

renderWord();
renderQuestion();
