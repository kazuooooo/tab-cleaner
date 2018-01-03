chrome.contextMenus.create({
  "title" : "タブを閉じる ⌥W",
  "type"  : "normal",
  "contexts" : ["all"],
  "onclick" : function(_){
    cleanTabs();
  }
});

chrome.contextMenus.create({
  "title" : "タブを集める ⌥G",
  "type"  : "normal",
  "contexts" : ["all"],
  "onclick" : function(_){
    gatherTabs();
  }
});

chrome.contextMenus.create({
  "title" : "タブを留める ⌥P",
  "type"  : "normal",
  "contexts" : ["all"],
  "onclick" : function(_){
    pinTab();
  }
});

