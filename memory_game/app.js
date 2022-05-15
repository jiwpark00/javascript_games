const cardArray = [
    {
        name: 'fries',
        img: 'images/mitchell-luo-ChXHveqrb28-unsplash.jpg'
    },
    {
        name: 'cheeseburger',
        img: 'images/engin-akyurt-g1MG9i0ux8Y-unsplash.jpg'
    },
    {
        name: 'hotdog',
        img: 'images/mateusz-feliksik-w96PYF0Uwjs-unsplash.jpg'
    },
    {
        name: 'pizza',
        img: 'images/peter-bravo-de-los-rios-OklpRh8-Sns-unsplash.jpg'
    },
    {
        name: 'ice-cream',
        img: 'images/ian-dooley-TLD6iCOlyb0-unsplash.jpg'
    },
    {
        name: 'milkshake',
        img: 'images/pranav-kumar-jain-NyHDsR7zEgY-unsplash.jpg'
    },
    {
        name: 'fries',
        img: 'images/mitchell-luo-ChXHveqrb28-unsplash.jpg'
    },
    {
        name: 'cheeseburger',
        img: 'images/engin-akyurt-g1MG9i0ux8Y-unsplash.jpg'
    },
    {
        name: 'hotdog',
        img: 'images/mateusz-feliksik-w96PYF0Uwjs-unsplash.jpg'
    },
    {
        name: 'pizza',
        img: 'images/peter-bravo-de-los-rios-OklpRh8-Sns-unsplash.jpg'
    },
    {
        name: 'ice-cream',
        img: 'images/ian-dooley-TLD6iCOlyb0-unsplash.jpg'
    },
    {
        name: 'milkshake',
        img: 'images/pranav-kumar-jain-NyHDsR7zEgY-unsplash.jpg'
    }
]

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');
const totalTriesDisplay = document.querySelector('#total-tries');
let totalTriesCount = 0;
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.style.width="100px"; // this dynamically ensures the fixed width for each image
        card.style.height="100px"; // this dynamically ensures the fixed height for each image
        card.setAttribute('src', 'images/omar-flores-lQT_bOWtysE-unsplash.jpg');
        card.setAttribute('data-id', i);
        card.addEventListener('click',flipCard);
        gridDisplay.appendChild(card);

    }
}

createBoard();

function checkMatch() {
    const cards = document.querySelectorAll('#grid img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    console.log(cards);
    console.log('check for match!');

    if (optionOneId == optionTwoId) {
        alert('You have clicked the same image!');
        setTimeout(1000);
        cards[optionOneId].setAttribute('src', 'images/omar-flores-lQT_bOWtysE-unsplash.jpg');
        setTimeout(1000);
        cards[optionTwoId].setAttribute('src', 'images/omar-flores-lQT_bOWtysE-unsplash.jpg');
        totalTriesCount += 1;
    }

    else if (cardsChosen[0] == cardsChosen[1]) {
        // alert('You found a match!');
        cards[optionOneId].setAttribute('src', 'images/nordwood-themes-R53t-Tg6J4c-unsplash.jpg');
        cards[optionTwoId].setAttribute('src', 'images/nordwood-themes-R53t-Tg6J4c-unsplash.jpg');
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
        totalTriesCount += 1;
    }
    else {
        setTimeout(1000);
        cards[optionOneId].setAttribute('src', 'images/omar-flores-lQT_bOWtysE-unsplash.jpg');
        setTimeout(1000);
        cards[optionTwoId].setAttribute('src', 'images/omar-flores-lQT_bOWtysE-unsplash.jpg');
        // alert('Sorry try again!');
        totalTriesCount += 1;
    }

    totalTriesDisplay.textContent = totalTriesCount;

    resultDisplay.textContent = cardsWon.length;
    cardsChosen = []
    cardsChosenIds = []

    if (cardsWon.length == cardArray.length/2) {
        alert('Congratulations!');
        resultDisplay.innerHTML = 'Congratsulations you found them all';
    }
}

function flipCard() {
    let cardId = this.getAttribute('data-id');
    console.log(cardArray[cardId].name);
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId);
    console.log(cardsChosen);
    console.log(cardsChosenIds);
    this.setAttribute('src', cardArray[cardId].img)
    setTimeout(1000); // add additional time before checkMatch
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 1000);
    }
}