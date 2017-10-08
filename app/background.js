
chrome.commands.onCommand.addListener(function(command) {
  if (command == "clean-tabs") {
    cleanTabs()
  } else if(command == "gather-tags") {
    gatherWindows()
  }

});

function cleanTabs (){
  chrome.tabs.query({currentWindow: true, pinned: false}, function(tabs) {
    tabIds = []
    for(i = 0; i < tabs.length; i++){
      tabIds.push(tabs[i].id);
    }
    chrome.tabs.remove(tabIds);
  });
}

var otherTabsIds = [];
var pinnedTabIds =  [];

function gatherWindows(){
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
