import { memberFetchById } from "../../services/member-fetch-by-id"
import { memberShow } from "./show"

const searchField = document.getElementById("search")
const searchButton = document.getElementById("search-button")

const form = document.querySelector("form")
const search = document.getElementById("search")

searchField.addEventListener("input", () => {
  searchButton.disabled = !searchField.value.length
})

form.onsubmit = async (event) => {
  event.preventDefault()

  try {
    const id = search.value
    const member = await memberFetchById({ id })
    if (member) {
      memberShow({ member })
      search.value = ""
    }
  } catch (error) {
    alert("Algo deu errado, tente novamente mais tarde")
    console.log(error)
  }
}


