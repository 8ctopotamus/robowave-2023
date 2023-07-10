const loading = document.getElementById('loading')

const factoryAddress = 'Westminster Abbey, 20 Deans Yd, Westminster, London SW1P 3PA, United Kingdom'
const apiKey = 'FfjlQNSycwguu8hTigfcqloxlIRYU'

function calculateShipping(distanceData, price) {
  const distance = distanceData.rows[0].elements[0].d
  console.log(distanceData, price)
  // distance * fee + robot price
}

function getDistanceToFactory(destination, price) {
  fetch(`https://api.distancematrix.ai/maps/api/distancematrix/json?origins=${factoryAddress}&destinations=${destination}&key=${apiKey}`)
    .then(function(response) {
      console.log(response)
      return response.json()
    })
    .then(function(distanceData) {
      calculateShipping(distanceData, price)
    })
}
  
function getParams() {
  const queryParams = new URLSearchParams(window.location.search)
  const price = parseInt(queryParams.get('price'))
  const state = queryParams.get('state')
  const zip = queryParams.get('zip')
  getDistanceToFactory(`632 E Locust St. Milwaukee Wi, 53212`, price)
}

getParams()