alert("Hello Popup!")
console.log(this)

chrome.action.setBadgeText({text: "1"})
chrome.action.setBadgeTextColor({color: "#FFF"})

chrome.action.getBadgeText({}, (result) => {
    console.log(result)
})