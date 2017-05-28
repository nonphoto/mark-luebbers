const stickyContainers = Array.from(document.getElementsByClassName('sticky-container'))

stickyContainers.forEach(stickyContainer => {
  const stickyElement = stickyContainer.getElementsByClassName('sticky-element')[0]
  stickyElement.classList.add('is-position-start')

  const stickyVoid = document.createElement('div')
  stickyVoid.classList.add('sticky-void')
  stickyVoid.style.height = stickyElement.clientHeight
  stickyContainer.insertBefore(stickyVoid, stickyContainer.childNodes[0])
})