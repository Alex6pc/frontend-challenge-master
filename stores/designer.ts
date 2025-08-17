import { defineStore } from 'pinia'
import type { Color, Motive } from '~/types'

export const useDesignerStore = defineStore('designer', () => {
  // state
  const selectedColor = ref<Color | null>(null)
  const selectedMotive = ref<Motive | null>(null)

  // getters
  const totalPrice = computed(() => {
    const colorPrice = selectedColor.value?.price || 0
    const motivePrice = selectedMotive.value?.price || 0

    return colorPrice + motivePrice
  })

  const hasSelections = computed(() => {
    return selectedColor.value !== null && selectedMotive.value !== null
  })

  // setters
  const setColor = (color: Color) => {
    selectedColor.value = color

    // do i need this?
    document.documentElement.style.setProperty('--tshirt-color', color.color)
  }

  const setMotive = (motive: Motive) => {
    selectedMotive.value = motive
  }

  const reset = () => {
    selectedColor.value = null
    selectedMotive.value = null

    // do i need this?
    document.documentElement.style.removeProperty('--tshirt-color')
  }

  const initializeDefaults = async (colors: Color[], motives: Motive[]) => {
    selectedColor.value = colors[0]
    selectedMotive.value = motives[0]

    // do i need this?
    document.documentElement.style.setProperty('--tshirt-color', selectedColor.value?.color || '')
  }

  return { selectedColor, selectedMotive, totalPrice, setColor, setMotive, hasSelections, reset, initializeDefaults }
})