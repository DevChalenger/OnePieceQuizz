function listQuestion() {
  const questionList = [
    {
      question: "En quelle année OnePiece a été créé ?",
      answers: [
        {
          text: "1998",
          id: 01,
          correct: false,
        },
        {
          text: "1996",
          id: 02,
          correct: false,
        },
        {
          text: "1997",
          id: 03,
          correct: true,
        },
        {
          text: "1999",
          id: 04,
          correct: false,
        },
      ],
    },
    {
      question: "Comment s'appelle le mangaka de OnePiece ?",
      answers: [
        {
          text: "Masashi Kishimoto",
          id: 11,
          correct: false,
        },
        {
          text: "Eiichiro Oda",
          id: 12,
          correct: true,
        },
        {
          text: "Akira Toriyama",
          id: 13,
          correct: false,
        },
      ],
    },
    {
      question:
        "Qui est le cinquième membre des mugiwara à rejoindre officiellement l'équipage ?",
      answers: [
        {
          text: "Sanji",
          id: 21,
          correct: false,
        },
        {
          text: "Nami",
          id: 22,
          correct: true,
        },
        {
          text: "Chopper",
          id: 23,
          correct: false,
        },
        {
          text: "Usopp",
          id: 24,
          correct: false,
        },
      ],
    },
    {
      question:
        "Combien de Tome de OnePiece ont été vendus dans le monde en 2021?",
      answers: [
        {
          text: "480 million",
          id: 31,
          correct: true,
        },
        {
          text: "500 million",
          id: 32,
          correct: false,
        },
        {
          text: "490 million",
          id: 33,
          correct: false,
        },
        {
          text: "520 million",
          id: 34,
          correct: false,
        },
      ],
    },
    {
      question: "Quelle est la prime des mugiwara après l'arc Alabasta?",
      answers: [
        {
          text: "249 million",
          id: 41,
          img: "./assets/Images/Berrysymbol.png",
          correct: false,
        },
        {
          text: "259 million",
          id: 42,
          img: "./assets/Images/Berrysymbol.png",
          correct: false,
        },
        {
          text: "239 million",
          id: 43,
          img: "./assets/Images/Berrysymbol.png",
          correct: true,
        },
        {
          text: "160 million",
          id: 44,
          img: "./assets/Images/Berrysymbol.png",
          correct: false,
        },
      ],
    },
  ];
  return questionList;
}
