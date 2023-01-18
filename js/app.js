// build the navigation is dynamically as an unordered list
// const fragment = document.createDocumentFragment();
const List = document.getElementById("navbar__list"); //Declare a variable List
const sections = document.querySelectorAll("section"); //Declare a variable sections
const Up_Buttom = document.querySelector(".up"); //Declare a variable Up_Buttom

function createItemsLest() {
  //start function to make list dynamic
  for (i of sections) {
    // This function to Create an element li dynamically
    const itemList = document.createElement("li"); //Declare a variable itmesList
    itemList.innerHTML = `<a href="#${i.id}" data-nav="${i.id}" class="menu__link">${i.dataset.nav}</a>`; //Create an element li
    List.appendChild(itemList); // append the li to the navbar__list
  } //end for loop
} //end function

createItemsLest(); //Call the function to work

// Add class 'active' to section when near top of viewport
window.onscroll = function () {
  //function to set active class to section and li item currently displayd
  document.querySelectorAll("section").forEach((ele) => {
    //has been determined section
    const index = ele.dataset.nav.slice()[8] - 1; // Specifies the index of the element to place the active class on
    document
      .querySelectorAll(".menu__link")
      [index].classList.remove("active-class"); //remove the active class for all section
    // The Condition :
    // Detect the element location relative to the viewport
    ele.getBoundingClientRect().top >= -300 &&
    ele.getBoundingClientRect().top <= 220
      ? // The Condition : True
        ele.classList.add("your-active-class") & // Add an active state to navigation items when a section is in the viewport
        document
          .querySelectorAll(".menu__link")
          [index].classList.add("active-class")
      : // The Condition : False
        ele.classList.remove("your-active-class");
  });
  // Visible when the user scroll below the fold of the page
  window.scrollY >= 700 // The Condition :Show and hide the botton
    ? // The Condition : True
      Up_Buttom.classList.add("show") //Show the botton to go up to the top of the page
    : // The Condition : False
      Up_Buttom.classList.remove("show"); //Hide the botton to go up to the top of the page
};

// Add a scroll to top button on the page
Up_Buttom.onclick = function () {
  //When you click on the botton, we go to the top of page
  window.scrollTo({
    top: 0,
    behavior: "smooth", //To make smooth scrolling
  });
};
// Use addEventListener to listen to the click event
List.addEventListener("click", (ele) => {
  ele.preventDefault();
  if (ele.target.dataset.nav) {
    //To make scrolling within the page is smooth
    document
      .getElementById(`${ele.target.dataset.nav}`)
      .scrollIntoView({ behavior: "smooth" });
  }
});
