const options = document.querySelectorAll('.option'),
    computerOptionDiv = document.querySelector('.computer-option'),
    gameText = document.querySelector('.game-text'),
    playerScore = document.querySelector('.player-score'),
    computerScore = document.querySelector('.computer-score'),
    optionsArr = Array.from(options);

const win = (winner) => {
    if (winner === 'player') {
        playerScore.textContent = parseInt(playerScore.textContent) + 1;
    } else {
        computerScore.textContent = parseInt(computerScore.textContent) + 1;
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
        computerOptionDiv.innerHTML = '';
        let computerOption = optionsArr[Math.floor(Math.random() * 3)].cloneNode(true);
        computerOptionDiv.append(computerOption);
        judjing(option, computerOption);
    });
});