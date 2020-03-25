chrome.webRequest.onBeforeSendHeaders.addListener(
    function (details) {
        for (var i = 0; i < details.requestHeaders.length; ++i) {
            if (details.requestHeaders[i].name === 'User-Agent') {
                details.requestHeaders.splice(i, 1);
                break;
            }
        }
        //add your custom header here:
        if(details.url === "https://jsonlint.com/"){
            details.requestHeaders.push({name:"custom-header", value: "custom-header-value"})
        }
        return { requestHeaders: details.requestHeaders };
    },
    { urls: ['<all_urls>'] },
    [ 'blocking', 'requestHeaders', 'extraHeaders']
);