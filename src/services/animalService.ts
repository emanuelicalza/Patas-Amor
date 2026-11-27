import type { Animal } from '../data/tipos'

const URL_ANIMAIS = 'https://my.api.mockaroo.com/animais?key=de2c4470'

export async function listarAnimais(): Promise<Animal[]> {
  const resposta = await fetch(URL_ANIMAIS)

  if (!resposta.ok) {
    throw new Error(`Falha ao buscar os animais (status ${resposta.status})`)
  }

  return resposta.json()
}