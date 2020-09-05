const options = document.querySelectorAll('.option'),
    computerOptionDiv = document.querySelector('.computer-option'),
    gameText = document.querySelector('.game-text'),
    playerScore = document.querySelector('.player-score'),
    computerScore = document.querySelector('.computer-score'),
    optionsArr = Array.from(options);

let input = document.querySelector('#fun');

const win = (winner) => {
    if (winner === 'player') {
        playerScore.textContent = parseInt(playerScore.textContent) + 1;
    } else {
        computerScore.textContent = parseInt(computerScore.textContent) + 1;
    }
};

const computerAlwaysWins = (option) => {
    switch (option) {
        case 'rock':
            return 0;
        
        case 'paper': 
            return 2;
        
        case 'scissors':
            return 0;
    }
};

const judjing = (playerOption, computerOption) => {
    if (playerOption.dataset.option === computerOption.dataset.option) {
        setTimeout(() => {
            gameText.innerHTML = 'draw';
        }, 150);
    } else {
        switch (playerOption.dataset.option) {
            case 'rock':
                if (computerOption.dataset.option === 'paper') {
                    setTimeout(() => {
                        gameText.innerHTML = 'computer wins';
                        win('computer');
                    }, 150);
                } else {
                    setTimeout(() => {
                        gameText.innerHTML = 'player wins';
                        win('player');
                    }, 150);
                }
                break;

            case 'paper':
                if (computerOption.dataset.option === 'rock') {
                    setTimeout(() => {
                        gameText.innerHTML = 'player wins';
                        win('player');
                    }, 150);
                } else {
                    setTimeout(() => {
                        gameText.innerHTML = 'computer wins';
                        win('computer');
                    }, 150);
                }
                break;

            case 'scissors':
                if (computerOption.dataset.option === 'paper') {
                    setTimeout(() => {
                        gameText.innerHTML = 'player wins';
                        win('player');
                    }, 150);
                } else {
                    setTimeout(() => {
                        gameText.innerHTML = 'computer wins';
                        win('computer');
                    }, 150);
                }
                break;
        }
    }
};

options.forEach((option) => {
    option.addEventListener('click', () => {
        if (input.hasAttribute('disabled')) {
            computerOptionDiv.innerHTML = '';
            let computerOption = optionsArr[computerAlwaysWins(option.dataset.option)].cloneNode(true);
            computerOptionDiv.append(computerOption);
            judjing(option, computerOption);
        } else {
            input.setAttribute('disabled', true);
            computerOptionDiv.innerHTML = '';
            let computerOption = optionsArr[Math.floor(Math.random() * 3)].cloneNode(true);
            computerOptionDiv.append(computerOption);
            judjing(option, computerOption);
        }
        
    });
});

input.addEventListener('click', () => {
    input.setAttribute('disabled', true);
})