// start the timer
chrome.runtime.onInstalled.addListener(() => {
    // setup interval
    localStorage.setItem("active", "true")
    run()
})

chrome.runtime.onMessage.addListener((message) => {
    switch (message.action) {
        case "init":
            run()
            break;
        case "disable":
            localStorage.setItem("active", "false");
            break;
        case "enable":
            localStorage.setItem("active", "true");
            break;
        default:
    }
})

const url = "https://discord.me/dashboard";

function run() {
    // get the time
    const now = new Date();
    const start = new Date();
    start.setUTCHours(0, 0, 0, 0);

    const six = new Date(start.getTime() + (6 * 60 * 60 * 1000))
    const twelve = new Date(start.getTime() + (12 * 60 * 60 * 1000))
    // const twelve = new Date(start.getTime() + (12 * 60 * 60 * 1000) + (23 * 60 * 1000))
    const eighteen = new Date(start.getTime() + (18 * 60 * 60 * 1000))
    const newDay = new Date(start.getTime() + (24 * 60 * 60 * 1000))
    const times = [six, twelve, eighteen, newDay]

    for (const time of times) {
        if ((time - now) > 0) {
            setTimeout(exec, time - now - 1000)
            console.log('will run in ' + ((time - now - 1000) / 1000 / 60 / 60));
            break;
        }
    }
}

function exec() {
    if (localStorage.getItem("active") == 'true') {
        chrome.tabs.create({
            url, active: true
        }, tab => {
            chrome.tabs.executeScript(tab.id, { file: "bump.js" });
        })
    }
    setTimeout(run, 5000);
}