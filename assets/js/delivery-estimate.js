const card = document.querySelector('.card')
const loading = document.getElementById('loading')
const errorAlert = document.getElementById('error')
const botNameHeading = document.querySelector('#botName')
const botPriceHeading = document.querySelector('#botPrice')
const totalCostHeading = document.querySelector('#totalCost')

const shippingFee = 0.1
const factoryAddress = '20400 Mariani Ave, Cupertino, CA 95014, USA'
const apiKey = 'FfjlQNSycwguu8hTigfcqloxlIRYU'

// get query params
const queryParams = new URLSearchParams(window.location.search)
const botName = queryParams.get('botName')
const price = parseInt(queryParams.get('price'))

function displayError (message) {
  errorAlert.innerText = message
  errorAlert.classList.remove('d-none')
  errorAlert.classList.add('d-block')
}

function displayTotalCost(totalCost) {
  console.log(totalCost)
  botNameHeading.innerText = botName
  botPriceHeading.innerText = '$' + price
  totalCostHeading.innerText = 'Total: $' + totalCost
}

function calculateShipping(distanceData) {
  const zeroResults = distanceData.rows[0].elements[0].status === 'ZERO_RESULTS'
  if (zeroResults) {
    displayError('Zero Results')
    return
  }
  const distance = distanceData?.rows[0]?.elements[0]?.distance?.value || 0
  console.log(distance, shippingFee, price)

  return (distance * shippingFee) + price
}

function getDistanceToFactory(destination) {
  // prod
  fetch(`https://api.distancematrix.ai/maps/api/distancematrix/json?origins=${factoryAddress}&destinations=${destination}&key=${apiKey}`)
    .then(function(response) {
      // console.log(response)
      return response.json()
    })
    .then(function(distanceData) {
      const totalCost = calculateShipping(distanceData)
      displayTotalCost(totalCost)
    })
    .catch(function(err) {
      console.log(err)
    })
    .finally(function() {
      loading.classList.add('d-none')
    })

  // placeholder so we don't go over API limit
  // const totalCost = calculateShipping({"destination_addresses":["632 E Locust St, Milwaukee, WI 53212, USA"],"origin_addresses":["20400 Mariani Ave, Cupertino, CA 95014, USA"],"rows":[{"elements":[{"distance":{"text":"3567.6 km","value":3567587},"duration":{"text":"1 day 8 hour 8 mins","value":115699},"origin":"20400 Mariani Ave, Cupertino, CA 95014, USA","destination":"632 E Locust St, Milwaukee, WI 53212, USA","status":"OK"}]}],"status":"OK"})
  // displayTotalCost(totalCost)
}
 
// getDistanceToFactory(`918 Charleston Rd, Mountain View, CA 94043, USA`)
getDistanceToFactory(`632 E. Locust St, Milwaukee, WI 53212, USA`)