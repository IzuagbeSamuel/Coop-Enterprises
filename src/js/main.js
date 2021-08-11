import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';



// const searchWrapper = document.querySelector('.search-input');
// const inputBox = searchWrapper.querySelector('input');
// const suggBox = searchWrapper.querySelector('.autocom-box');

// inputBox.onkeyup = (e) => {
//   let userData = e.target.value;
//   let emptyArray = [];
//   if (userData) {
//     emptyArray = suggestions.filter((data) => {
//       return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
//     });
//     emptyArray = emptyArray.map((data) => {
//       return (data = '<li>' + data + '</li>');
//     });
//     console.log(emptyArray);
//     showSuggestions(emptyArray);
//     let allList = suggBox.querySelectorAll('li');
//     for (let i = 0; i < allList.length; i++) {
//       allList[i].setAttribute('onclick', 'select(this)');
//     }
//     searchWrapper.classList.add('active');
//   } else {
//     searchWrapper.classList.remove('active');
//   }
// };

// function select(element) {
//   let selectUserData = element.textContent;
//   inputBox.value = selectUserData;
//   searchWrapper.classList.remove('active');
// }

// function showSuggestions(list) {
//   let listData;
//   if (!list.length) {
//     userValue = inputBox.value;
//     listData = '<li>' + userValue + '</li>';
//   } else {
//     listData = list.join('');
//   }
//   suggBox.innerHTML = listData;
// }

document.querySelector('.fa-bars').addEventListener('click', () => {
  document.getElementById('side-menu').style.width = '350px';
});

document.querySelector('.btn-closure').addEventListener('click', () => {
  document.getElementById('side-menu').style.width = '0';
});

document.getElementById('down-arrow').addEventListener('click', () => {
  document.getElementById('down-arrow').style.display = 'none';
  document.getElementById('dropdown-content').style.display = 'block';
  document.getElementById('hide-dropdown').style.display = 'flex';
});

document.getElementById('hide-dropdown').addEventListener('click', () => {
  document.getElementById('dropdown-content').style.display = 'none';
  document.getElementById('hide-dropdown').style.display = 'none';
  document.getElementById('down-arrow').style.display = 'block';
});

