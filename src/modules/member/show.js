const memberInfos = document.getElementById("memberInfos")
const showId = document.querySelector(".id .subtitle")
const stickersArea = document.getElementById("stickers-area")

export function memberShow({ member }) {
  try {
    memberInfos.innerHTML = ""
    stickersArea.innerHTML = ""

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


  } catch (error) {
    alert("Não foi possível exibir o cliente")
    console.log(error)
  }
}