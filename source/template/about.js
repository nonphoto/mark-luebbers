const html = require('nanohtml')

module.exports = () => {
    return html`
        <section id="about" class="cover">
            <h3>About the Author</h3>
            <p>
                Mark Luebbers teaches English at an independent school outside of Cincinnati, Ohio. He has written poetry sporadically all his life but has become serious about the discipline and more ambitious about publication in&nbsp;recent&nbsp;years.
            </p>
            <p>
                “Like the subjects of these poems, I’ve lived most of my life on the border between the natural and ‘manufactured’ worlds, as I suppose many people do today, and find it a confusing, frustrating and fascinating way to live.”
            </p>
        </section>
    `
}
