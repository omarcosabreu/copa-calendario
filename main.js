function createGame(player1, hour, player2) {
    return `
    <li>
        <img src="./assets/icon-${player1}.svg" alt="Bandeira da ${player1}"/>
        <strong>${hour}</strong>
        <img src="./assets/icon-${player2}.svg" alt="Bandeira do ${player2}"/>
    </li>
    `
}

let delay = -0.3;
function createCard(date, day, games) {
    delay = delay + 0.3;
    return `
    <div class="card" style="animation-delay: ${delay}s">
    <h2>${date} <span>${day}</span></h2>
    <ul>
        ${games}
    </ul>
</div>
    `
}

document.querySelector('#cards').innerHTML = 
        createCard('23/11', 'quarta',
        createGame('marroco', '07:00', 'croatian') +
        createGame('germany', '10:00', 'japan') +
        createGame('spain','13:00','costarica') +
        createGame('belgium','16:00','canada') 
        )+
        createCard('24/11', 'quinta',
            createGame('switzerland', '07:00', 'cameroon') +
            createGame('uruguai', '10:00', 'southkorea') +
            createGame('portugal','13:00','ghana') +
            createGame('brazil','16:00','serbia') 
            ) +
        createCard('28/11', 'segunda',
           createGame('cameroon', '07:00', 'serbia') +
           createGame('southkorea', '10:00', 'ghana') +
           createGame('brazil','13:00','switzerland') +
           createGame('portugal','16:00','uruguai') 
           )+
        createCard('02/12', 'sexta',
           createGame('southkorea', '12:00', 'portugal') +
           createGame('ghana', '12:00', 'uruguai') +
           createGame('serbia','16:00','switzerland') +
           createGame('cameroon','16:00','brazil')
           )
