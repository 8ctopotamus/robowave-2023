const loading = document.getElementById('loading')

const factoryAddress = '20400 Mariani Ave, Cupertino, CA 95014, USA'
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
  const botName = queryParams.get('botName')
  const price = parseInt(queryParams.get('price'))
  
  getDistanceToFactory(`918 Charleston Rd, Mountain View, CA 94043, USA`, price)
}

// getParams()