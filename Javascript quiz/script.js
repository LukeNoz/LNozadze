document.addEventListener('DOMContentLoaded', function() {
    const startSection = document.querySelector('.start-section');
    const questionSection = document.querySelector('.question-section');
    const scoreSection = document.querySelector('.score-section');
    const startButton = document.getElementById('start-button');
    const restartButton = document.getElementById('restart-button');
    const questionImage = document.getElementById('question-image');
    const questionText = document.querySelector('.question');
    const options = document.querySelectorAll('.option');
    const resultText = document.querySelector('.result');
    const answeredCount = document.getElementById('answered-count');
    const totalCount = document.getElementById('total-count');
    const correctCount = document.getElementById('correct-count');
    const scoreText = document.getElementById('score');
    const timer = document.getElementById('timer');
  

    const questions = [
      {
        question: 'Què mostrarà?',
        image:'1.png',
        answers: ['NaN', '15', '105'],
        correctAnswer: 'NaN'
      },
      {
        question: 'Aquest codi funciona?',
        image:'2.png',
        answers: ['Sí i mostra 10', 'Sí i mostra 25', 'No'],
        correctAnswer: 'No'
      },
      {
        question: 'Aquest codi funciona?',
        image:'3.png',
        answers: ['No', 'sí i mostra: 7', 'sí i mostra: 57'],
        correctAnswer: 'sí i mostra: 7'
      },
      {
        question: 'Quin valor mostrarà alert?',
        image:'4.png',
        answers: ['1', '5', '0'],
        correctAnswer: '1'
      },
      {
        question: 'Aquest codi funciona?',
        image:'5.png',
        answers: ['No', 'sí i mostra 0', 'sí i mostra 12'],
        correctAnswer: 'sí i mostra 0'
      },
      {
        question: 'Quin valor mostra?',
        image:'6.png',
        answers: ['true', '2 €', '10 €'],
        correctAnswer: 'true'
      },
      {
        question: 'Quin valor mostra alert?',
        image:'7.png',
        answers: ['8', '6', '5'],
        correctAnswer: '8'
      },
      {
        question: 'Què mostrarà per pantalla?',
        image:'8.png',
        answers: ['Volvo Saab Ford', 'Saab Ford', 'Ford'],
        correctAnswer: 'Saab Ford'
      },
      {
        question: 'Què mostrarà a la pantalla?',
        image:'9.png',
        answers: ['Juanito', 'Maria', 'Juanito Maria'],
        correctAnswer: 'Juanito Maria'
      },
      {
        question: 'Què mostrarà l’alert?',
        image:'10.png',
        answers: ['L1', 'L2', 'demo2'],
        correctAnswer: 'L1'
      }
    ];

  let currentQuestionIndex = 0;
  let score = 0;
  let correctAnswers = 0;
  let timeLeft = 10;
  let timerInterval;

  function startQuiz() {
    startSection.style.display = 'none';
    questionSection.style.display = 'block';
    startTimer();
    showQuestion();
  }

  function startTimer() {
    timeLeft = 10;
    timer.textContent = timeLeft;
  
    timerInterval = setInterval(function () {
      timeLeft--;
      timer.textContent = timeLeft;
  
      if (timeLeft === 0) {
        clearInterval(timerInterval);
        currentQuestionIndex++;
        startTimer();
        showQuestion();
      }
    }, 1000);
  }

  function showQuestion() {
    const questionObj = questions[currentQuestionIndex];
    const { question, image, answers } = questionObj;

    questionText.textContent = question;
    questionImage.src = image;

    options.forEach((option, index) => {
      option.textContent = answers[index];
      option.addEventListener('click', handleAnswer);
    });
  }

  function handleAnswer(event) {
    const selectedAnswer = event.target.textContent;
    const questionObj = questions[currentQuestionIndex];
    const { correctAnswer } = questionObj;
    const isCorrect = selectedAnswer === correctAnswer;

    if (isCorrect) {
      correctAnswers++;
      resultText.textContent = '¡Respuesta correcta!';
      score += 10;
    } else {
      resultText.textContent = '¡Respuesta incorrecta!';
    }

    clearInterval(timerInterval);

    if (currentQuestionIndex < questions.length - 1) {
      setTimeout(function() {
        currentQuestionIndex++;
        startTimer();
        showQuestion();
      }, 1000);
    } else {
      showScore();
    }
  }

  function showScore() {
    questionSection.style.display = 'none';
    scoreSection.style.display = 'block';

    answeredCount.textContent = questions.length;
    totalCount.textContent = questions.length;
    correctCount.textContent = correctAnswers;
    scoreText.textContent = score;
  }

  function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    correctAnswers = 0;
    clearInterval(timerInterval);
    resultText.textContent = '';
    scoreSection.style.display = 'none';
    startSection.style.display = 'block';
  }

  startButton.addEventListener('click', startQuiz);
  restartButton.addEventListener('click', restartQuiz);
  restartQuiz();
});