import { useEffect, useState } from 'react'
import type { Animal } from '../data/tipos'
import { listarAnimais } from '../services/animalService'

export function useAnimais() {
  const [animais, setAnimais] = useState<Animal[]>([])

  useEffect(() => {
    listarAnimais().then(setAnimais)
  }, [])

  return { animais }
}