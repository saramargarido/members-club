import { apiConfig } from "./api-config"

const clean = (string) => {
  return string.replace(/[-\s]/g, "").toUpperCase()
}
export async function memberFetchById({ id }) {
  try {
    const response = await fetch(`${apiConfig.baseURL}/clients`)

    const data = await response.json()
    const dataFiltered = data.find((member) =>
      clean(member.id) === clean(id)
    )
    console.log((dataFiltered))
    if (dataFiltered) {
      return dataFiltered
    } else {
      throw new Error("ID não encontrado");
    }

  } catch (error) {
    console.log(error)
    alert("ID não encontrado na base de dados")
  }
}