// Get DOM elements
const bar = document.getElementById("bar")
const close = document.getElementById("close")
const nav = document.getElementById("navbar")

// Debug to check if elements are found
console.log("Bar element:", bar)
console.log("Close element:", close)
console.log("Nav element:", nav)

// Toggle menu open when hamburger icon is clicked
if (bar) {
  bar.addEventListener("click", () => {
    console.log("Bar clicked!")
    nav.classList.add("active")
    // Show close button when menu is opened
    if (close) {
      close.style.display = "block"
    }
  })
}

// Toggle menu closed when close icon is clicked
if (close) {
  close.addEventListener("click", () => {
    console.log("Close clicked!")
    nav.classList.remove("active")
    // Hide close button when menu is closed
    close.style.display = "none"
  })
}

