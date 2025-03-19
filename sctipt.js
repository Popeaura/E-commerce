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
