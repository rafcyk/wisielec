const btnMulti = document.querySelector('.wrapMain .multi button.twoPeople');


const chars = ['a', 'ą', 'b', 'c', 'ć', 'd', 'e', 'f', 'g', 'h', 'i', 'j' , 'k', 'l','ł', 'm', 'n', 'ń', 'o', 'ó', 'p', 'r', 's', 'ś', 't', 'u', 'w', 'x', 'y', 'z', 'ź' , 'ż'];

let wordArray = [];


const makeGame = ()=>{
    const divGame = document.createElement('div');
    divGame.className = 'game';

    document.body.appendChild(divGame);

    const divRules = document.createElement('div');
    divRules.className = 'rules';

    divGame.appendChild(divRules);

    const pTextRules = document.createElement('p');
    pTextRules.className = 'textRules';
    pTextRules.textContent = 'Witaj w grze wisielec dla dwóch osób. Gra polega na tym, że jedna osoba wpisuje hasło do odgadnięcia przez drugą osobę, po czym klikajac wybrane litery odgaduje hasło. Gra kończy się gdy jedna osoba odgadnie hasło lub wisielec uzupełni się do końca.';
    
    const btnStartGame = document.createElement('button');
    btnStartGame.className = 'startGame';
    btnStartGame.textContent = 'Dalej';

    divRules.appendChild(pTextRules);
    divRules.appendChild(btnStartGame);

    const playGame =()=>{
        while(divGame.firstChild) divGame.removeChild(divGame.firstChild)

        const divAddWord = document.createElement('div');
        divAddWord.className = 'addWord';

        divGame.appendChild(divAddWord);

        const inputWord = document.createElement('input');
        inputWord.placeholder = 'Wpisz hasło';

        const btnPlay = document.createElement('button');
        btnPlay.className = 'play';
        btnPlay.textContent = 'Graj';


        divAddWord.appendChild(inputWord);
        divAddWord.appendChild(btnPlay);

        const addWord = ()=> {
            while(divGame.firstChild) divGame.removeChild(divGame.firstChild)

                const divWrapWord = document.createElement('div');
                divWrapWord.className = 'wrapWord';
                divGame.appendChild(divWrapWord);

                const word = inputWord.value;
                wordArray = [...word];

                for(let i = 0; i < wordArray.length; i ++){
                    const divWrapLetter = document.createElement('div');
                    divWrapLetter.className = 'wrapLetter';

                    divWrapWord.appendChild(divWrapLetter);

                    const spanLetter = document.createElement('span');
                    spanLetter.className = 'letter';
                    spanLetter.textContent = wordArray[i];

                    const spanLine = document.createElement('span');
                    spanLine.className = 'line';

                    divWrapLetter.appendChild(spanLetter);
                    divWrapLetter.appendChild(spanLine);
                }
            

            for(let i = 0; i < chars.length; i++){
                


            }

            


        }

        btnPlay.addEventListener('click', addWord);


    }


    btnStartGame.addEventListener('click', playGame);

}







btnMulti.addEventListener('click', makeGame);