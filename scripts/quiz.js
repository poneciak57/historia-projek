
const QUESTION_COUNT = 10;

let quiz = [
    {
        content: "Na co wskazuje sposób przeprowadzania przez Niemców pacyfikacji wsi?",
        answers: [
            "A) Zbrojne stłumienie buntu",
            "B) Likwidacja konkretnych punktów",
            "C) Zaplanowana działalność eksterminacyjna",
            "D) Brak stawiania oporu przez zaatakowanych"
        ],
        correct: 2
    },
    {
        content: "Jakie były przyczyny pacyfikacji polskich wsi?",
        answers: [
            "A) Celowa polityka okupanta",
            "B) Doniesienia o wsparciu dla ruchu oporu",
            "C) Prawdziwe i fałszywe informacje",
            "D) Wszystkie wymienione odpowiedzi"
        ],
        correct: 3
    },
    {
        content: "Gdzie w późniejszym okresie wojny szczególnie często występowały pacyfikacje polskich wsi?",
        answers: [
            "A) Ziemia świętokrzyska",
            "B) Zamojszczyzna",
            "C) Wawer",
            "D) Torzeńec"
        ],
        correct: 1
    },
    {
        content: "Jak ocenić skalę pacyfikacji polskich wsi przez Niemców?",
        answers: [
            "A) Około 100 wsi padło ofiarą represji",
            "B) Około 500 wsi padło ofiarą represji",
            "C) Około 800-900 wsi padło ofiarą represji",
            "D) Ponad 1000 wsi padło ofiarą represji"
        ],
        correct: 2
    },
    {
        content: "Jakie było główne powód dla zbrodni katyńskiej?",
        answers: [
            "A) Zapewnienie bezpieczeństwa polskim jeńcom wojennym",
            "B) Eliminacja polskiej inteligencji i potencjalnej opozycji",
            "C) Ochrona praw człowieka i demokracji",
            "D) Zaspokojenie niemieckich żądań"
        ],
        correct: 1
    },
    {
        content: "Kto przeprowadził egzekucje w ramach zbrodni katyńskiej?",
        answers: [
            "A) Niemieccy okupanci",
            "B) Polskie oddziały partyzanckie",
            "C) Sowiecka policja polityczna NKWD",
            "D) Ukraińscy nacjonaliści"
        ],
        correct: 2
    },
    {
        content: "Jakie było stanowisko Związku Radzieckiego w sprawie zbrodni katyńskiej po odkryciu masowych grobów przez Niemców?",
        answers: [
            "A) Przyznanie odpowiedzialności NKWD za masakrę",
            "B) Zaprzeczenie odpowiedzialności i oskarżenie Niemców",
            "C) Współpraca z międzynarodową komisją śledczą",
            "D) Złożenie przeprosin Polsce"
        ],
        correct: 1
    },
    {
        content: "Kiedy ujawniono dokumenty potwierdzające odpowiedzialność NKWD za zbrodnię katyńską?",
        answers: [
            "A) W 1990 roku po rozpadzie Związku Radzieckiego",
            "B) W 1943 roku, po odkryciu grobów przez Niemców",
            "C) W 1945 roku po zakończeniu II wojny światowej",
            "D) W 1960 roku po traktacie polsko-radzieckim"
        ],
        correct: 0
    },
    {
        content: "Jakie było dokładne miejsce położenia obozu Auschwitz-Birkenau?",
        answers: [
            "A) Kraków, Polska",
            "B) Monachium, Niemcy",
            "C) Oświęcim, Polska",
            "D) Berlin, Niemcy"
        ],
        correct: 2
    },
    {
        content: "Jak nazywał się dowódca obozu Auschwitz-Birkenau?",
        answers: [
            "A) Adolf Eichmann",
            "B) Heinrich Himmler",
            "C) Rudolf Höss",
            "D) Joseph Mengele"
        ],
        correct: 2
    },
    {
        content: "Jaka metoda została głownie stosowana do mordowania więźniów w Auschwitz-Birkenau?",
        answers: [
            "A) Zastrzyki trucizną",
            "B) Powieszenie",
            "C) Strzał w tył głowy",
            "D) Komory gazowe"
        ],
        correct: 3
    },
    {
        content: "Która z tych grup więźniów była zazwyczaj kierowana bezpośrednio do komór gazowych po przybyciu do Auschwitz-Birkenau?",
        answers: [
            "A) Kobiety w ciąży",
            "B) Dzieci",
            "C) Mężczyźni",
            "D) Więźniowie polityczni"
        ],
        correct: 1
    },
    {
        content: "Kto był odpowiedzialny za Zbrodnię Wołyńską?",
        answers: [
            "A) Armia Czerwona",
            "B) Niemcy",
            "C) Ukraińska Armia Powstańcza (UPA)",
            "D) Polska Armia Krajowa (AK)"
        ],
        correct: 2
    },
    {
        content: "Jaka była skala ofiar Zbrodni Wołyńskiej?",
        answers: [
            "A) Około 10 tysięcy",
            "B) Około 50 tysięcy",
            "C) Około 100 tysięcy",
            "D) Około 500 tysięcy"
        ],
        correct: 2
    },
    {
        content: "W którym roku rozpoczęły się masowe mordy podczas Zbrodni Wołyńskiej?",
        answers: [
            "A) 1940",
            "B) 1941",
            "C) 1942",
            "D) 1943"
        ],
        correct: 3
    },
    {
        content: "Jakie było główne zaangażowanie OUN-UPA w zbrodnie?",
        answers: [
            "A) Wymordowanie i wypędzenie Polaków",
            "B) Walka o niepodległość Ukrainy",
            "C) Obrona przed niemiecką okupacją",
            "D) Walka z Armią Czerwoną"
        ],
        correct: 0
    }
]

$(function () {
    let answer_t = $.trim($('#answer-template').html());
    let question_t = $.trim($('#question-template').html())

    let quiz_d = $("#quiz");

    generateRandomUniqueNumbers(QUESTION_COUNT, quiz.length - 1).forEach((question_id, index) => {

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
    add_radio_checks();
    quiz_d.append("<button onclick=\"quiz_check()\" data-bs-toggle=\"modal\" data-bs-target=\"#exampleModal\">Sprawdz odpowiedzi</button>")
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

    $("#result").text("Twój wynik to " + score + "/10");

    // alert("Your score: " + score + "/" + questions.length);

}

function add_radio_checks() {
    // Get all answer wrappers
    const answerWrappers = document.querySelectorAll('.answer-wrapper');

    // Add click event listeners to each answer wrapper
    answerWrappers.forEach((answerWrapper) => {
        answerWrapper.addEventListener('click', () => {
            // Find the radio button inside the clicked answer wrapper
            const radioButton = answerWrapper.querySelector('.answer-input');

            // Check the radio button
            radioButton.checked = true;

            // Remove 'checked' class from all answer wrappers
            answerWrapper.parentElement.childNodes.forEach((wrapper) => {
                wrapper.classList.remove('checked');
            });

            // Add 'checked' class to the clicked answer wrapper
            answerWrapper.classList.add('checked');
        });
    });
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