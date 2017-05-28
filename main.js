const stickyContainers = Array.from(document.getElementsByClassName('sticky-container'))

const stickySections = stickyContainers.map(stickyContainer => {
  const stickyElement = stickyContainer.getElementsByClassName('sticky-element')[0]
  stickyElement.classList.add('is-position-start')

  const stickyVoid = document.createElement('div')
  stickyVoid.classList.add('sticky-void')
  stickyVoid.style.height = stickyElement.clientHeight
  stickyContainer.insertBefore(stickyVoid, stickyContainer.childNodes[0])

  return {
    container: stickyContainer,
    element: stickyElement,
    void: stickyVoid
  }
})

stickySections.forEach(stickySection => {
  const bounds = stickySection.container.getBoundingClientRect()
  stickySection.top = bounds.top
  stickySection.bottom = bounds.bottom - stickySection.element.clientHeight
})

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

window.addEventListener('scroll', updateStickySections)