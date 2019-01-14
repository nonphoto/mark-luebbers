const html = require('nanohtml')
const coverSection = require('./cover')
const tableSection = require('./table')
const poemsSection = require('./poems')
const aboutSection = require('./about')

module.exports = (content) => {
    return html`
        <html>
            <head>
                <meta name="viewport" content="width=device-width,initial-scale=1">
                <title>Mark Luebbers</title>
                <link href="https://fonts.googleapis.com/css?family=Spectral" rel="stylesheet">
                <link rel="stylesheet" href="/styles/index.css">
                <script type="text/javascript" src="/scripts/index.js" defer></script>
            </head>
            <body>
                ${coverSection(content)}
                ${tableSection(content)}
                ${poemsSection(content)}
                ${aboutSection(content)}
            </body>
        </html>
    `
}
