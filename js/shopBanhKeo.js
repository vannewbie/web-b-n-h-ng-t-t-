const gameContainer = document.querySelector('.game-container')
const searchInput = document.querySelector('#search-game')

const gameList = [
  {
    id: 1,
    name: "Kẹo hồng sâm Hàn Quốc",
    image: 'https://www.lottemart.vn/media/catalog/product/cache/400x400/8/8/8801204307177.jpg.webp',
    price: "180.000đ",
 

  },
  {
    id: 2,
    name: "Mứt Tết",
    image: './img/BanhKeoTieuDe.jpg',
    price: "7.790.000đ",
  
  },
  {
    id: 3,
    name: "Kẹo thập cẩm",
    image: 'https://www.lottemart.vn/media/catalog/product/cache/400x400/8/9/8935273622043-1.jpg.webp',
    price: "2.880.000đ",
   
  },
  {
    id: 4,
    name: "Bánh phanner pie luxury Tết Hỗn Hợp 446g",
    image: 'https://www.lottemart.vn/media/catalog/product/cache/400x400/8/9/8935006360235.jpg.webp',
    price: "117.000đ",
  
  },
  {
    id: 5,
    name: "Kẹo hồng sâm Hàn Quốc",
    image: 'https://www.lottemart.vn/media/catalog/product/cache/400x400/8/8/8801204307177.jpg.webp',
    price: "180.000đ",
 

  },
  {
    id: 6,
    name: "Mứt Tết",
    image: './img/BanhKeoTieuDe.jpg',
    price: "7.790.000đ",
  
  },
  {
    id: 7,
    name: "Kẹo thập cẩm",
    image: 'https://www.lottemart.vn/media/catalog/product/cache/400x400/8/9/8935273622043-1.jpg.webp',
    price: "2.880.000đ",
   
  },
  {
    id: 8,
    name: "Bánh phanner pie luxury Tết Hỗn Hợp 446g",
    image: 'https://www.lottemart.vn/media/catalog/product/cache/400x400/8/9/8935006360235.jpg.webp',
    price: "117.000đ",
  
  },
  {
    id: 9,
    name: "Kẹo hồng sâm Hàn Quốc",
    image: 'https://www.lottemart.vn/media/catalog/product/cache/400x400/8/8/8801204307177.jpg.webp',
    price: "180.000đ",
 

  },
  {
    id: 10,
    name: "Mứt Tết",
    image: './img/BanhKeoTieuDe.jpg',
    price: "7.790.000đ",
  
  },
  {
    id: 11,
    name: "Kẹo thập cẩm",
    image: 'https://www.lottemart.vn/media/catalog/product/cache/400x400/8/9/8935273622043-1.jpg.webp',
    price: "2.880.000đ",
   
  },
  {
    id: 12,
    name: "Bánh phanner pie luxury Tết Hỗn Hợp 446g",
    image: 'https://www.lottemart.vn/media/catalog/product/cache/400x400/8/9/8935006360235.jpg.webp',
    price: "117.000đ",
  
  },
  {
    id: 13,
    name: "Kẹo hồng sâm Hàn Quốc",
    image: 'https://www.lottemart.vn/media/catalog/product/cache/400x400/8/8/8801204307177.jpg.webp',
    price: "180.000đ",
 

  },
  {
    id: 14,
    name: "Mứt Tết",
    image: './img/BanhKeoTieuDe.jpg',
    price: "7.790.000đ",
  
  },
  {
    id: 15,
    name: "Kẹo thập cẩm",
    image: 'https://www.lottemart.vn/media/catalog/product/cache/400x400/8/9/8935273622043-1.jpg.webp',
    price: "2.880.000đ",
   
  },
  {
    id: 16,
    name: "Bánh phanner pie luxury Tết Hỗn Hợp 446g",
    image: 'https://www.lottemart.vn/media/catalog/product/cache/400x400/8/9/8935006360235.jpg.webp',
    price: "117.000đ",
  
  }, 

    

]
function renderGameList(listGame) {
  let htmls = "";

  for (let i = 0; i < listGame.length; i++) {
    htmls += `
        <div class="border d-flex">
          <a href="./BanhKeo.html" class="item-a">
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