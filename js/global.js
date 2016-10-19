// var result = document.createElement('div')
// result.classList = 'col-sm-3'
// var resultImage = document.createElement('img')
// // result.innerHTML = '13'
// resultImage.src = "http://unsplash.it/300/250?image=42"
// result.appendChild(resultImage)
// console.dir(resultImage)
//
// document.getElementById('searchResultsSection').appendChild(result)

// Declare your builder function
function createResultCard(item) {
  var card = document.createElement('div')
  card.classList.add('col-sm-3')

  var cardImageRow = document.createElement('div')
  cardImageRow.classList.add('row')
  // cardImageRow.setAttribute('class', 'row')
  // cardImageRow.innerHTML = "<img src='" + item.image + "' />"
  console.log(cardImageRow)
  var cardImage = document.createElement('img')
  cardImage.src = item.image

  var cardTitleRow = document.createElement('div')
  cardTitleRow.classList.add('row')
  // cardTitleRow.setAttribute('class','row')

  var cardTitle = document.createElement('span')
  cardTitle.innerText = item.title

  var cardCreatorAndPriceRow = document.createElement('div')
  cardCreatorAndPriceRow.setAttribute('class','row')

  var sellerCol = document.createElement('div')
  sellerCol.setAttribute('class','col-sm-6')

  var cardSeller = document.createElement('span')
  cardSeller.innerHTML = item.seller

  var priceCol = document.createElement('div')
  priceCol.setAttribute('class','col-sm-6 text-right')

  var cardPrice = document.createElement('span')
  cardPrice.innerHTML = accounting.formatMoney(item.price)

  document.querySelector('#searchResultsSection.row').appendChild(card)


  card.appendChild(cardImageRow)
  cardImageRow.appendChild(cardImage)
  card.appendChild(cardTitleRow)
  cardTitleRow.appendChild(cardTitle)
  card.appendChild(cardCreatorAndPriceRow)
  cardCreatorAndPriceRow.appendChild(sellerCol)
  sellerCol.appendChild(cardSeller)
  cardCreatorAndPriceRow.appendChild(priceCol)
  priceCol.appendChild(cardPrice)

  // console.dir(cardImage)

  // your code here to build up the card
  // keep in mind you'll be nesting tags
  // var imageDiv = document.createElement('div')
  // item.innerHTML = 'test'


}

// Call your builder function, one at a time to make 12 search result cards, each with different data (image can be the same at this point if you want)
// Don't forget you can use a for() loop, or make an array of objects even and use a items.forEach() loop.
for (var i = 0; i < 12; i++) {
  createResultCard(
    {
      image: 'img/boardgame.png',
      title: 'Vintage Board Game Art Wall Home Decor',
      seller: 'franz66',
      price: 15.00
    })
  }
