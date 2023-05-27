
const QUESTION_COUNT = 3;

let quiz = [
    {
        content: "tresc 1",
        answers: [
            "cos tam 1",
            "cos tam 2",
            "cost tam 3"
        ],
        correct: 0
    }, 
    {
        content: "tresc 2",
        answers: [
            "cos tam 1",
            "cos tam 2",
            "cost tam 3"
        ],
        correct: 1
    },
    {
        content: "tresc 3",
        answers: [
            "cos tam 1",
            "cos tam 2",
            "cost tam 3"
        ],
        correct: 2
    },
    {
        content: "tresc 4",
        answers: [
            "cos tam 1",
            "cos tam 2",
            "cost tam 3"
        ],
        correct: 0
    }
]

$(function () {
    let answer_t = $.trim($('#answer-template').html());
    let question_t = $.trim($('#question-template').html())

    let quiz_d = $("#quiz");

    generateRandomUniqueNumbers(QUESTION_COUNT, quiz.length-1).forEach(question_id => {

        let answers = "";

        quiz[question_id].answers.forEach((answer, answerIndex) => {
            let answerElement = answer_t
                .replace(/{{value}}/ig, answerIndex)
                .replace(/{{content}}/ig, answer)
                .replace(/{{name}}/ig, "question" + question_id + "_answer");
            answers += answerElement;
        });

        let questionElement = question_t
            .replace(/{{content}}/ig, quiz[question_id].content)
            .replace(/{{correct}}/ig, quiz[question_id].correct)
            .replace(/{{answers}}/ig, answers);

        quiz_d.append(questionElement);
    });

    quiz_d.append("<button onclick=\"quiz_check()\">Sprawdz odpowiedzi</button>")
})

function quiz_check() {
    let questions = $(".question-wrapper");
    let score = 0;

    questions.each(function () {
        let selectedAnswer = $(this).find(".answer-input:checked").val();
        let correctAnswer = $(this).find(".correct-answer").text();

        if (selectedAnswer == correctAnswer) {
            score++;
        }
    });

    alert("Your score: " + score + "/" + questions.length);
}

function generateRandomUniqueNumbers(count, value_ceil) {
    if (count > value_ceil) {
      console.error("Error: N cannot be greater than K");
      return [];
    }
  
    if (count <= 0) {
      console.error("Error: N must be a positive integer");
      return [];
    }
  
    const numbers = new Set();
    while (numbers.size < count) {
      const randomNumber = Math.floor(Math.random() * (value_ceil + 1));
      numbers.add(randomNumber);
    }
  
    return Array.from(numbers);
  }