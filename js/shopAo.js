const gameContainer = document.querySelector('.game-container')
const searchInput = document.querySelector('#search-game')

const gameList = [
  {
    id: 1,
    name: "Áo dài cách tân cổ yếm",
    image: './img/quanao1.png',
    price: "2.250.000đ",
 

  },
  {
    id: 2,
    name: "Váy tay phồng",
    image: './img/quanao2.png',
    price: "1.700.000đ",
  
  },
  {
    id: 3,
    name: "Áo dài hoạ Tết",
    image: './img/quanao3.png',
    price: "2.880.000đ",
   
  },
  {
    id: 4,
    name: "Áo yếm",
    image: './img/quanao3.png',
    price: "2.116.000đ",
  
  },

{
id: 5,
name: "Áo dài cách tân cổ yếm",
image: './img/quanao4.png',
price: "2.250.000đ",

},
{
id: 6,
name: "Váy tay phồng",
image: './img/quanao1.png',
price: "1.700.000đ",

},
{
id: 7,
name: "Áo dài hoạ Tết",
image: './img/quanao2.png',
price: "2.880.000đ",

},
{
id: 8,
name: "Áo yếm",
image: './img/quanao1.png',
price: "2.116.000đ",

},
{
  id: 9,
  name: "Áo dài cách tân cổ yếm",
  image: './img/quanao1.png',
  price: "2.250.000đ",
 
  },
  {
  id: 10,
  name: "Váy tay phồng",
  image: './img/quanao1.png',
  price: "1.700.000đ",
  
  },
  {
  id: 11,
  name: "Áo dài hoạ Tết",
  image: './img/quanao1.png',
  price: "2.880.000đ",
 
  },
  {
  id: 12,
  name: "Áo yếm",
  image: './img/quanao1.png',
  price: "2.116.000đ",

  },
  {
    id: 13,
    name: "Áo dài cách tân cổ yếm",
    image: './img/quanao1.png',
    price: "2.250.000đ",
  
    },
    {
    id: 14,
    name: "Váy tay phồng",
    image: './img/quanao1.png',
    price: "1.700.000đ",
  
    },
    {
    id: 15,
    name: "Áo dài hoạ Tết",
    image: './img/quanao1.png',
    price: "2.880.000đ",
 
    },
    {
    id: 16,
    name: "Áo yếm",
    image: './img/quanao1.png',
    price: "2.116.000đ",
    }
    

]
function renderGameList(listGame) {
  let htmls = "";

  for (let i = 0; i < listGame.length; i++) {
    htmls += `
        <div class="border d-flex">
          <a href="./QuanAo.html" class="item-a">
            <div class="game-item">
              <img src=${listGame[i].image}>
              <div class="product-text">
                <div class"sales">
                  <h2>${listGame[i].name}</h2>
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