const modal = document.getElementById("modal")
const button = document.getElementById("close")

export function modalShow() {
  modal.style.display = "flex"

  button.addEventListener("click", () => {
    modal.style.display = "none"
  })
}