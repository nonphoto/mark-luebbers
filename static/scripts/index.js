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
