const memberInfos = document.getElementById("memberInfos")

export function memberShow({ member }) {
  try {
    memberInfos.innerHTML = ""

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
  } catch (error) {
    alert("Não foi possível exibir o cliente")
    console.log(error)
  }
}