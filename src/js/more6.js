function openSlideMenu() {
  document.getElementById('side-menu').style.width = '300px';
  document.getElementById('alert').style.marginRight = '300px';
}

function closeSlideMenu() {
  document.getElementById('side-menu').style.width = '0';
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