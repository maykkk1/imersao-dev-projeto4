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

let yourFavoriteGamesList = [];
let id = 0;

const MyFavoriteGamesContainer = document.getElementById("myFavoriteGames");
const YourFavoriteGamesContainer = document.getElementById("yourFavoriteGames");

const createCard = (cardContainer, containerId, name, imgUrl, cardId) => {
  if (containerId === "myFavoriteGames") {
    cardContainer.innerHTML += 
    `<div class="game-card">
     <h2>${name}</h2>
     <div class="img-wrapper">
     <img src="${imgUrl}" alt="" />
     </div>
     </div>
    `;
  } else {
    cardContainer.innerHTML += 
    `<div class="game-card">
     <h2>${name}</h2>
     <div class="img-wrapper">
     <img src="${imgUrl}" alt="" />
     </div>
     <button id=${cardId} onclick="deleteCard(event)">Excluir</button>
     </div>
    `;
  }
};



myGamesList.forEach((element) => {
  createCard(MyFavoriteGamesContainer, "myFavoriteGames", element.titulo, element.imgUrl);
});

yourFavoriteGamesList.forEach((element) => {
  createCard(YourFavoriteGamesContainer, "yourFavoriteGames", element.titulo, element.imgUrl);
});

const sendGameBtn = document.getElementById("sendGame");

sendGameBtn.addEventListener("click", (e) => {
  addYourFavoriteGames(e);
});

const addYourFavoriteGames = (e) => {
  e.preventDefault();
  const gameTitle = document.getElementById("gameTitlePicker").value;
  const imgUrl = document.getElementById("imgUrlPicker").value;
  const game = { titulo: gameTitle, imgUrl: imgUrl, id: id };
  if (gameTitle.length > 0 && imgUrl.length > 0) {
    YourFavoriteGamesContainer.innerHTML = ""
    yourFavoriteGamesList.push(game);
    yourFavoriteGamesList.forEach((element) => {
      createCard(YourFavoriteGamesContainer, "yourFavoriteGames", element.titulo, element.imgUrl, element.id);
    });
  }
  document.getElementById("gameTitlePicker").value = "";
  document.getElementById("imgUrlPicker").value = "";
  id++
};



const deleteCard = (e) => {
  e = e || window.event;
  var target = e.target || e.srcElement;
  YourFavoriteGamesContainer.innerHTML = "";
  yourFavoriteGamesList = yourFavoriteGamesList.filter((element) => {
    console.log(element.id, target.id)
    return element.id != target.id;
  });
  yourFavoriteGamesList.forEach((element) => {
    createCard(YourFavoriteGamesContainer, "yourFavoriteGames", element.titulo, element.imgUrl, element.id);
  });
};
