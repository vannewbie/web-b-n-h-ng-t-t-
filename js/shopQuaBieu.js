const gameContainer = document.querySelector('.game-container')
const searchInput = document.querySelector('#search-game')

const gameList = [
  {
    id: 1,
    name: "Giỏ quà Tết Xuân An Khang",
    image: 'https://www.lottemart.vn/media/catalog/product/cache/400x400/0/4/0411525700007-0.jpg.webp',
    price: "359.000đ",
 

  },
  {
    id: 2,
    name: "Hộp quà Tết sum vầy",
    image: 'https://www.lottemart.vn/media/catalog/product/cache/400x400/0/4/0411638800007-0.jpg.webp',
    price: "399.000đ",
  
  },
  {
    id: 3,
    name: "Giỏ quà Tết Xuân Xuân",
    image: 'https://www.lottemart.vn/media/catalog/product/cache/400x400/0/4/0411121770008-1.jpg.webp',
    price: "499.000đ",
   
  },
  {
    id: 4,
    name: "Giỏ quà Tết Tân Niên Đắc Lộc",
    image: 'https://www.lottemart.vn/media/catalog/product/cache/400x400/0/4/0411121760009-0.jpg.webp',
    price: "699.000đ",
  
  },
  {
    id: 5,
    name: "Giỏ quà Tết Xuân An Khang",
    image: 'https://www.lottemart.vn/media/catalog/product/cache/400x400/0/4/0411525700007-0.jpg.webp',
    price: "359.000đ",
 

  },
  {
    id: 6,
    name: "Hộp quà Tết sum vầy",
    image: 'https://www.lottemart.vn/media/catalog/product/cache/400x400/0/4/0411638800007-0.jpg.webp',
    price: "399.000đ",
  
  },
  {
    id: 7,
    name: "Giỏ quà Tết Xuân Xuân",
    image: 'https://www.lottemart.vn/media/catalog/product/cache/400x400/0/4/0411121770008-1.jpg.webp',
    price: "499.000đ",
   
  },
  {
    id: 8,
    name: "Giỏ quà Tết Tân Niên Đắc Lộc",
    image: 'https://www.lottemart.vn/media/catalog/product/cache/400x400/0/4/0411121760009-0.jpg.webp',
    price: "699.000đ",
  
  },
  {
    id: 9,
    name: "Giỏ quà Tết Xuân An Khang",
    image: 'https://www.lottemart.vn/media/catalog/product/cache/400x400/0/4/0411525700007-0.jpg.webp',
    price: "359.000đ",
 

  },
  {
    id: 10,
    name: "Hộp quà Tết sum vầy",
    image: 'https://www.lottemart.vn/media/catalog/product/cache/400x400/0/4/0411638800007-0.jpg.webp',
    price: "399.000đ",
  
  },
  {
    id: 11,
    name: "Giỏ quà Tết Xuân Xuân",
    image: 'https://www.lottemart.vn/media/catalog/product/cache/400x400/0/4/0411121770008-1.jpg.webp',
    price: "499.000đ",
   
  },
  {
    id: 12,
    name: "Giỏ quà Tết Tân Niên Đắc Lộc",
    image: 'https://www.lottemart.vn/media/catalog/product/cache/400x400/0/4/0411121760009-0.jpg.webp',
    price: "699.000đ",
  
  },
  {
    id: 13,
    name: "Giỏ quà Tết Xuân An Khang",
    image: 'https://www.lottemart.vn/media/catalog/product/cache/400x400/0/4/0411525700007-0.jpg.webp',
    price: "359.000đ",
 

  },
  {
    id: 14,
    name: "Hộp quà Tết sum vầy",
    image: 'https://www.lottemart.vn/media/catalog/product/cache/400x400/0/4/0411638800007-0.jpg.webp',
    price: "399.000đ",
  
  },
  {
    id: 15,
    name: "Giỏ quà Tết Xuân Xuân",
    image: 'https://www.lottemart.vn/media/catalog/product/cache/400x400/0/4/0411121770008-1.jpg.webp',
    price: "499.000đ",
   
  },
  {
    id: 16,
    name: "Giỏ quà Tết Tân Niên Đắc Lộc",
    image: 'https://www.lottemart.vn/media/catalog/product/cache/400x400/0/4/0411121760009-0.jpg.webp',
    price: "699.000đ",
  
  },


    

]
function renderGameList(listGame) {
  let htmls = "";

  for (let i = 0; i < listGame.length; i++) {
    htmls += `
        <div class="border d-flex">
          <a href="./QuaBieu.html" class="item-a">
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