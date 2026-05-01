'use client';

import { useMemo, useState } from 'react';

import { Button } from '@/components/ui/button';

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

export default function HomePage() {
  const [wordIndex, setWordIndex] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [feedbackType, setFeedbackType] = useState('');

  const currentWord = useMemo(() => words[wordIndex], [wordIndex]);
  const currentQuestion = useMemo(() => questions[questionIndex], [questionIndex]);

  const nextWord = () => {
    setWordIndex((prev) => (prev + 1) % words.length);
  };

  const handleAnswer = (selectedIndex) => {
    const isCorrect = selectedIndex === currentQuestion.answer;
    setFeedback(isCorrect ? 'Correct! Great job.' : 'Not quite. Try the next one!');
    setFeedbackType(isCorrect ? 'ok' : 'bad');

    setTimeout(() => {
      setQuestionIndex((prev) => (prev + 1) % questions.length);
      setFeedback('');
      setFeedbackType('');
    }, 800);
  };

  return (
    <main className="app">
      <header>
        <h1>English Learning Hub</h1>
        <p>Build your vocabulary, grammar, and confidence every day.</p>
      </header>

      <section className="card" aria-labelledby="flashcard-title">
        <h2 id="flashcard-title">Vocabulary flashcard</h2>
        <p className="word">{currentWord.word}</p>
        <p className="meaning">{currentWord.meaning}</p>
        <Button type="button" onClick={nextWord}>
          Next word
        </Button>
      </section>

      <section className="card" aria-labelledby="quiz-title">
        <h2 id="quiz-title">Quick grammar quiz</h2>
        <p>{currentQuestion.prompt}</p>
        <div className="answers">
          {currentQuestion.options.map((option, index) => (
            <Button
              key={option}
              type="button"
              className="answer"
              variant="secondary"
              onClick={() => handleAnswer(index)}
            >
              {option}
            </Button>
          ))}
        </div>
        <p className={`feedback ${feedbackType}`} aria-live="polite">
          {feedback}
        </p>
      </section>
    </main>
  );
}
