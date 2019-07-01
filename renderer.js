const { ipcRenderer } = require('electron')

window.addEventListener('DOMContentLoaded', () => {
    ipcRenderer.send('message', 'hello')
    ipcRenderer.on('reply', (event, arg) => {
        document.getElementById('message').innerHTML = arg
    })
})