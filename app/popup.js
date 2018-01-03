// for browser action menus
debugger
document.addEventListener('DOMContentLoaded', function () {
  // get doms
  var cleanTabMenu = document.getElementById('clean-tab');
  var gatherTabMenu = document.getElementById('gather-tab');
  var pinTabMenu = document.getElementById('pin-tab');

  // add event listeners
  cleanTabMenu.addEventListener('click', cleanTabs);
  gatherTabMenu.addEventListener('click', gatherTabs);
  pinTabMenu.addEventListener('click', pinTab);
});
