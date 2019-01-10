const html = require('nanohtml')

module.exports = (content) => {
    const links = content.poems.map((poem) => {
        return html`
            <a class="contents-link" href="/#${poem.slug}">${poem.title}</a>
        `
    })

    return html`
        <section id="table-of-contents" class="table-of-contents">
            <h3>Contents</h3>
            ${links}
            <a class="contents-link" href="/#about">About The Author</a>
        </section>
    `
}
