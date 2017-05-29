const stickyContainers = Array.from(document.getElementsByClassName('sticky-container'))

const stickySections = stickyContainers.map(stickyContainer => {
  const stickyElement = stickyContainer.getElementsByClassName('sticky-element')[0]
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
  stickySection.top = window.scrollY + bounds.top
  stickySection.bottom = window.scrollY + bounds.bottom - stickySection.element.clientHeight
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

updateStickySections()
window.addEventListener('scroll', updateStickySections)