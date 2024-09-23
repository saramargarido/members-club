const searchField = document.getElementById("search")
const searchButton = document.getElementById("search-button")

searchField.addEventListener("input", () => {
  if (searchField.value) {
    searchButton.classList.add("length")
  } else {
    searchButton.classList.remove("length")
  }
})

