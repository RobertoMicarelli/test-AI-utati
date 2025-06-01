const questions = [
    {
        question: "Intro GenAI: Cos'è principalmente l'Intelligenza Artificiale Generativa (GenAI)?",
        options: [
            "Un software per l'analisi statistica avanzata dei dati.",
            "Un tipo di AI che crea nuovi contenuti (testo, immagini, audio, video) basandosi su dati esistenti.",
            "Un sistema di robotica avanzata per l'automazione industriale.",
            "Un algoritmo per migliorare la velocità delle connessioni internet."
        ],
        answer: 1
    },
    {
        question: "Intro GenAI: Qual è uno degli obiettivi principali del corso \"AI-utati\" come descritto nell'introduzione?",
        options: [
            "Insegnare a programmare algoritmi di AI da zero.",
            "Fornire certificazioni ufficiali per l'uso di specifici software di AI.",
            "Sviluppare il giusto \"m-AI-ndset\" per imparare a imparare con la GenAI e trasformarla in un \"AI-utante\" quotidiano.",
            "Analizzare esclusivamente gli impatti negativi dell'AI sulla società."
        ],
        answer: 2
    },
    {
        question: "Intro GenAI: Secondo il materiale del corso, cosa rischia chi non svilupperà una padronanza di base degli strumenti di AI nei prossimi anni?",
        options: [
            "Di non poter più utilizzare i social media.",
            "Di restare ai margini del mondo del lavoro, superato da chi avrà coltivato una solida AI-Fluency.",
            "Di dover pagare tasse aggiuntive sull'uso della tecnologia.",
            "Di perdere completamente la capacità di pensiero critico."
        ],
        answer: 1
    },
    {
        question: "m-AI-ndset digitale di crescita: Cosa si intende per \"m-AI-ndset\" nel contesto del corso \"AI-utati\"?",
        options: [
            "La capacità di utilizzare fluentemente i social network.",
            "Un atteggiamento mentale orientato alla crescita, all'apprendimento continuo e all'adattamento nell'utilizzo dell'AI.",
            "Una conoscenza approfondita dell'hardware necessario per far funzionare l'AI.",
            "La tendenza a preferire soluzioni digitali rispetto a quelle analogiche."
        ],
        answer: 1
    },
    {
        question: "m-AI-ndset digitale di crescita: Quale delle seguenti NON è una caratteristica del \"m-AI-ndset\" promosso dal corso?",
        options: [
            "Sperimentazione attiva con gli strumenti AI.",
            "Adattamento e contestualizzazione dell'AI alle proprie esigenze.",
            "Evitare qualsiasi discussione o confronto con altri sull'uso dell'AI per non confondersi.",
            "Superare ostacoli cognitivi come la fissità funzionale."
        ],
        answer: 2
    },
    {
        question: "m-AI-ndset digitale di crescita: Perché è importante sviluppare un \"m-AI-ndset\" di crescita nell'era dell'AI, secondo il corso?",
        options: [
            "Perché l'AI sostituirà completamente il lavoro umano in tutti i settori.",
            "Per poter criticare efficacemente ogni nuova tecnologia AI che emerge.",
            "Perché permette di vedere l'AI come uno strumento per abbracciare il cambiamento e semplificare il lavoro.",
            "Per diventare esperti programmatori di AI in breve tempo."
        ],
        answer: 2
    },
    {
        question: "Glossario (AI): Cosa significa l'acronimo \"AI\"?",
        options: [
            "Automated Interface.",
            "Advanced Internet.",
            "Artificial Intelligence.",
            "Algorithmic Integration."
        ],
        answer: 2
    },
    {
        question: "Glossario (AI): Nel contesto dell'AI, cosa si intende per \"Machine Learning\"?",
        options: [
            "L'abilità di una macchina di eseguire compiti pre-programmati senza deviazioni.",
            "Un sottocampo dell'AI che fornisce ai sistemi la capacità di apprendere e migliorare automaticamente dall'esperienza senza essere esplicitamente programmati.",
            "La progettazione fisica di robot intelligenti.",
            "Un tipo di software utilizzato esclusivamente per l'analisi finanziaria."
        ],
        answer: 1
    },
    {
        question: "Glossario (AI): Cosa sono le \"Reti Neurali\" (Neural Networks) in AI?",
        options: [
            "Hardware specializzato per computer quantistici.",
            "Algoritmi di crittografia per la sicurezza dei dati.",
            "Modelli computazionali ispirati alla struttura e al funzionamento del cervello umano, usati per il riconoscimento di pattern e l'apprendimento.",
            "Protocolli di comunicazione per dispositivi IoT (Internet of Things)."
        ],
        answer: 2
    },
    {
        question: "LLM: Qual è una caratteristica chiave dei Large Language Models (LLM) come GPT?",
        options: [
            "Sono addestrati su piccole quantità di testo specialistico.",
            "Sono in grado di comprendere, generare e manipolare il linguaggio umano in modo sofisticato.",
            "Funzionano esclusivamente per tradurre lingue straniere.",
            "Richiedono che l'utente inserisca codice di programmazione per ogni interazione."
        ],
        answer: 1
    },
    {
        question: "LLM: Quale delle seguenti affermazioni descrive meglio la capacità di \"comprensione\" di un LLM?",
        options: [
            "Una vera e propria coscienza e comprensione emotiva del testo.",
            "La capacità di identificare pattern statistici e relazioni tra parole e frasi per rispondere in modo pertinente.",
            "La capacità di eseguire calcoli matematici complessi incorporati nel testo.",
            "La memorizzazione esatta di ogni testo su cui è stato addestrato."
        ],
        answer: 1
    },
    {
        question: "LLM: Per quale delle seguenti attività gli LLM NON sono tipicamente utilizzati in modo diretto ed efficace?",
        options: [
            "Generazione di articoli di notizie o post di blog.",
            "Controllo di macchinari industriali pesanti in tempo reale.",
            "Traduzione di testi da una lingua all'altra.",
            "Creazione di chatbot conversazionali."
        ],
        answer: 1
    },
    {
        question: "GenAI e applicazioni creative: In che modo la GenAI può supportare le applicazioni creative secondo il corso?",
        options: [
            "Sostituendo completamente la necessità di artisti e designer umani.",
            "Fornendo strumenti per generare rapidamente bozze, idee, immagini, musiche e testi, che possono poi essere rifiniti dall'uomo.",
            "Limitando la creatività a schemi predefiniti dagli algoritmi.",
            "Automatizzando solo la distribuzione di opere creative già esistenti."
        ],
        answer: 1
    },
    {
        question: "GenAI e applicazioni creative: Quale delle seguenti è un'applicazione creativa della GenAI menzionata implicitamente o esplicitamente nel materiale?",
        options: [
            "La guida autonoma dei veicoli.",
            "La creazione di presentazioni professionali in pochi minuti.",
            "L'ottimizzazione delle catene di montaggio industriali.",
            "La diagnosi medica basata su immagini radiologiche."
        ],
        answer: 1
    },
    {
        question: "GenAI e applicazioni creative: Come la GenAI può stimolare la creatività umana, secondo la filosofia del corso?",
        options: [
            "Fornendo risposte definitive e limitando l'esplorazione.",
            "Agendo come un \"AI-utante\" che aiuta a superare blocchi creativi, generare nuove prospettive e velocizzare la prototipazione.",
            "Imponendo uno stile artistico uniforme a tutti gli utenti.",
            "Rendendo obsoleta la necessità di apprendere tecniche artistiche tradizionali."
        ],
        answer: 1
    },
    {
        question: "Etica e responsabilità: Cosa si intende per \"Algoretica\", secondo la definizione di Paolo Benanti citata nel corso?",
        options: [
            "L'etica della programmazione degli algoritmi, focalizzata sulla correttezza del codice.",
            "L'etica dell'uso degli algoritmi, che richiede trasparenza e rispetto dei diritti umani.",
            "Un nuovo tipo di algoritmo AI particolarmente efficiente.",
            "Lo studio dell'impatto degli algoritmi sulle prestazioni dei computer."
        ],
        answer: 1
    },
    {
        question: "Etica e responsabilità: Perché è importante il concetto di \"Human in the Loop\" (essere umano nel processo decisionale) nell'uso dell'AI?",
        options: [
            "Per rallentare deliberatamente i processi decisionali automatizzati.",
            "Per garantire che l'essere umano mantenga il controllo, la supervisione e la responsabilità finale, specialmente in decisioni critiche.",
            "Perché gli umani sono intrinsecamente più veloci dell'AI nel processare grandi quantità di dati.",
            "Perché l'AI non è ancora in grado di prendere decisioni in autonomia."
        ],
        answer: 1
    },
    {
        question: "Etica e responsabilità: Quale potenziale rischio etico è associato all'uso dell'AI generativa, come i bias (distorsioni)?",
        options: [
            "La GenAI è completamente immune da bias, poiché si basa su dati oggettivi.",
            "I bias presenti nei dati di addestramento possono essere amplificati dalla GenAI, portando a risultati ingiusti o discriminatori.",
            "I bias possono essere introdotti solo intenzionalmente da programmatori malintenzionati.",
            "L'unico rischio etico è legato al consumo energetico eccessivo dei modelli."
        ],
        answer: 1
    },
    {
        question: "Personalizzazione di ambienti Gpt's: Cosa si intende per \"personalizzazione di ambienti GPT's\" (o Custom GPTs)?",
        options: [
            "Modificare il codice sorgente di modelli come GPT-4.",
            "Creare versioni specializzate di un modello GPT, fornendo istruzioni specifiche, conoscenze aggiuntive e definendo capacità particolari per compiti specifici.",
            "Acquistare un hardware dedicato per far funzionare i GPT.",
            "Tradurre l'interfaccia di un GPT in un'altra lingua."
        ],
        answer: 1
    },
    {
        question: "Personalizzazione di ambienti Gpt's: Qual è un vantaggio della personalizzazione degli ambienti GPT, come discusso o implicato nel corso?",
        options: [
            "Rende i modelli GPT più lenti ma più accurati.",
            "Permette di creare \"AI-utanti\" specifici per esigenze lavorative o personali, aumentando l'efficienza e la pertinenza delle risposte.",
            "Elimina completamente il rischio di risposte errate o \"allucinazioni\".",
            "Consente di utilizzare i GPT senza una connessione internet."
        ],
        answer: 1
    },
    {
        question: "Personalizzazione di ambienti Gpt's: La creazione di un \"Custom GPT\" (ambiente GPT personalizzato) richiede sempre:",
        options: [
            "Una laurea in informatica e anni di esperienza in programmazione.",
            "L'accesso a supercomputer per l'addestramento.",
            "La capacità di definire chiaramente lo scopo, le istruzioni e le conoscenze per il GPT, spesso attraverso interfacce intuitive.",
            "L'acquisto di una licenza software molto costosa."
        ],
        answer: 2
    },
    {
        question: "Strategie di Deep Research: Come può l'AI, in particolare la GenAI, assistere nelle strategie di \"Deep Research\"?",
        options: [
            "Sostituendo completamente la necessità di pensiero critico e analisi umana.",
            "Aiutando a sintetizzare grandi quantità di informazioni, identificare temi chiave, generare ipotesi e scoprire connessioni non ovvie.",
            "Fornendo risposte definitive che non richiedono ulteriori verifiche.",
            "Limitando la ricerca a fonti di informazione pre-approvate dall'AI."
        ],
        answer: 1
    },
    {
        question: "Progettazione contenuti: In che modo la GenAI può aiutare nella progettazione e creazione di contenuti (testi, immagini, ecc.)?",
        options: [
            "Solo correggendo errori grammaticali in testi già scritti.",
            "Generando bozze iniziali, idee, script, immagini illustrative, e aiutando a superare il \"blocco dello scrittore\" o del creativo.",
            "Creando contenuti identici a quelli già esistenti sul web per garantire la coerenza.",
            "Sostituendo completamente il ruolo dei content creator professionisti."
        ],
        answer: 1
    },
    {
        question: "Text to Text (Gemini - ChatGpt- Claude - Deepseek): Quale dei seguenti è uno strumento \"Text to Text\" menzionato nel materiale del corso come esempio?",
        options: [
            "Photoshop.",
            "Claude.",
            "Suno.",
            "Veo."
        ],
        answer: 1
    },
    {
        question: "Text to Text (Gemini - ChatGpt- Claude - Deepseek): Cosa permette di fare principalmente uno strumento \"Text to Text\" come ChatGPT o Gemini?",
        options: [
            "Modificare file audio esistenti.",
            "Generare testo coerente e contestualmente rilevante a partire da un input testuale (prompt).",
            "Creare modelli 3D da descrizioni testuali.",
            "Analizzare la composizione chimica di sostanze."
        ],
        answer: 1
    },
    {
        question: "Text to Image (Ideogram AI – ChatGpt – OpenArt): Ideogram AI è uno strumento specializzato nella generazione di quale tipo di output a partire da testo?",
        options: [
            "Codice di programmazione.",
            "Musica e paesaggi sonori.",
            "Immagini.",
            "Presentazioni animate."
        ],
        answer: 2
    },
    {
        question: "Text to Image (Ideogram AI – ChatGpt – OpenArt): Cosa si intende per \"prompt\" efficace in uno strumento Text to Image?",
        options: [
            "Una singola parola chiave.",
            "Una descrizione testuale dettagliata e chiara dell'immagine desiderata, includendo stile, soggetto, colori, e altri attributi.",
            "Un link a un'immagine esistente da modificare.",
            "Un comando per avviare la generazione casuale di immagini."
        ],
        answer: 1
    },
    {
        question: "Text to Video (Veo): Qual è la funzione principale di uno strumento AI come Veo, menzionato nel contesto delle capacità Text-to-Video?",
        options: [
            "Modificare video esistenti aggiungendo filtri speciali.",
            "Generare contenuti video a partire da descrizioni testuali (prompt).",
            "Analizzare video per identificare oggetti e persone.",
            "Convertire file video in diversi formati."
        ],
        answer: 1
    },
    {
        question: "Text to Audio (Suno – Elevenlabs): Suno AI è uno strumento che si focalizza principalmente sulla generazione di cosa a partire da input testuali?",
        options: [
            "Effetti sonori per film.",
            "Brani musicali completi, inclusi melodia, armonia e voce.",
            "Trascrizioni di discorsi in testo.",
            "Podcast e audiolibri."
        ],
        answer: 1
    },
    {
        question: "Strumenti open source, free e freemium: Cosa caratterizza uno strumento AI \"freemium\"?",
        options: [
            "È completamente gratuito e open source.",
            "Offre un set di funzionalità di base gratuitamente, con opzioni a pagamento per funzionalità avanzate o maggiore utilizzo.",
            "Richiede un abbonamento costoso fin dall'inizio.",
            "È disponibile solo per istituzioni accademiche."
        ],
        answer: 1
    }
];

const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');

const nameInput = document.getElementById('name');
const surnameInput = document.getElementById('surname');
const startBtn = document.getElementById('start-btn');
const validationMessage = document.getElementById('validation-message');

const questionCounter = document.getElementById('question-counter');
const questionText = document.getElementById('question-text');
const answerOptionsContainer = document.getElementById('answer-options');
const nextBtn = document.getElementById('next-btn');
const selectionError = document.getElementById('selection-error');

let currentQuestionIndex = 0;
let score = 0;
let userName = '';
let userSurname = '';
let shuffledQuestions = [];
let selectedOptionButton = null;

const PASSING_PERCENTAGE = 0.8;
const TOTAL_QUESTIONS = questions.length;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startQuiz() {
    const name = document.getElementById('name').value.trim();
    const surname = document.getElementById('surname').value.trim();
    
    if (!name || !surname) {
        document.getElementById('validation-message').textContent = 'Per favore, inserisci nome e cognome.';
        return;
    }

    // Select 10 random questions
    const shuffledQuestions = shuffleArray([...questions]).slice(0, 10);
    currentQuestions = shuffledQuestions;
    currentQuestionIndex = 0;
    score = 0;
    
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('quiz-screen').style.display = 'block';
    loadQuestion();
}

function loadQuestion() {
    selectionError.style.display = 'none';
    nextBtn.disabled = true; // Disable next until an answer is selected
    selectedOptionButton = null;

    const totalQuestionsInQuiz = currentQuestions.length; // Use the length of the current subset

    if (currentQuestionIndex < totalQuestionsInQuiz) {
        const currentQuestion = currentQuestions[currentQuestionIndex];
        questionCounter.textContent = `Domanda ${currentQuestionIndex + 1} di ${totalQuestionsInQuiz}`;
        questionText.textContent = currentQuestion.question;
        answerOptionsContainer.innerHTML = '';

        currentQuestion.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.textContent = option;
            button.addEventListener('click', () => selectAnswer(index, button));
            answerOptionsContainer.appendChild(button);
        });
        nextBtn.textContent = currentQuestionIndex === totalQuestionsInQuiz - 1 ? 'Termina Quiz' : 'Prossima Domanda';
    } else {
        showResults();
    }
}

function selectAnswer(selectedIndex, button) {
    if (selectedOptionButton) {
        selectedOptionButton.classList.remove('selected');
    }
    selectedOptionButton = button;
    selectedOptionButton.classList.add('selected');
    nextBtn.disabled = false; // Enable next button
    selectionError.style.display = 'none';
    // Store the selected index temporarily or process it directly in handleNext
    selectedOptionButton.dataset.selectedIndex = selectedIndex;
}

function handleNext() {
    if (!selectedOptionButton) {
        selectionError.style.display = 'block';
        return;
    }
    selectionError.style.display = 'none';

    const selectedIndex = parseInt(selectedOptionButton.dataset.selectedIndex);
    const correctAnswerIndex = currentQuestions[currentQuestionIndex].answer;

    if (selectedIndex === correctAnswerIndex) {
        score++;
    }
    
    // Optional: show feedback immediately (green/red)
    // Array.from(answerOptionsContainer.children).forEach((btn, idx) => {
    //     btn.disabled = true; // Disable options after answering
    //     if (idx === correctAnswerIndex) {
    //         btn.classList.add('correct');
    //     } else if (idx === selectedIndex && idx !== correctAnswerIndex) {
    //         btn.classList.add('incorrect');
    //     }
    // });
    // nextBtn.disabled = false; // Ensure next button is enabled to proceed

    currentQuestionIndex++;
    const totalQuestionsInQuiz = currentQuestions.length;
    if (currentQuestionIndex < totalQuestionsInQuiz) {
        loadQuestion();
    } else {
        showResults();
    }
}


function showResults() {
    const quizScreen = document.getElementById('quiz-screen');
    const resultScreen = document.getElementById('result-screen');
    const totalQuestions = currentQuestions.length;
    const percentage = (score / totalQuestions) * 100;
    const passingScore = 80; // 80% required to pass

    quizScreen.style.display = 'none';
    resultScreen.style.display = 'block';

    if (percentage >= passingScore) {
        resultScreen.innerHTML = `
            <img src="/Users/robertomicarelli/Desktop/CORSO-AI-ROBY/Test Esame/Quiz_Completato_Con_Successo.jpg" alt="Quiz Completato" style="max-width: 100%; margin-bottom: 20px;">
            <h2>Congratulazioni!</h2>
            <p>Hai completato il quiz con successo!</p>
            <p>Punteggio: ${score}/${totalQuestions} (${percentage.toFixed(1)}%)</p>
            <p>Fai lo screenshot dell'esito e mandalo a Roberto Micarelli per ricevere l'attestato.</p>
        `;
    } else {
        resultScreen.innerHTML = `
            <h2>Mi dispiace</h2>
            <p>Punteggio: ${score}/${totalQuestions} (${percentage.toFixed(1)}%)</p>
            <p>Mi dispiace per l'inconveniente, sai che puoi rivedere le sessioni, rileggere le slide e fare pratica pratica pratica con Pazienza e ripetere il quiz quante volte lo desideri. Potresti anche farti aiutare da un Chatbot ma non avresti avuto apprendimento, a te la scelta. Grazie</p>
        `;
    }
}

startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', handleNext);

// Inizializzazione per disabilitare il pulsante "Prossima Domanda" all'inizio
document.addEventListener('DOMContentLoaded', () => {
    if(nextBtn) nextBtn.disabled = true;
});