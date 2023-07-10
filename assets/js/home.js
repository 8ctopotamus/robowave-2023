$(document).ready(function() {
  // use fullpage_api to navigate around sections
  $('#intro .btn').on('click', function() {
    fullpage_api.moveSectionDown()
  })

  // fullpage scrollable layout
  $('#fullpage').fullpage({
    licenseKey: 'gplv3-license',
    sectionsColor: ['#333738', '#333738', '#333738'],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['Welcome', 'New', 'Used'],
  })

  // typewriter effect
  $('.lead').each(function() {
    const innerText = this.innerText
    new Typewriter(this, {
      loop: true
    })
      .typeString(innerText)
      .pauseFor(1000)
      .start()
  })

  // glitchiness
  PowerGlitch.glitch('.glitch', {
    // playMode: 'hover',
    hideOverflow: true,
  })

  // last error date
  $('[data-lastErrorDate]').each(function() {
    // get date from data-lastErrorDate
    var errDate = $(this).attr('data-lastErrorDate')
    // turn date into dayjs object
    errDate = dayjs(errDate)
    // get the today's date as a dayjs object
    var today = dayjs()
    // find difference in days between days
    var diff = today.diff(errDate, 'day')
    // determine text color class
    var textClass
    if (diff < 5) {
      textClass = 'text-danger'
    } else if (diff < 30) {
      textClass = 'text-warning'
    } else {
      textClass = 'text-success'
    }
    // update paragraph
    $(this)
      .text(diff + " days since last error")
      .addClass(textClass)
  })

  // signup form
  $('#signup-form').on('submit', function(e) {
    e.preventDefault()
    const email = $('#email').val()
    if (!email) {
      alert('Missing Email')
      return
    }
    // hit jsonplaceholder and create a user
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
      })
    })
      .then(response => {
        if (response.ok) {
          window.location.assign(`/signup-thankyou.html?email=${email}`)
        }
      })
      .catch(err => {
        alert('Error creating user')
      })
  })
})