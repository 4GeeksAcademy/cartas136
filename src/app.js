function generateCard() {
    const suits = ['Corazones', 'Diamantes', 'Picas', 'Tréboles'];
    const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

    const randomSuit = suits[Math.floor(Math.random() * suits.length)];
    const randomValue = values[Math.floor(Math.random() * values.length)];

    const card = document.getElementById('card');
    
    card.className = (randomSuit === 'Corazones' || randomSuit === 'Diamantes') ? 'card red' : 'card black';
    
    document.getElementById('suit-top').innerText = randomSuit;
    document.getElementById('suit-bottom').innerText = randomSuit;
    document.getElementById('value').innerText = randomValue;
}

document.getElementById('button').addEventListener('click', generateCard);
window.onload = generateCard;