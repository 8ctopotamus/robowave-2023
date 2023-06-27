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

  // show days since error free
  const today = moment()
  $('[data-errorFreeDate]').each(function() {
    let errorFreeDate = $(this).attr('data-errorFreeDate')
    errorFreeDate = moment(errorFreeDate)
    const diff = today.diff(errorFreeDate, 'days')
    let diffClass = 'text-success'
    if (diff < 5) {
      diffClass = 'text-danger'
    } else if (diff < 150) (
      diffClass = 'text-warning'
    )
    $(this)
      .text(`Error free for ${diff} days`)
      .addClass(diffClass) 
  })
})