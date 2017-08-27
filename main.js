class StickySection {
  constructor(container) {
    this.container = container
    this.element = this.container.getElementsByClassName('sticky-element')[0]

    this.topVoid = document.createElement('div')
    this.topVoid.classList.add('sticky-void')
    this.topVoid.style.height = this.element.clientHeight
    this.container.insertBefore(this.topVoid, this.container.childNodes[0])

    this.bottomVoid = document.createElement('div')
    this.bottomVoid.classList.add('sticky-void')
    this.bottomVoid.style.height = this.element.clientHeight
    this.container.appendChild(this.bottomVoid)
  }

  updateBounds() {
    const bounds = this.container.getBoundingClientRect()
    this.top = window.scrollY + bounds.top
    this.bottom = window.scrollY + bounds.bottom - this.element.clientHeight
  }

  updateElementPosition() {
    if (window.scrollY >= this.top) {
      this.element.classList.remove('is-position-start')
    }
    else {
      this.element.classList.add('is-position-start')
    }

    if (window.scrollY <= this.bottom) {
      this.element.classList.remove('is-position-end')
    }
    else {
      this.element.classList.add('is-position-end')
    }
  }
}

function updateAllBounds() {
  stickySections.forEach(section => { section.updateBounds() })
}

function updateAllElementPositions() {
  stickySections.forEach(section => { section.updateElementPosition() })
}

let resizeTimeout = null

const stickyContainers = Array.from(document.getElementsByClassName('sticky-container'))
const stickySections = stickyContainers.map(stickyContainer => new StickySection(stickyContainer))
const tableOfContents = document.getElementById('table-of-contents')
const links = Array.from(tableOfContents.getElementsByTagName('a'))

links.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault()
    document.body.classList.add('is-hidden')
    setTimeout(() => {
      window.location.href = link.href
      document.body.classList.remove('is-hidden')
    }, 300)
  })
})

window.addEventListener('scroll', updateAllElementPositions)

window.addEventListener('resize', () => {
  if (resizeTimeout) {
    clearTimeout(resizeTimeout)
  }
  resizeTimeout = setTimeout(() => {
    updateAllBounds()
    updateAllElementPositions()
    resizeTimeout = null
  }, 500)
})

updateAllBounds()
updateAllElementPositions()