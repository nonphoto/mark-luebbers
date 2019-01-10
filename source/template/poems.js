const html = require('nanohtml')

module.exports = (content) => {
    return content.poems.map((poem) => {
        return html`
            <section id="${poem.slug}" class="poem">
                <div class="sticky-container">
                    <h3 class="poem-title sticky-element">${poem.title}</h3>
                    <div class="poem-content">${html(poem.body)}</div>
                </div>
            </section>
        `
    })
}
