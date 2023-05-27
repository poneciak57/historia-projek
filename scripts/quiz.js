
const QUESTION_COUNT = 4;

let quiz = [
    {
        content: "Na co wskazuje sposób przeprowadzania przez Niemców pacyfikacji wsi?",
        answers: [
            "Zbrojne stłumienie buntu",
            "Likwidacja konkretnych punktów",
            "Zaplanowana działalność eksterminacyjna",
            "Brak stawiania oporu przez zaatakowanych"
        ],
        correct: 2
    }, 
    {
        content: "Jakie były przyczyny pacyfikacji polskich wsi?",
        answers: [
            "Celowa polityka okupanta",
            "Doniesienia o wsparciu dla ruchu oporu",
            "Prawdziwe i fałszywe informacje",
            "Wszystkie wymienione odpowiedzi"
        ],
        correct: 3
    },
    {
        content: "Gdzie w późniejszym okresie wojny szczególnie często występowały pacyfikacje polskich wsi?",
        answers: [
            "Ziemia świętokrzyska",
            "Zamojszczyzna",
            "Wawer",
            "Torzeńec"
        ],
        correct: 1
    },
    {
        content: "Jak ocenić skalę pacyfikacji polskich wsi przez Niemców?",
        answers: [
            "Około 100 wsi padło ofiarą represji",
            "Około 500 wsi padło ofiarą represji",
            "Około 800-900 wsi padło ofiarą represji",
            "Ponad 1000 wsi padło ofiarą represji"
        ],
        correct: 2
    },
    {
        content: "Jakie było główne powód dla zbrodni katyńskiej?",
        answers: [
            "Zapewnienie bezpieczeństwa polskim jeńcom wojennym",
            "Eliminacja polskiej inteligencji i potencjalnej opozycji",
            "Ochrona praw człowieka i demokracji",
            "Zaspokojenie niemieckich żądań"
        ],
        correct: 1
    },
    {
        content: "Kto przeprowadził egzekucje w ramach zbrodni katyńskiej?",
        answers: [
            "Niemieccy okupanci",
            "Polskie oddziały partyzanckie",
            "Sowiecka policja polityczna NKWD",
            "Ukraińscy nacjonaliści"
        ],
        correct: 2
    },
    {
        content: "Jakie było stanowisko Związku Radzieckiego w sprawie zbrodni katyńskiej po odkryciu masowych grobów przez Niemców?",
        answers: [
            "Przyznanie odpowiedzialności NKWD za masakrę",
            "Zaprzeczenie odpowiedzialności i oskarżenie Niemców",
            "Współpraca z międzynarodową komisją śledczą",
            "Złożenie przeprosin Polsce"
        ],
        correct: 1
    },
    {
        content: "Kiedy ujawniono dokumenty potwierdzające odpowiedzialność NKWD za zbrodnię katyńską?",
        answers: [
            "W 1990 roku po rozpadzie Związku Radzieckiego",
            "W 1943 roku, po odkryciu grobów przez Niemców",
            "W 1945 roku po zakończeniu II wojny światowej",
            "W 1960 roku po traktacie polsko-radzieckim"
        ],
        correct: 0
    },
    {
        content: "Jakie było dokładne miejsce położenia obozu Auschwitz-Birkenau?",
        answers: [
            "Kraków, Polska",
            "Monachium, Niemcy",
            "Oświęcim, Polska",
            "Berlin, Niemcy"
        ],
        correct: 2
    },
    {
        content: "Jak nazywał się dowódca obozu Auschwitz-Birkenau?",
        answers: [
            "Adolf Eichmann",
            "Heinrich Himmler",
            "Rudolf Höss",
            "Joseph Mengele"
        ],
        correct: 2
    },
    {
        content: "Jaka metoda została głownie stosowana do mordowania więźniów w Auschwitz-Birkenau?",
        answers: [
            "Zastrzyki trucizną",
            "Powieszenie",
            "Strzał w tył głowy",
            "Komory gazowe"
        ],
        correct: 3
    },
    {
        content: "Która z tych grup więźniów była zazwyczaj kierowana bezpośrednio do komór gazowych po przybyciu do Auschwitz-Birkenau?",
        answers: [
            "Kobiety w ciąży",
            "Dzieci",
            "Mężczyźni",
            "Więźniowie polityczni"
        ],
        correct: 1
    },
    {
        content: "Kto był odpowiedzialny za Zbrodnię Wołyńską?",
        answers: [
            "Armia Czerwona",
            "Niemcy",
            "Ukraińska Armia Powstańcza (UPA)",
            "Polska Armia Krajowa (AK)"
        ],
        correct: 2
    },
    {
        content: "Jaka była skala ofiar Zbrodni Wołyńskiej?",
        answers: [
            "Około 10 tysięcy",
            "Około 50 tysięcy",
            "Około 100 tysięcy",
            "Około 500 tysięcy"
        ],
        correct: 2
    },
    {
        content: "W którym roku rozpoczęły się masowe mordy podczas Zbrodni Wołyńskiej?",
        answers: [
            "1940",
            "1941",
            "1942",
            "1943"
        ],
        correct: 3
    },
    {
        content: "Jakie było główne zaangażowanie OUN-UPA w zbrodnie?",
        answers: [
            "Wymordowanie i wypędzenie Polaków",
            "Walka o niepodległość Ukrainy",
            "Obrona przed niemiecką okupacją",
            "Walka z Armią Czerwoną"
        ],
        correct: 0
    }
]

$(function () {
    let answer_t = $.trim($('#answer-template').html());
    let question_t = $.trim($('#question-template').html())

    let quiz_d = $("#quiz");

    generateRandomUniqueNumbers(QUESTION_COUNT, quiz.length-1).forEach((question_id, index) => {

        let answers = "";

        quiz[question_id].answers.forEach((answer, answerIndex) => {
            let answerElement = answer_t
                .replace(/{{value}}/ig, answerIndex)
                .replace(/{{content}}/ig, answer)
                .replace(/{{name}}/ig, "question" + question_id + "_answer");
            answers += answerElement;
        });

        let questionElement = question_t
            .replace(/{{content}}/ig, (index + 1) + ". " + quiz[question_id].content)
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