const searchBox = document.getElementById('search');
searchBox.addEventListener('click', showBlogs);
function showBlogs() {
  // console.log('Search BOx Clicked');
  let searchContent = document.getElementById('content');
  searchContent.innerHTML = `<li><a href="more1.html">Best Tools and Deals for Developers and Designers</a></li>
  <li><a href="more2.html">Powerful Techniques For Responsive Web Design</a></li>
  <li><a href="more3.html">CSS Vertical Alignment: Tips and Techniques</a></li>
  <li><a href="more4.html">Quick Tips to make your WordPress Site Faster</a></li>
  <li><a href="more5.html">Introduction to GitHub and Git Bash</a></li>
  <li><a href="more6.html">Best Visual Studio Code Extensions</a></li>
  <li><a href="more7.html">Javascript Event Listeners</a></li>
  <li><a href="more8.html">Ways To earn Money as a Developer</a></li>`;
}
