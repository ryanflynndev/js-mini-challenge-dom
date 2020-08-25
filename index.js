/***** Deliverable 1 *****/
const header = document.getElementById("header");
console.log("Here's your header:", header);


/***** Deliverable 2 *****/
header.style.color = "red";

/***** Deliverable 3 *****/
console.log("PLAYERS array looks like this:", PLAYERS)

PLAYERS.forEach(player => {
    let playerContainer = document.querySelector(".player-container");
    playerContainer.insertAdjacentHTML('beforeend',`
    <div class="player" data-number="${player.number}">
        <h3>
            ${player.name} (<em>${player.nickname}</em>)
        </h3>
        <img src="${player.image}" alt="${player.name}">
    </div>`);
    
})



/***** Deliverable 4 *****/

let raz = document.querySelector("div[data-number='7']");
raz.remove();
