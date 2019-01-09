#! /usr/bin/env node

const fs = require('fs')
const YAML = require('yaml')
const markdown = require('markdown').markdown

function template(content) {
    return content
}

const files = process.argv.slice(2)
const promises = files.map((file) => {
    return new Promise((resolve) => {
        fs.readFile(file, (error, data) => {
            if (error) throw error
            resolve(data)
        })
    })
})

Promise.all(promises).then((chunks) => {
    const content = chunks.map((chunk) => {
        const parsedChunk = chunk.toString('utf8').match(/---((.|\n)*)---((.|\n)*)/m)
        const data = YAML.parse(parsedChunk[1])
        data.body = markdown.toHTML(parsedChunk[3])
        return data
    })

    process.stdout.write(template(content))
})