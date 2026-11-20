import { useEffect, useState } from 'react'
import type { Animal } from '../data/tipos'
import { listarAnimais } from '../services/animalService'

export function useAnimais() {
  const [animais, setAnimais] = useState<Animal[]>([])
  const [carregando, setCarregando] = useState(true)

  useEffect(() => {
    listarAnimais()
      .then(setAnimais)
      .finally(() => setCarregando(false))
  }, [])

  return { animais, carregando }
}