const btnMulti = document.querySelector(".wrapMain .multi button.twoPeople");

let lettersToEnd = 0;
let faultCount = 0;
const faultsNumber = 5;
const chars = ["a","ą","b", "c","ć","d","e","ę","f","g","h","i","j","k", "l","ł","m","n","ń","o","ó","p","r", "s","ś","t", "u", "w","x","y","z","ź","ż"];

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


         
        for(let i = 0; i < spanLetters.length; i++){
          spanOneLetter.push(spanLetters[i].textContent);
        }


        spanChars.forEach(char => {
          char.addEventListener("click", () => {
            char.style.pointerEvents = "none";
            char.style.opacity = 0.3;


            

              if(!spanOneLetter.includes(char.textContent)){
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
