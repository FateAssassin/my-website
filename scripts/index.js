// Get the navigation element
const navElement = document.getElementById('nav');

// Function to check if the element is visible on the screen
function isElementVisible(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle when the navigation element is not visible
function handleNavNotVisible() {
  // Your code to be executed when the navigation element is not visible
    document.getElementById("fixed-nav").style.display = "block";
  // Add your actions here
}
function handleNavVisible() {
    // Your code to be executed when the navigation element is not visible
    document.getElementById("fixed-nav").style.display = "none";
    // Add your actions here
  }

// Function to check the visibility of the navigation element
function checkNavVisibility() {
  if (!isElementVisible(navElement)) {
    handleNavNotVisible();
  }
  if (isElementVisible(navElement)) {
    handleNavVisible();
  }
}

// Event listener for scrolling
window.addEventListener('scroll', checkNavVisibility);