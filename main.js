const stickyContainers = Array.from(document.getElementsByClassName('sticky-container'))

const stickySections = stickyContainers.map(stickyContainer => {
  const stickyElement = stickyContainer.getElementsByClassName('sticky-element')[0]

  const stickyTopVoid = document.createElement('div')
  stickyTopVoid.classList.add('sticky-void')
  stickyTopVoid.style.height = stickyElement.clientHeight
  stickyContainer.insertBefore(stickyTopVoid, stickyContainer.childNodes[0])

  const stickyBottomVoid = document.createElement('div')
  stickyBottomVoid.classList.add('sticky-void')
  stickyBottomVoid.style.height = stickyElement.clientHeight
  stickyContainer.appendChild(stickyBottomVoid)

  return {
    container: stickyContainer,
    element: stickyElement
  }
})

function setStickySectionBounds() {
  stickySections.forEach(stickySection => {
    const bounds = stickySection.container.getBoundingClientRect()
    stickySection.top = window.scrollY + bounds.top
    stickySection.bottom = window.scrollY + bounds.bottom - stickySection.element.clientHeight
  })
}

function updateStickySections() {
  stickySections.forEach(stickySection => {
    if (window.scrollY >= stickySection.top) {
      stickySection.element.classList.remove('is-position-start')
    }
    else {
      stickySection.element.classList.add('is-position-start')
    }

    if (window.scrollY <= stickySection.bottom) {
      stickySection.element.classList.remove('is-position-end')
    }
    else {
      stickySection.element.classList.add('is-position-end')
    }
  })
}

setStickySectionBounds()
updateStickySections()
window.addEventListener('scroll', updateStickySections)

let resizeTimeout = null
window.addEventListener('resize', () => {
  if (resizeTimeout) {
    clearTimeout(resizeTimeout)
  }
  resizeTimeout = setTimeout(() => {
    console.log('resize')
    setStickySectionBounds()
    resizeTimeout = null
  }, 500)
})