
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

function gatherWindows(){
  chrome.tabs.query({ currentWindow: false }, function(tabs) {
    otherTabs = []

    for(i = 0; i < tabs.length; i++){
      otherTabs.push(tabs[i]);
    }

    chrome.windows.getCurrent({"populate" : true}, function(window) {
      lastTabIndex = window.tabs.length;
      for(i = 0; i < otherTabs.length; i++){
        chrome.tabs.move(otherTabs[i].id, { "windowId": window.id, "index": lastTabIndex }, function(tab) {
          console.log(this);
          lastTabIndex++;
        });
      }
    });
  });
}


// var targetWindow = null;
// var tabCount = 0;
// function start(tab) {
//   chrome.windows.getCurrent(getWindows);
// }
// function getWindows(win) {
//   targetWindow = win;
//   chrome.tabs.getAllInWindow(targetWindow.id, getTabs);
// }
// function getTabs(tabs) {
//   tabCount = tabs.length;
//   // We require all the tab information to be populated.
//   chrome.windows.getAll({"populate" : true}, moveTabs);
// }
// function moveTabs(windows) {
//   var numWindows = windows.length;
//   var tabPosition = tabCount;
//   for (var i = 0; i < numWindows; i++) {
//     var win = windows[i];
//     if (targetWindow.id != win.id) {
//       var numTabs = win.tabs.length;
//       for (var j = 0; j < numTabs; j++) {
//         var tab = win.tabs[j];
//         // Move the tab into the window that triggered the browser action.
//         chrome.tabs.move(tab.id,
//           {"windowId": targetWindow.id, "index": tabPosition});
//         tabPosition++;
//       }
//     }
//   }
// }
// // Set up a click handler so that we can merge all the windows.
// chrome.browserAction.onClicked.addListener(start);
