function openSlideMenu() {
  document.getElementById('side-menu').style.width = '300px';
  document.getElementById('alert').style.marginRight = '300px';
}

function closeSlideMenu() {
  document.getElementById('side-menu').style.width = '0';
  // document.getElementById('alert').style.marginRight = '0';
}

function closeEmailCnt() {
  document.getElementById('email-content').style.display = 'none';
}

function showDropdown() {
  document.getElementById('down-arrow').style.display = 'none';
  document.getElementById('dropdown-content').style.display = 'block';
  document.getElementById('hide-dropdown').style.display = 'flex';
}

function closeDropdown() {
  document.getElementById('dropdown-content').style.display = 'none';
  document.getElementById('hide-dropdown').style.display = 'none';
  document.getElementById('down-arrow').style.display = 'block';
}

function closeTimeFrame() {
  document.getElementById('time-frame').style.display = 'none';
}

function closeMessage() {
  document.getElementById('callout-message').style.display = 'none';
}
