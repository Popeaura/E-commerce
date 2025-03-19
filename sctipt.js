// Get DOM elements
const bar = document.getElementById("bar")
const close = document.getElementById("close")
const nav = document.getElementById("navbar")

console.log("Script loaded - Elements:", { bar, close, nav })

// Toggle menu open when hamburger icon is clicked
if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active")
  })
}

// Toggle menu closed when close icon is clicked
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active")
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
    barElement.onclick = () => {
      nav.classList.add("active")
    }
    console.log("Re-attached click handler to menu bar")
  }
})

// Add a direct click handler to the document for debugging
document.addEventListener("click", (e) => {
  console.log("Clicked element:", e.target)
})

