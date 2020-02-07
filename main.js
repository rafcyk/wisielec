const btnMulti = document.querySelector(".wrapMain .multi button.twoPeople");

let lettersToEnd = 0;
let faultCount = 0;
const faultsNumber = 5;
const chars = ["a", "ą", "b", "c", "ć", "d", "e", "ę", "f", "g", "h", "i", "j", "k", "l", "ł", "m", "n", "ń", "o", "ó", "p", "r", "s", "ś", "t", "u", "w", "x", "y", "z", "ź", "ż"];

let wordArray = [];
let spanLetters = [];
let spanChars = [];
let spanOneLetter = [];

const makeGame = () => {
  lettersToEnd = 0;
  faultCount = 0;

  const divGame = document.createElement("div");
  divGame.className = "game";

  document.body.appendChild(divGame);

  const imgExit = document.createElement("img");
  imgExit.src = "exit.png";
  divGame.appendChild(imgExit);

  const divRules = document.createElement("div");
  divRules.className = "rules";

  divGame.appendChild(divRules);

  const pTextRules = document.createElement("p");
  pTextRules.className = "textRules";
  pTextRules.textContent =
    "Witaj w grze wisielec dla dwóch osób. Gra polega na tym, że jedna osoba wpisuje hasło do odgadnięcia przez drugą osobę, po czym klikajac wybrane litery odgaduje hasło. Gra kończy się gdy jedna osoba odgadnie hasło lub wisielec uzupełni się do końca.";

  const btnStartGame = document.createElement("button");
  btnStartGame.className = "startGame";
  btnStartGame.textContent = "Dalej";

  divRules.appendChild(pTextRules);
  divRules.appendChild(btnStartGame);

  const playGame = () => {
    lettersToEnd = 0;
    spanLetters = [];
    faultCount = 0;
    spanOneLetter = [];
    while (divGame.firstChild) divGame.removeChild(divGame.firstChild);

    divGame.appendChild(imgExit);

    const divAddWord = document.createElement("div");
    divAddWord.className = "addWord";

    divGame.appendChild(divAddWord);

    const inputWord = document.createElement("input");
    inputWord.placeholder = "Wpisz hasło";

    const btnPlay = document.createElement("button");
    btnPlay.className = "play";
    btnPlay.textContent = "Graj";

    divAddWord.appendChild(inputWord);
    divAddWord.appendChild(btnPlay);

    const addWord = () => {
      const word = inputWord.value.toLowerCase();
      wordArray = [...word];


      if (inputWord.value && !wordArray.includes("1") && !wordArray.includes("!") && !wordArray.includes("2") && !wordArray.includes("@") && !wordArray.includes("3") && !wordArray.includes("#") && !wordArray.includes("4") && !wordArray.includes("$") && !wordArray.includes("5") && !wordArray.includes("%") && !wordArray.includes("6") && !wordArray.includes("^") && !wordArray.includes("7") && !wordArray.includes("&") && !wordArray.includes("8") && !wordArray.includes("*") && !wordArray.includes("9") && !wordArray.includes("(") && !wordArray.includes("0") && !wordArray.includes(")") && !wordArray.includes("-") && !wordArray.includes("_") && !wordArray.includes("+") && !wordArray.includes("=") && !wordArray.includes('""') && !wordArray.includes("|") && !wordArray.includes("{") && !wordArray.includes("}") && !wordArray.includes("[") && !wordArray.includes("]") && !wordArray.includes(":") && !wordArray.includes(";") && !wordArray.includes('"') && !wordArray.includes("'") && !wordArray.includes(",") && !wordArray.includes("<") && !wordArray.includes(".") && !wordArray.includes(">") && !wordArray.includes("/") && !wordArray.includes("?")) {
        while (divGame.firstChild) divGame.removeChild(divGame.firstChild);

        divGame.appendChild(imgExit);

        const divWrapDead = document.createElement('div');
        divWrapDead.className = 'wrapDead';
        divGame.appendChild(divWrapDead);

        const imgGallows = document.createElement('img');
        imgGallows.className = 'gallows';
        imgGallows.src = 'szubienica.png';

        divWrapDead.appendChild(imgGallows);

        const divWrapWord = document.createElement("div");
        divWrapWord.className = "wrapWord";
        divGame.appendChild(divWrapWord);

        for (let i = 0; i < wordArray.length; i++) {
          if (wordArray[i] !== " ") {
            const divWrapLetter = document.createElement("div");
            divWrapLetter.className = "wrapLetter";

            divWrapWord.appendChild(divWrapLetter);

            const spanLetter = document.createElement("span");
            spanLetter.className = "letter";
            spanLetter.textContent = wordArray[i];
            spanLetter.style.opacity = 0;
            spanLetters.push(spanLetter);

            const spanLine = document.createElement("span");
            spanLine.className = "line";

            divWrapLetter.appendChild(spanLetter);
            divWrapLetter.appendChild(spanLine);
          } else if (wordArray[i] == " ") {
            const divWrapLetter = document.createElement("div");
            divWrapLetter.className = "wrapLetter";

            divWrapWord.appendChild(divWrapLetter);

            const spanLetter = document.createElement("span");
            spanLetter.className = "letter";
            spanLetter.textContent = wordArray[i];
            spanLetter.style.opacity = 0;

            divWrapLetter.appendChild(spanLetter);
          }
        }

        const divWrapChars = document.createElement("div");
        divWrapChars.className = "wrapChars";
        divGame.appendChild(divWrapChars);

        for (let i = 0; i < chars.length; i++) {
          const divWrapChar = document.createElement("div");
          divWrapChar.className = "wrapChar";
          divWrapChar.textContent = chars[i];
          divWrapChars.appendChild(divWrapChar);

          spanChars.push(divWrapChar);
        }



        for (let i = 0; i < spanLetters.length; i++) {
          spanOneLetter.push(spanLetters[i].textContent);
        }


        spanChars.forEach(char => {
          char.addEventListener("click", () => {
            char.style.pointerEvents = "none";
            char.style.opacity = 0.3;




            if (!spanOneLetter.includes(char.textContent)) {
              faultCount++;
            }

            for (let i = 0; i < spanLetters.length; i++) {
              if (spanLetters[i].textContent === char.textContent) {
                spanLetters[i].style.opacity = 1;
                console.log(lettersToEnd);

                lettersToEnd++;
              }
            }


            switch (faultCount) {
              case 1:
                const divHead = document.createElement("div");
                divHead.className = "head";
                divWrapDead.appendChild(divHead);
                break;

              case 2:
                const divBody = document.createElement("div");
                divBody.className = "body";
                divWrapDead.appendChild(divBody)
                break;

              case 3:
                const divLeftHand = document.createElement("div");
                divLeftHand.className = "leftHand";
                divWrapDead.appendChild(divLeftHand);
                break;

              case 4:
                const divRightHand = document.createElement("div");
                divRightHand.className = "rightHand";
                divWrapDead.appendChild(divRightHand);
                break;

              case 5:
                const divLeftLeg = document.createElement("div");
                divLeftLeg.className = "leftLeg";
                divWrapDead.appendChild(divLeftLeg);
                break;

              case 6:
                const divRightLeg = document.createElement("div");
                divRightLeg.className = "rightLeg";
                divWrapDead.appendChild(divRightLeg);

                for (let i = 0; i < spanChars.length; i++) {
                  spanChars[i].style.pointerEvents = "none";
                }

                const divLoose = document.createElement("div");
                divLoose.className = "looseScreen";
                divLoose.textContent = "Przegrałeś!";
                divGame.appendChild(divLoose);
                divLoose.appendChild(btnStartGame);

                const spanFinal = document.querySelectorAll('span.letter');

                spanFinal.forEach(span => {
                  span.style.opacity = 1;
                });


                break;
            }

            if (lettersToEnd == spanLetters.length) {
              console.log("wygrałes");
              const divWin = document.createElement("div");
              divWin.className = "winScreen";
              divWin.textContent = "Wygrałeś!";
              divGame.appendChild(divWin);
              divWin.appendChild(btnStartGame);



              for (let i = 0; i < spanChars.length; i++) {
                spanChars[i].style.pointerEvents = "none";
              }
            }
          });
        });
      } else {
        alert("Wpisz poprawnie hasło!");
        inputWord.value = "";
      }
    };

    btnPlay.addEventListener("click", addWord);
  };

  btnStartGame.addEventListener("click", playGame);
  imgExit.addEventListener("click", () => {
    document.body.removeChild(divGame);
  });
};

btnMulti.addEventListener("click", makeGame);



const biology = ['dna', 'fotosynteza', 'fenotyp', 'dializa', 'cytoplazma', 'geny', 'komórka', 'allel', 'mitochondrium', 'neurony', 'układ kostny', 'kości', 'potylica', 'czaszka', 'skurcz', 'symbioza', 'aorta', 'mózg', 'naczynia krwionośne', 'serce', 'oddychanie', 'szpik', 'krew', 'nerwy', 'oddech', 'ewolucja', 'fizjologia', 'cytosol', 'biotop', 'egzyna', 'korzeń', 'limfocyty', 'łodyga', 'zapłodnienie', 'kinetocylium'];

const music = ['saksofon', 'trąbka', 'gama', 'klucz wiolinowy', 'intrumenty dęte', 'klawisze', 'puzon', 'fortepian', 'klucz basowy', 'bemole', 'perkusja', 'ksylofon', 'werbel', 'stroik', 'tonacja', 'metronom', 'rytm', 'skrzypce', 'smyczek', 'wiolonczela', 'kontrabas', 'struna', 'gitara klasyczna', 'utwór', 'etiuda', 'krzyżyk', 'gitara akustyczna', 'pięciolinia', 'preludium', 'opus', 'synkopa', 'triola', 'flet', 'zapis nutowy', 'chór', 'kwartet', 'kwintet', 'interwały', 'oktawa', 'kwinta', 'sekunda', 'klarnet', 'opera', 'filharmonia'];

const sport = ['klub', 'drużyna', 'piłka nożna', 'piłka ręczna', 'koszykówka', 'siatkówka', 'pływanie', 'igrzyska olimpijskie', 'boisko', 'piłka', 'sędzia', 'curling', 'baseball', 'linie boczne', 'linia końcowa', 'mistrzostwa świata', 'mistrzowstwa europy', 'spalony', 'faul', 'trener', 'faul taktyczny', 'rozgrywający', 'atakujący', 'napastnik', 'obrońca', 'pomocnik', 'bramkarz', 'przyjmujący', 'libero', 'siłownia', 'przygotowanie fizyczne', 'wyścigi', 'formuła jeden', 'kierowca', 'rajd dakar', 'podium', 'medal', 'lekkoatletyka', 'wyścigi', 'skok o tyczce', 'skok w dal'];

console.log(sport.length);


const btnSingle = document.querySelector('.wrapMain .single button.onePerson');




const gameSingle = () => {

  lettersToEnd = 0;
  spanLetters = [];
  faultCount = 0;
  spanOneLetter = [];

  const divGameSingle = document.createElement('div');
  divGameSingle.className = 'gameSingle';
  document.body.appendChild(divGameSingle);

  const imgExit = document.createElement("img");
  imgExit.src = "exit.png";

  divGameSingle.appendChild(imgExit);

  imgExit.addEventListener("click", () => {
    document.body.removeChild(divGameSingle);
  });

  const divWrapCategory = document.createElement('div');
  divWrapCategory.className = 'wrapCategory';
  divGameSingle.appendChild(divWrapCategory);

  const chooseCategory = document.createElement('h2');
  chooseCategory.textContent = 'Wybierz kategorię:';

  divWrapCategory.appendChild(chooseCategory);

  const btnBiology = document.createElement('button');
  btnBiology.className = 'chooseBiology';
  btnBiology.textContent = 'biologia';

  const btnMusic = document.createElement('button');
  btnMusic.className = 'chooseMusic';
  btnMusic.textContent = 'muzyka';

  const btnSport = document.createElement('button');
  btnSport.className = 'chooseSport';
  btnSport.textContent = 'sport';

  divWrapCategory.appendChild(btnBiology);
  divWrapCategory.appendChild(btnMusic);
  divWrapCategory.appendChild(btnSport);



  const biologyQuiz = () => {
    while (divGameSingle.firstChild) divGameSingle.removeChild(divGameSingle.firstChild);

    lettersToEnd = 0;
    spanLetters = [];
    faultCount = 0;
    spanOneLetter = [];

    const btnAgain = document.createElement('button');
    btnAgain.className = 'playAgain';
    btnAgain.textContent = 'Zagraj ponownie';

    divGameSingle.appendChild(imgExit);

    const word = biology[Math.floor(Math.random() * biology.length - 1)];
    wordArray = [...word];
    console.log(word);

    const divWrapDead = document.createElement('div');
    divWrapDead.className = 'wrapDead';
    divGameSingle.appendChild(divWrapDead);

    const imgGallows = document.createElement('img');
    imgGallows.className = 'gallows';
    imgGallows.src = 'szubienica.png';

    divWrapDead.appendChild(imgGallows);

    const divWrapWord = document.createElement("div");
    divWrapWord.className = "wrapWord";
    divGameSingle.appendChild(divWrapWord);

    for (let i = 0; i < wordArray.length; i++) {
      if (wordArray[i] !== " ") {
        const divWrapLetter = document.createElement("div");
        divWrapLetter.className = "wrapLetter";

        divWrapWord.appendChild(divWrapLetter);

        const spanLetter = document.createElement("span");
        spanLetter.className = "letter";
        spanLetter.textContent = wordArray[i];
        spanLetter.style.opacity = 0;
        spanLetters.push(spanLetter);

        const spanLine = document.createElement("span");
        spanLine.className = "line";

        divWrapLetter.appendChild(spanLetter);
        divWrapLetter.appendChild(spanLine);
      } else if (wordArray[i] == " ") {
        const divWrapLetter = document.createElement("div");
        divWrapLetter.className = "wrapLetter";

        divWrapWord.appendChild(divWrapLetter);

        const spanLetter = document.createElement("span");
        spanLetter.className = "letter";
        spanLetter.textContent = wordArray[i];
        spanLetter.style.opacity = 0;

        divWrapLetter.appendChild(spanLetter);
      }
    }

    const divWrapChars = document.createElement("div");
    divWrapChars.className = "wrapChars";
    divGameSingle.appendChild(divWrapChars);

    for (let i = 0; i < chars.length; i++) {
      const divWrapChar = document.createElement("div");
      divWrapChar.className = "wrapChar";
      divWrapChar.textContent = chars[i];
      divWrapChars.appendChild(divWrapChar);

      spanChars.push(divWrapChar);
    }



    for (let i = 0; i < spanLetters.length; i++) {
      spanOneLetter.push(spanLetters[i].textContent);
    }


    spanChars.forEach(char => {
      char.addEventListener("click", () => {
        char.style.pointerEvents = "none";
        char.style.opacity = 0.3;




        if (!spanOneLetter.includes(char.textContent)) {
          faultCount++;
        }

        for (let i = 0; i < spanLetters.length; i++) {
          if (spanLetters[i].textContent === char.textContent) {
            spanLetters[i].style.opacity = 1;
            console.log(lettersToEnd);

            lettersToEnd++;
          }
        }


        switch (faultCount) {
          case 1:
            const divHead = document.createElement("div");
            divHead.className = "head";
            divWrapDead.appendChild(divHead);
            break;

          case 2:
            const divBody = document.createElement("div");
            divBody.className = "body";
            divWrapDead.appendChild(divBody)
            break;

          case 3:
            const divLeftHand = document.createElement("div");
            divLeftHand.className = "leftHand";
            divWrapDead.appendChild(divLeftHand);
            break;

          case 4:
            const divRightHand = document.createElement("div");
            divRightHand.className = "rightHand";
            divWrapDead.appendChild(divRightHand);
            break;

          case 5:
            const divLeftLeg = document.createElement("div");
            divLeftLeg.className = "leftLeg";
            divWrapDead.appendChild(divLeftLeg);
            break;

          case 6:
            const divRightLeg = document.createElement("div");
            divRightLeg.className = "rightLeg";
            divWrapDead.appendChild(divRightLeg);

            for (let i = 0; i < spanChars.length; i++) {
              spanChars[i].style.pointerEvents = "none";
            }

            const spanFinal = document.querySelectorAll('span.letter');

            spanFinal.forEach(span => {
              span.style.opacity = 1;
            });

            const divLoose = document.createElement("div");
            divLoose.className = "looseScreen";
            divLoose.textContent = "Przegrałeś!";
            divGameSingle.appendChild(divLoose);
            divLoose.appendChild(btnAgain);
            btnAgain.addEventListener('click', biologyQuiz);



            break;
        }

        if (lettersToEnd == spanLetters.length) {
          console.log("wygrałes");
          const divWin = document.createElement("div");
          divWin.className = "winScreen";
          divWin.textContent = "Wygrałeś!";
          divGameSingle.appendChild(divWin);
          divWin.appendChild(btnAgain);
          btnAgain.addEventListener('click', biologyQuiz);

          for (let i = 0; i < spanChars.length; i++) {
            spanChars[i].style.pointerEvents = "none";
          }
        }
      });
    });
  }


  btnBiology.addEventListener('click', biologyQuiz);



  const musicQuiz = () => {
    while (divGameSingle.firstChild) divGameSingle.removeChild(divGameSingle.firstChild);

    lettersToEnd = 0;
    spanLetters = [];
    faultCount = 0;
    spanOneLetter = [];

    const btnAgain = document.createElement('button');
    btnAgain.className = 'playAgain';
    btnAgain.textContent = 'Zagraj ponownie';

    divGameSingle.appendChild(imgExit);

    const word = music[Math.floor(Math.random() * music.length - 1)];
    wordArray = [...word];
    console.log(word);

    const divWrapDead = document.createElement('div');
    divWrapDead.className = 'wrapDead';
    divGameSingle.appendChild(divWrapDead);

    const imgGallows = document.createElement('img');
    imgGallows.className = 'gallows';
    imgGallows.src = 'szubienica.png';

    divWrapDead.appendChild(imgGallows);

    const divWrapWord = document.createElement("div");
    divWrapWord.className = "wrapWord";
    divGameSingle.appendChild(divWrapWord);

    for (let i = 0; i < wordArray.length; i++) {
      if (wordArray[i] !== " ") {
        const divWrapLetter = document.createElement("div");
        divWrapLetter.className = "wrapLetter";

        divWrapWord.appendChild(divWrapLetter);

        const spanLetter = document.createElement("span");
        spanLetter.className = "letter";
        spanLetter.textContent = wordArray[i];
        spanLetter.style.opacity = 0;
        spanLetters.push(spanLetter);

        const spanLine = document.createElement("span");
        spanLine.className = "line";

        divWrapLetter.appendChild(spanLetter);
        divWrapLetter.appendChild(spanLine);
      } else if (wordArray[i] == " ") {
        const divWrapLetter = document.createElement("div");
        divWrapLetter.className = "wrapLetter";

        divWrapWord.appendChild(divWrapLetter);

        const spanLetter = document.createElement("span");
        spanLetter.className = "letter";
        spanLetter.textContent = wordArray[i];
        spanLetter.style.opacity = 0;

        divWrapLetter.appendChild(spanLetter);
      }
    }

    const divWrapChars = document.createElement("div");
    divWrapChars.className = "wrapChars";
    divGameSingle.appendChild(divWrapChars);

    for (let i = 0; i < chars.length; i++) {
      const divWrapChar = document.createElement("div");
      divWrapChar.className = "wrapChar";
      divWrapChar.textContent = chars[i];
      divWrapChars.appendChild(divWrapChar);

      spanChars.push(divWrapChar);
    }



    for (let i = 0; i < spanLetters.length; i++) {
      spanOneLetter.push(spanLetters[i].textContent);
    }


    spanChars.forEach(char => {
      char.addEventListener("click", () => {
        char.style.pointerEvents = "none";
        char.style.opacity = 0.3;




        if (!spanOneLetter.includes(char.textContent)) {
          faultCount++;
        }

        for (let i = 0; i < spanLetters.length; i++) {
          if (spanLetters[i].textContent === char.textContent) {
            spanLetters[i].style.opacity = 1;
            console.log(lettersToEnd);

            lettersToEnd++;
          }
        }


        switch (faultCount) {
          case 1:
            const divHead = document.createElement("div");
            divHead.className = "head";
            divWrapDead.appendChild(divHead);
            break;

          case 2:
            const divBody = document.createElement("div");
            divBody.className = "body";
            divWrapDead.appendChild(divBody)
            break;

          case 3:
            const divLeftHand = document.createElement("div");
            divLeftHand.className = "leftHand";
            divWrapDead.appendChild(divLeftHand);
            break;

          case 4:
            const divRightHand = document.createElement("div");
            divRightHand.className = "rightHand";
            divWrapDead.appendChild(divRightHand);
            break;

          case 5:
            const divLeftLeg = document.createElement("div");
            divLeftLeg.className = "leftLeg";
            divWrapDead.appendChild(divLeftLeg);
            break;

          case 6:
            const divRightLeg = document.createElement("div");
            divRightLeg.className = "rightLeg";
            divWrapDead.appendChild(divRightLeg);

            for (let i = 0; i < spanChars.length; i++) {
              spanChars[i].style.pointerEvents = "none";
            }

            const spanFinal = document.querySelectorAll('span.letter');

            spanFinal.forEach(span => {
              span.style.opacity = 1;
            });

            const divLoose = document.createElement("div");
            divLoose.className = "looseScreen";
            divLoose.textContent = "Przegrałeś!";
            divGameSingle.appendChild(divLoose);
            divLoose.appendChild(btnAgain);
            btnAgain.addEventListener('click', musicQuiz);



            break;
        }

        if (lettersToEnd == spanLetters.length) {
          console.log("wygrałes");
          const divWin = document.createElement("div");
          divWin.className = "winScreen";
          divWin.textContent = "Wygrałeś!";
          divGameSingle.appendChild(divWin);
          divWin.appendChild(btnAgain);
          btnAgain.addEventListener('click', musicQuiz);

          for (let i = 0; i < spanChars.length; i++) {
            spanChars[i].style.pointerEvents = "none";
          }
        }
      });
    });

  }






  btnMusic.addEventListener('click', musicQuiz);


  const sportQuiz = () => {
    while (divGameSingle.firstChild) divGameSingle.removeChild(divGameSingle.firstChild);

    lettersToEnd = 0;
    spanLetters = [];
    faultCount = 0;
    spanOneLetter = [];

    const btnAgain = document.createElement('button');
    btnAgain.className = 'playAgain';
    btnAgain.textContent = 'Zagraj ponownie';

    divGameSingle.appendChild(imgExit);

    const word = sport[Math.floor(Math.random() * sport.length - 1)];
    wordArray = [...word];
    console.log(word);

    const divWrapDead = document.createElement('div');
    divWrapDead.className = 'wrapDead';
    divGameSingle.appendChild(divWrapDead);

    const imgGallows = document.createElement('img');
    imgGallows.className = 'gallows';
    imgGallows.src = 'szubienica.png';

    divWrapDead.appendChild(imgGallows);

    const divWrapWord = document.createElement("div");
    divWrapWord.className = "wrapWord";
    divGameSingle.appendChild(divWrapWord);

    for (let i = 0; i < wordArray.length; i++) {
      if (wordArray[i] !== " ") {
        const divWrapLetter = document.createElement("div");
        divWrapLetter.className = "wrapLetter";

        divWrapWord.appendChild(divWrapLetter);

        const spanLetter = document.createElement("span");
        spanLetter.className = "letter";
        spanLetter.textContent = wordArray[i];
        spanLetter.style.opacity = 0;
        spanLetters.push(spanLetter);

        const spanLine = document.createElement("span");
        spanLine.className = "line";

        divWrapLetter.appendChild(spanLetter);
        divWrapLetter.appendChild(spanLine);
      } else if (wordArray[i] == " ") {
        const divWrapLetter = document.createElement("div");
        divWrapLetter.className = "wrapLetter";

        divWrapWord.appendChild(divWrapLetter);

        const spanLetter = document.createElement("span");
        spanLetter.className = "letter";
        spanLetter.textContent = wordArray[i];
        spanLetter.style.opacity = 0;

        divWrapLetter.appendChild(spanLetter);
      }
    }

    const divWrapChars = document.createElement("div");
    divWrapChars.className = "wrapChars";
    divGameSingle.appendChild(divWrapChars);

    for (let i = 0; i < chars.length; i++) {
      const divWrapChar = document.createElement("div");
      divWrapChar.className = "wrapChar";
      divWrapChar.textContent = chars[i];
      divWrapChars.appendChild(divWrapChar);

      spanChars.push(divWrapChar);
    }



    for (let i = 0; i < spanLetters.length; i++) {
      spanOneLetter.push(spanLetters[i].textContent);
    }


    spanChars.forEach(char => {
      char.addEventListener("click", () => {
        char.style.pointerEvents = "none";
        char.style.opacity = 0.3;




        if (!spanOneLetter.includes(char.textContent)) {
          faultCount++;
        }

        for (let i = 0; i < spanLetters.length; i++) {
          if (spanLetters[i].textContent === char.textContent) {
            spanLetters[i].style.opacity = 1;
            console.log(lettersToEnd);

            lettersToEnd++;
          }
        }


        switch (faultCount) {
          case 1:
            const divHead = document.createElement("div");
            divHead.className = "head";
            divWrapDead.appendChild(divHead);
            break;

          case 2:
            const divBody = document.createElement("div");
            divBody.className = "body";
            divWrapDead.appendChild(divBody)
            break;

          case 3:
            const divLeftHand = document.createElement("div");
            divLeftHand.className = "leftHand";
            divWrapDead.appendChild(divLeftHand);
            break;

          case 4:
            const divRightHand = document.createElement("div");
            divRightHand.className = "rightHand";
            divWrapDead.appendChild(divRightHand);
            break;

          case 5:
            const divLeftLeg = document.createElement("div");
            divLeftLeg.className = "leftLeg";
            divWrapDead.appendChild(divLeftLeg);
            break;

          case 6:
            const divRightLeg = document.createElement("div");
            divRightLeg.className = "rightLeg";
            divWrapDead.appendChild(divRightLeg);

            for (let i = 0; i < spanChars.length; i++) {
              spanChars[i].style.pointerEvents = "none";
            }

            const spanFinal = document.querySelectorAll('span.letter');

            spanFinal.forEach(span => {
              span.style.opacity = 1;
            });

            const divLoose = document.createElement("div");
            divLoose.className = "looseScreen";
            divLoose.textContent = "Przegrałeś!";
            divGameSingle.appendChild(divLoose);
            divLoose.appendChild(btnAgain);
            btnAgain.addEventListener('click', sportQuiz);



            break;
        }

        if (lettersToEnd == spanLetters.length) {
          console.log("wygrałes");
          const divWin = document.createElement("div");
          divWin.className = "winScreen";
          divWin.textContent = "Wygrałeś!";
          divGameSingle.appendChild(divWin);
          divWin.appendChild(btnAgain);
          btnAgain.addEventListener('click', sportQuiz);

          for (let i = 0; i < spanChars.length; i++) {
            spanChars[i].style.pointerEvents = "none";
          }
        }
      });
    });

  }


  btnSport.addEventListener('click', sportQuiz);
}



btnSingle.addEventListener('click', gameSingle);
