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





// document.addEventListener('DOMContentLoaded', function () {
//   var divs = document.querySelectorAll('li');
//   debugger
//   for (var i = 0; i < divs.length; i++) {
//     debugger
//     divs[i].addEventListener('click', click);
//   }
// });
//
//
//
// function click(e) {
//   alert("clicked!!")
//   window.close();
// }
