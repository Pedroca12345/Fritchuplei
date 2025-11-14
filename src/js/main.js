const URL = "https://free-to-play-games-database.p.rapidapi.com/api/games";
const options = {
	method: "GET",
	headers: {
    "x-rapidapi-key": "7dff450e12mshb1425abb96a32b5p124a48jsn188ded6243aa",
		"x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com"
	}
};

const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const gameThumbnail = document.querySelector(".game-thumbnail img");
const gameTitle = document.querySelector(".game-title p");
const gameDescription = document.querySelector(".game-description p");

function fetchAPI () {

  const result = fetch(URL, options)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    return data;
  });

  return result;
}

function formatString (string) {
  return string.toLowerCase().trim();
}

searchButton.addEventListener("click", async () => {
  let searchedGame = formatString(searchInput.value);

  const allGamesData = await fetchAPI();

  const foundGame = allGamesData.filter(game => {
    if (formatString(game.title).indexOf(searchedGame) !== -1) {
      return game;
    }
  });

  if (foundGame[0]) {
    gameThumbnail.setAttribute("src", foundGame[0].thumbnail);
    gameTitle.innerHTML = foundGame[0].title;
    gameDescription.innerHTML = foundGame[0].short_description;
  } else {
    alert("Nenhum jogo encontrado!");
  }

  searchInput.value = "";
});