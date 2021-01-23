const start = document.getElementById('start')

start.addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: 'init' })
})
