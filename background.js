chrome.runtime.onInstalled.addListener(function() {
  console.log("in background.js..")
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'google.co.in'},
      })
      ],
          actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});

chrome.tabs.query({currentWindow: true, active:true}, function(tabs){
  console.log(tabs[0].url)
  alert("url::"+tabs[0].url);
});