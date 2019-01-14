#! /usr/bin/env node

const fs = require('fs')
const YAML = require('yaml')
const markdown = require('markdown').markdown
const template = require('./source/template')

const files = process.argv.slice(2)
const promises = files.map((file) => {
    return new Promise((resolve) => {
        fs.readFile(file, (error, data) => {
            if (error) throw error
            const parsedData = data.toString('utf8').match(/---([\s\S]*)---([\s\S]*)/m)
            const poem = YAML.parse(parsedData[1])
            poem.body = markdown.toHTML(parsedData[2])
            poem.slug = file.match(/([\w\d\-]*)\.md$/)[1]
            resolve(poem)
        })
    })
})

Promise.all(promises).then((poems) => {
    const content = { poems }
    process.stdout.write(template(content).toString())
})
