console.log("I am from background script")
console.log(this)

chrome.runtime.onInstalled.addListener(() => {
    chrome.tabs.create({
        url: "https://www.google.com"
    })
})

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log(request)
    console.log(sender)
    console.log(sendResponse)
    sendResponse({farewell: "Goodbye"})
})

chrome.alarms.create("customAlarm", {
    delayInMinutes: 1 / 60,
    periodInMinutes: 1 / 60 
})

chrome.alarms.onAlarm.addListener(function(alarm) {
    if (alarm.name == "customAlarm") {
        console.log("Alarm fired - Do something..." + new Date().getSeconds())
    }
})