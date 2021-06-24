const searchWrapper = document.querySelector('.search-input');
const inputBox = searchWrapper.querySelector('input');
const suggBox = searchWrapper.querySelector('.autocom-box');

inputBox.onkeyup = (e) => {
  let userData = e.target.value;
  let emptyArray = [];
  if (userData) {
    emptyArray = suggestions.filter((data) => {
      return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
    });
    emptyArray = emptyArray.map((data) => {
      return (data = '<li>' + data + '</li>');
    });
    console.log(emptyArray);
    showSuggestions(emptyArray);
    let allList = suggBox.querySelectorAll('li');
    for (let i = 0; i < allList.length; i++) {
      allList[i].setAttribute('onclick', 'select(this)');
    }
    searchWrapper.classList.add('active');
  } else {
    searchWrapper.classList.remove('active');
  }
};

function select(element) {
  let selectUserData = element.textContent;
  inputBox.value = selectUserData;
  searchWrapper.classList.remove('active');
}

function showSuggestions(list) {
  let listData;
  if (!list.length) {
    userValue = inputBox.value;
    listData = '<li>' + userValue + '</li>';
  } else {
    listData = list.join('');
  }
  suggBox.innerHTML = listData;
}

function openSlideMenu() {
  document.getElementById('side-menu').style.width = '300px';
  document.getElementById('alert').style.marginRight = '300px';
}

function closeSlideMenu() {
  document.getElementById('side-menu').style.width = '0';
  document.getElementById('alert').style.marginRight = '0';
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
// let emailCnt = document.getElementById('email-content');
// window.onscroll = function () {
//   scrollFunction();
// };

// function scrollFunction() {
//   if (document.body.scroll > 10 || document.documentElement.scrollTop > 15) {
//     emailCnt.style.display = 'block';
//   } else {
//     emailCnt.style.display = 'none';
//   }
// }
