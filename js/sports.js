const loadPlayers = (search) => {
  const url = `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${search}`;
  // console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayPlayers(data.player));
};

const displayPlayers = (players) => {
  // console.log(players);
  const playersContainer = document.getElementById("players-container");
  playersContainer.textContent = "";
  players.forEach((player) => {
    // console.log(player);
    const playersDiv = document.createElement("div");
    playersDiv.classList.add("col");
    playersDiv.innerHTML = `
    <div class="card">
    <img src="${player.strThumb}" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">${player.dateBorn}</h5>
      <p>${player.dateSigned}</p>
      <p>${player.idPlayerManager}</p>
      <p>${player.strPlayer}</p>
      <p>${player.strNationality}</p>
      <p class="card-text">
        ${player.strDescriptionEN.slice(0, 120)}
      </p>
      <button onclick="loadDetailsPlayers('${
        player.idPlayer
      }')" class="btn btn-danger">Details</button>
    </div>
  </div>
    `;
    playersContainer.appendChild(playersDiv);
  });
};

const searchPlayers = () => {
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  console.log(searchText);
  loadPlayers(searchText);
  searchField.value;
};

const loadDetailsPlayers = () => {
  const url = `https://www.thesportsdb.com/api/v1/json/3/lookupplayer.php?id=34145937`;
  // console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayPlayersDetails(data.players[0]));
};

const displayPlayersDetails = (player) => {
  console.log(player);
  const playersDetails = document.getElementById("players-details");
  playersDetails.textContent = "";
  const playersDiv = document.createElement("div");
  playersDiv.classList.add("card");
  playersDiv.innerHTML = `
            <img src="${player.strThumb}" class="card-img-top" alt="..." />
            <div class="card-body">
            <h5 class="card-title">${player.dateBorn}</h5>
            <p>${player.dateSigned}</p>
            <p>${player.idPlayerManager}</p>
            <p>${player.strPlayer}</p>
            <p>${player.strNationality}</p>
            <p class="card-text">
              ${player.strDescriptionEN.slice(0, 120)}
            </p>
            </div>
  `;
  playersDetails.appendChild(playersDiv);
};

loadPlayers("messi");
