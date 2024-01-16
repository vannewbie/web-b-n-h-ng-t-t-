const gameContainer = document.querySelector('.game-container')
const searchInput = document.querySelector('#search-game')

const gameList = [
  {
    id: 1,
    name: "Mai Vàng",
    image: './img/Cyy_Hoa_Mai_Tt.jpg',
    price: "2.480.000đ",
 

  },
  {
    id: 2,
    name: "Quất cảnh",
    image: './img/caytac.jpg',
    price: "1.790.000đ",
  
  },
  {
    id: 3,
    name: "Cây lan lý",
    image: './img/cay-lan-y-1484109595_600x0-1.jpg',
    price: "1.790.000đ",
   
  },
  {
    id: 4,
    name: "Cây ngọc ngân",
    image: './img/cay-ngoc-ngan-1-1.jpg',
    price: "1.290.000đ",
  
  },
  {
    id: 5,
    name: "Mai Vàng",
    image: './img/Cyy_Hoa_Mai_Tt.jpg',
    price: "2.480.000đ",
 

  },
  {
    id: 6,
    name: "Quất cảnh",
    image: './img/caytac.jpg',
    price: "1.790.000đ",
  
  },
  {
    id: 7,
    name: "Cây lan lý",
    image: './img/cay-lan-y-1484109595_600x0-1.jpg',
    price: "1.790.000đ",
   
  },
  {
    id: 8,
    name: "Cây ngọc ngân",
    image: './img/cay-ngoc-ngan-1-1.jpg',
    price: "1.290.000đ",
  
  },
  {
    id: 9,
    name: "Mai Vàng",
    image: './img/Cyy_Hoa_Mai_Tt.jpg',
    price: "2.480.000đ",
 

  },
  {
    id: 10,
    name: "Quất cảnh",
    image: './img/caytac.jpg',
    price: "1.790.000đ",
  
  },
  {
    id: 11,
    name: "Cây lan lý",
    image: './img/cay-lan-y-1484109595_600x0-1.jpg',
    price: "1.790.000đ",
   
  },
  {
    id: 12,
    name: "Cây ngọc ngân",
    image: './img/cay-ngoc-ngan-1-1.jpg',
    price: "1.290.000đ",
  
  },
  {
    id: 13,
    name: "Mai Vàng",
    image: './img/Cyy_Hoa_Mai_Tt.jpg',
    price: "2.480.000đ",
 

  },
  {
    id: 14,
    name: "Quất cảnh",
    image: './img/caytac.jpg',
    price: "1.790.000đ",
  
  },
  {
    id: 15,
    name: "Cây lan lý",
    image: './img/cay-lan-y-1484109595_600x0-1.jpg',
    price: "1.790.000đ",
   
  },
  {
    id: 16,
    name: "Cây ngọc ngân",
    image: './img/cay-ngoc-ngan-1-1.jpg',
    price: "1.290.000đ",
  
  }
  
  


    

]
function renderGameList(listGame) {
  let htmls = "";

  for (let i = 0; i < listGame.length; i++) {
    htmls += `
        <div class="border d-flex">
          <a href="./CayCanh.html" class="item-a">
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