const myGamesList = [
  {
    titulo: "Skyrim",
    imgUrl:
      "https://images.kabum.com.br/produtos/fotos/140600/the-elder-scrolls-v-skyrim_1611085424693_g.jpg",
  },
  {
    titulo: "Fallout New Vegas",
    imgUrl:
      "https://www.mobygames.com/images/promo/original/1475499798-1182972173.jpg",
  },
  {
    titulo: "Chrono Trigger",
    imgUrl:
      "https://dropsdejogos.uai.com.br/wp-content/uploads/sites/10/2020/03/chrono.jpg",
  },
  {
    titulo: "Darksouls",
    imgUrl:
      "https://image.api.playstation.com/cdn/UP0700/CUSA08692_00/JxilRmpXkS3CCXUnr0gZTBOlqso3plaw.png",
  },
  {
    titulo: "Resident Evil 2",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/pt/thumb/4/45/Resident_Evil_2_capa.png/275px-Resident_Evil_2_capa.png",
  },
  {
    titulo: "Silent Hill 2",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/pt/a/ae/Silent_Hill_2_capa.png",
  },
  {
    titulo: "Final Fantasy XII",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/pt/2/27/Final_Fantasy_XII_Box_Art.png",
  },
  {
    titulo: "Stronghold Crusader",
    imgUrl: "https://jogorama.com.br/arquivos/capas/2493.jpg",
  },
  {
    titulo: "Dragon Age: Origins",
    imgUrl: "https://cdn.thegamesdb.net/images/original/boxart/front/867-2.jpg",
  },
  {
    titulo: "Final fantasy VI",
    imgUrl:
      "https://s3.gaming-cdn.com/images/products/1682/orig/final-fantasy-vi-pixel-remaster-pc-spiel-steam-cover.jpg",
  },
];

const yourFavoriteGamesList = [];

const createCard = (containerId, name, imgUrl) => {
  const cardsContainer = document.getElementById(`${containerId}`);
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("game-card");
  const cardTitle = document.createElement("h2");
  cardTitle.innerHTML = name;
  cardDiv.appendChild(cardTitle);
  const imgWrapper = document.createElement("div");
  imgWrapper.classList.add("img-wrapper");
  imgWrapper.innerHTML = `<img src="${imgUrl}" alt="">`;
  cardDiv.appendChild(imgWrapper);
  cardsContainer.appendChild(cardDiv);
};

myGamesList.forEach((element) => {
  createCard("myFavoriteGames", element.titulo, element.imgUrl);
});

yourFavoriteGamesList.forEach((element) => {
  createCard("yourFavoriteGames", element.titulo, element.imgUrl);
});

const sendGameBtn = document.getElementById("sendGame");

sendGameBtn.addEventListener("click", (e) => {
  addYourFavoriteGames(e);
});

const addYourFavoriteGames = (e) => {
  e.preventDefault();
  const gameTitle = document.getElementById("gameTitlePicker").value;
  const imgUrl = document.getElementById("imgUrlPicker").value;
  const game = { titulo: gameTitle, imgUrl: imgUrl };
  yourFavoriteGamesList.push(game);
  if (gameTitle.length > 0 && imgUrl.length > 0) {
    createCard("yourFavoriteGames", gameTitle, imgUrl);
  }
  document.getElementById("gameTitlePicker").value = "";
  document.getElementById("imgUrlPicker").value = "";
};
