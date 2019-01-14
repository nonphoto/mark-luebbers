const html = require('nanohtml')

module.exports = (content) => {
    return content.poems.map((poem) => {
        return html`
            <section id="${poem.slug}" class="poem ${poem.preformatted ? 'preformatted' : ''}">
                <div class="sticky-container">
                    <div class="poem-title sticky-element"><h3>${poem.title}</h3></div>
                    <div class="poem-content">${html(poem.body)}</div>
                </div>
            </section>
        `
    })
}
