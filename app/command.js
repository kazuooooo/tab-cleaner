// for commands
chrome.commands.onCommand.addListener(function(command) {
  if (command == "clean-tabs") {
    cleanTabs()
  } else if(command == "gather-tags") {
    gatherTabs()
  } else if(command == "pin-tab"){
    pinTab()
  }
});
