$(document).ready(function() {
  $('#intro .btn').on('click', function() {
    fullpage_api.moveSectionDown()
  })

  // fullpage scrollable layout
  $('#fullpage').fullpage({
    licenseKey: 'gplv3-license',
    sectionsColor: ['#333738', '#333738', '#333738'],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['Welcome', 'New', 'Used']
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
})