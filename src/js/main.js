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

searchButton.addEventListener("click", async () => {
  let searchedGame = searchInput.value.toLowerCase().trim();

  const allGamesData = await fetchAPI();

  const foundGame = allGamesData.find( (game) => searchedGame === game.title.toLowerCase())

  if (foundGame) {
    console.log(foundGame)
    gameThumbnail.setAttribute("src", foundGame.thumbnail);
    gameTitle.innerHTML = foundGame.title;
    gameDescription.innerHTML = foundGame.short_description;
  } else {
    
  }

  searchInput.value = "";
});