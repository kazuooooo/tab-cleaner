
chrome.commands.onCommand.addListener(function(command) {
  if (command == "clean-tabs") {
    chrome.tabs.query({currentWindow: true, pinned: false}, function(tabs) {
      tabIds = []
      for(i = 0; i < tabs.length; i++){
        tabIds.push(tabs[i].id);
      }
      chrome.tabs.remove(tabIds);
    });
  }
});
