// Get DOM elements
const bar = document.getElementById("bar")
const close = document.getElementById("close")
const nav = document.getElementById("navbar")

console.log("Script loaded - Elements:", { bar, close, nav })

// Multiple ways to handle the menu bar click
function openMenu() {
  console.log("Menu bar clicked!")
  if (nav) {
    nav.classList.add("active")
    if (close) {
      close.style.display = "block"
    }
  }
}

// Toggle menu open when hamburger icon is clicked
if (bar) {
  // Method 1: addEventListener
  bar.addEventListener("click", openMenu)

  // Method 2: onclick property as backup
  bar.onclick = openMenu

  console.log("Click handlers attached to menu bar")
}

// Toggle menu closed when close icon is clicked
if (close) {
  close.addEventListener("click", () => {
    console.log("Close button clicked!")
    if (nav) {
      nav.classList.remove("active")
      close.style.display = "none"
    }
  })
}

// Add a window load event to ensure everything is properly initialized
window.addEventListener("load", () => {
  console.log("Window loaded - Checking elements again:", {
    bar: document.getElementById("bar"),
    close: document.getElementById("close"),
    nav: document.getElementById("navbar"),
  })

  // Re-attach event listeners if needed
  const barElement = document.getElementById("bar")
  if (barElement && !barElement.onclick) {
    barElement.onclick = openMenu
    console.log("Re-attached click handler to menu bar")
  }
})

// Add a direct click handler to the document for debugging
document.addEventListener("click", (e) => {
  console.log("Clicked element:", e.target)
})

