import { memberFetchById } from "../../services/member-fetch-by-id"

const searchField = document.getElementById("search")
const searchButton = document.getElementById("search-button")

const form = document.querySelector("form")
const search = document.getElementById("search")

searchField.addEventListener("input", () => {
  searchButton.disabled = !searchField.value.length
})

form.onsubmit = async (event) => {
  event.preventDefault()
  const id = search.value
  const member = await memberFetchById({ id })
  console.log(member)
}

