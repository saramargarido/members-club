import { apiConfig } from "./api-config"

export async function memberFetchById({ id }) {
  try {
    const response = await fetch(`${apiConfig.baseURL}/clients`)

    const data = await response.json()
    const dataFiltered = data.filter((member) =>
      member.id === id
    )
    if (dataFiltered && dataFiltered.length) {
      return dataFiltered
    } else {
      throw new Error("ID não encontrado");
    }

  } catch (error) {
    console.log(error)
    alert("ID não encontrado na base de dados")
  }
}