function cleanTabs (){
  chrome.tabs.query({currentWindow: true, pinned: false, active: false}, function(tabs) {
    var tabIds = []
    for(i = 0; i < tabs.length; i++){
      tabIds.push(tabs[i].id);
    }
    chrome.tabs.remove(tabIds);
  });
}

var otherTabsIds = [];
var pinnedTabIds =  [];

function gatherTabs(){
  resetOtherTabs();
  chrome.tabs.query({ currentWindow: false }, function(tabs) {

    for(i = 0; i < tabs.length; i++){
      otherTabsIds.push(tabs[i].id);
      if(tabs[i].pinned){
        pinnedTabIds.push(tabs[i].id)
      }
    }

    chrome.windows.getCurrent({"populate" : true}, function(window) {
      chrome.tabs.move(otherTabsIds, { "windowId": window.id, "index": window.tabs.length }, function(_) {
        for(i = 0; i< pinnedTabIds.length; i++){
          chrome.tabs.update(pinnedTabIds[i], { "pinned": true })
        }
      });
    });

  });
}

function resetOtherTabs(){
  otherTabsIds =  [];
  pinnedTabIds =  [];
}

function pinTab(){
  chrome.tabs.query({currentWindow: true, active: true}, function(tabs) {
    var currentTab = tabs[0];
    chrome.tabs.update(currentTab.id, { "pinned": true})
  });
}
