import { useEffect, useState } from 'react'
import type { Animal } from '../data/tipos'
import { listarAnimais } from '../services/animalService'

export function useAnimais() {
  const [animais, setAnimais] = useState<Animal[]>([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState<string | null>(null)

  useEffect(() => {
    listarAnimais()
      .then(setAnimais)
      .catch(() =>
        setErro('Não foi possível carregar os animais agora. Tente novamente em alguns instantes.'),
      )
      .finally(() => setCarregando(false))
  }, [])

  return { animais, carregando, erro }
}