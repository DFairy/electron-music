const { ipcRenderer } = require('electron')
const { $ } = require('./helper.js')
const path = require('path')
let musicFilesPath = []
$('select-music').addEventListener('click', () => {
    ipcRenderer.send('open-music-file')
})

$('add-music').addEventListener('click', () => {
    ipcRenderer.send('add-tracks', musicFilesPath)
})

const renderListHtmml = (pathes) => {
    const musicList = $('musicList')
    const musicItemsHtml = pathes.reduce((html, music) => {
        html += `<li class="list-group-item">${path.basename(music)}</li>`
        return html
    }, '')
    musicList.innerHTML = `<ul class="list-group">${musicItemsHtml}</ul>`
}

ipcRenderer.on('selected-file', (event, path) => {
    if (Array.isArray(path)) {
        renderListHtmml(path)
        musicFilesPath = path
    }
})