const gameContainer = document.querySelector('.game-container')
const searchInput = document.querySelector('#search-game')

const gameList = [
  {
    id: 1,
    name: "Rượu Wall Street Blended Spirit",
    image: './img/ruou1.png',
    price: "18.490.000₫",
 

  },
  {
    id: 2,
    name: "Rượu Wall Street Blended Spirit",
    image: './img/ruou2.png',
    price: "28.790.000₫",
  
  },
  {
    id: 3,
    name: "Rượu vang ngọt Moscato D’asti Vallebelbo",
    image: './img/ruou3.png',
    price: "44.700.000₫",
   
  },
  {
    id: 4,
    name: "Rượu bollinger champagne",
    image: './img/ruou4.png',
    price: "39.890.000₫",
  
  },

  {
    id: 1,
    name: "Rượu Wall Street Blended Spirit",
    image: './img/ruou1.png',
    price: "18.490.000₫",
 

  },
  {
    id: 2,
    name: "Rượu Wall Street Blended Spirit",
    image: './img/ruou2.png',
    price: "28.790.000₫",
  
  },
  {
    id: 3,
    name: "Rượu vang ngọt Moscato D’asti Vallebelbo",
    image: './img/ruou3.png',
    price: "44.700.000₫",
   
  },
  {
    id: 4,
    name: "Rượu bollinger champagne",
    image: './img/ruou4.png',
    price: "39.890.000₫",
  
  },
  {
    id: 1,
    name: "Rượu Wall Street Blended Spirit",
    image: './img/ruou1.png',
    price: "18.490.000₫",
 

  },
  {
    id: 2,
    name: "Rượu Wall Street Blended Spirit",
    image: './img/ruou2.png',
    price: "28.790.000₫",
  
  },
  {
    id: 3,
    name: "Rượu vang ngọt Moscato D’asti Vallebelbo",
    image: './img/ruou3.png',
    price: "44.700.000₫",
   
  },
  {
    id: 4,
    name: "Rượu bollinger champagne",
    image: './img/ruou4.png',
    price: "39.890.000₫",
  
  },
  {
    id: 1,
    name: "Rượu Wall Street Blended Spirit",
    image: './img/ruou1.png',
    price: "18.490.000₫",
 

  },
  {
    id: 2,
    name: "Rượu Wall Street Blended Spirit",
    image: './img/ruou2.png',
    price: "28.790.000₫",
  
  },
  {
    id: 3,
    name: "Rượu vang ngọt Moscato D’asti Vallebelbo",
    image: './img/ruou3.png',
    price: "44.700.000₫",
   
  },
  {
    id: 4,
    name: "Rượu bollinger champagne",
    image: './img/ruou4.png',
    price: "39.890.000₫",
  
  },
    

]
function renderGameList(listGame) {
  let htmls = "";

  for (let i = 0; i < listGame.length; i++) {
    htmls += `
        <div class="border d-flex">
          <a href="./Ruou.html" class="item-a">
            <div class="game-item">
              <img src=${listGame[i].image}>
              <div class="product-text">
                <div class"sales">
                  <h2~>${listGame[i].name}</h2>
                </div>  
              </div>
              <div class"sales"></div>
            
              <div class="pr-sh">
                <p class="price">${listGame[i].price}</p>
                <form class="sub">
                  <button type="submit" id="add-btn" class="add-cart"><img class="shop-img" src="./img/giohang.png" alt=""></button>
                </form>
              </div>
            </div>
          </a>
        </div>
      `
  }

  gameContainer.innerHTML = htmls
}


renderGameList(gameList)

function searchGames(searchString) {

  let foundGames = gameList.filter(function (game) {
  
    return game.name.toLowerCase().includes(searchString.toLowerCase());
  })

  renderGameList(foundGames) 
}

searchInput.addEventListener("input", function (event) {
  searchGames(event.target.value)
})