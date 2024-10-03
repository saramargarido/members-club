const memberInfos = document.getElementById("memberInfos")
const showId = document.querySelector(".id .subtitle")
const stickersArea = document.getElementById("stickers-area")
const progressArea = document.getElementById("progress-area")
const totalCuts = document.getElementById("total-cuts")
const cutsList = document.getElementById("list")

export function memberShow({ member }) {
  try {
    memberInfos.innerHTML = ""
    stickersArea.innerHTML = ""
    progressArea.innerHTML = ""
    cutsList.innerHTML = ""

    showId.innerText = `ID ${member.id}`

    const image = document.createElement("div")
    image.classList.add("gradient")

    const memberImg = document.createElement("img")
    memberImg.setAttribute("src", `./src/assets/avatars/${member.id}.jpg`)
    memberImg.setAttribute("alt", `Foto de ${member.name}`)

    image.append(memberImg)

    const figCaption = document.createElement("figcaption")
    const memberName = document.createElement("h2")
    memberName.innerText = member.name

    const memberSince = document.createElement("small")
    memberSince.innerText = `Cliente desde ${member.clientSince}`

    figCaption.append(memberName, memberSince)

    memberInfos.append(image, figCaption)

    for (let i = 0; i < member.loyaltyCard.cutsNeeded; i++) {
      const stickerWrapper = document.createElement("div")
      const stickerCheck = document.createElement("img")
      stickerCheck.setAttribute("src", "./src/assets/icons/PinCheck.png")
      stickerCheck.setAttribute("alt", "ícone de um selo")
      const stickerGift = document.createElement("img")
      stickerGift.setAttribute("src", "./src/assets/icons/giftPlacehoder.svg")
      stickerGift.setAttribute("alt", "ícone de um selo")

      if (member.appointmentHistory[i]) {
        stickerWrapper.append(stickerCheck)
      } else if (!member.appointmentHistory[i] && i === (member.loyaltyCard.cutsNeeded - 1)) {
        stickerWrapper.append(stickerGift)
      }

      stickersArea.append(stickerWrapper)
    }

    const progressAreaTitle = document.createElement("h2")
    progressAreaTitle.innerHTML = `${member.loyaltyCard.cutsRemaining} <span> cortes restantes </span>`

    const progressBar = document.createElement("div")
    progressBar.classList.add("progress-bar")
    const bar = document.createElement("span")
    bar.classList.add("bar")
    const steps = document.createElement("small")
    steps.innerText = `${member.loyaltyCard.totalCuts} de ${member.loyaltyCard.cutsNeeded}`
    progressBar.append(bar, steps)

    const progressPercent = (member.loyaltyCard.totalCuts / member.loyaltyCard.cutsNeeded) * 100
    progressBar.style.setProperty('--progress-width', `${progressPercent}%`);

    progressArea.append(progressAreaTitle, progressBar)
    totalCuts.innerText = `${member.loyaltyCard.totalCuts} cortes`

    member.appointmentHistory.forEach((appointment) => {
      const cutLi = document.createElement("li")

      const dateWrapper = document.createElement('div')
      dateWrapper.classList.add("date")
      const date = document.createElement("p")
      date.innerHTML = `<strong> ${appointment.date} </strong>`
      const hour = document.createElement("small")
      hour.innerText = appointment.time
      dateWrapper.append(date, hour)

      const check = document.createElement("div")
      check.classList.add("icon-check")
      const checkIcon = document.createElement("img")
      checkIcon.setAttribute("src", "./src/assets/icons/pinUnchecked.svg")
      checkIcon.setAttribute("alt", "ícone de check")
      check.append(checkIcon)

      cutLi.append(dateWrapper, check)

      cutsList.appendChild(cutLi)
    })

  } catch (error) {
    alert("Não foi possível exibir o cliente")
    console.log(error)
  }
}