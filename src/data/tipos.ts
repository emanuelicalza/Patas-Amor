export type Especie = 'cachorro' | 'gato' | 'outro'

export type Filtro = 'todos' | Especie

export type Animal = {
  id: number
  nome: string
  descricao: string
  idade: string
  imagem: string
  especie: Especie
}

export type Dica = {
  id: number
  emoji: string
  titulo: string
  texto: string
}