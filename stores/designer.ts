import { defineStore } from 'pinia'
import type { Color, Motive } from '~/types'
import { PartOfTshirt } from '~/types'

export const useDesignerStore = defineStore('designer', () => {
  // API data state
  const colors = ref<Color[]>([])
  const motives = ref<Motive[]>([])
  const isDataLoaded = ref(false)

  // design state
  const selectedColor = ref<Color>()
  const selectedColorTshirt = ref<Color>()
  const selectedColorNeckLining = ref<Color>()
  const selectedColorWavePatterns = ref<Color>()
  const selectedMotive = ref<Motive | null>(null)
  const selectedPartOfTshirt = ref<PartOfTshirt>(PartOfTshirt.Tshirt)
  // getters
  const totalPrice = computed(() => {
    const colorPrice = selectedColor.value?.price || 0
    const motivePrice = selectedMotive.value?.price || 0

    return colorPrice + motivePrice
  })

  const takeSelectedColor = (partOfTshirt: PartOfTshirt) => {
    if (partOfTshirt === PartOfTshirt.Tshirt) {
      return selectedColorTshirt.value
    } else if (partOfTshirt === PartOfTshirt.NeckLining) {
      return selectedColorNeckLining.value
    } else if (partOfTshirt === PartOfTshirt.WavePatterns) {
      return selectedColorWavePatterns.value
    }
  }

  // setters
  const setColorAndPartOfTshirt = (color: Color, partOfTshirt: PartOfTshirt) => {
  
    selectedPartOfTshirt.value = partOfTshirt

    // switch case for t-shirt color
    switch (partOfTshirt) {
      case PartOfTshirt.Tshirt:
        selectedColorTshirt.value = color
        document.documentElement.style.setProperty('--tshirt-color', color.color)

        // we use it for the price calculation in the totalPrice getter
        selectedColor.value = color
        break
        
      case PartOfTshirt.NeckLining:
        selectedColorNeckLining.value = color
        document.documentElement.style.setProperty('--tshirt-neck-lining', color.color)
        break
        
      case PartOfTshirt.WavePatterns:
        selectedColorWavePatterns.value = color
        document.documentElement.style.setProperty('--tshirt-wave-patterns', color.color)
        break
    }
  }

  const setMotive = (motive: Motive) => {
    selectedMotive.value = motive
  }


  const initializeDefaults = () => {
    if (colors.value.length === 0 || motives.value.length === 0) {
      return
    }

    selectedColor.value = colors.value[0]
    selectedColorTshirt.value = colors.value[0]
    selectedColorNeckLining.value = colors.value[0]
    selectedColorWavePatterns.value = colors.value[0]
    selectedMotive.value = motives.value[0]
    selectedPartOfTshirt.value = PartOfTshirt.Tshirt

    document.documentElement.style.setProperty('--tshirt-color', selectedColor.value?.color || '')
    document.documentElement.style.setProperty('--tshirt-neck-lining', selectedColorNeckLining.value?.color || '')
    document.documentElement.style.setProperty('--tshirt-wave-patterns', selectedColorWavePatterns.value?.color || '')
  }

  const resetDesign = () => {
    initializeDefaults()
  }

  return { 
    // API data
    colors, 
    motives, 
    isDataLoaded, 
    resetDesign,
    // design state
    selectedColor, 
    selectedMotive, 
    totalPrice, 
    selectedPartOfTshirt, 
    selectedColorTshirt, 
    selectedColorNeckLining, 
    selectedColorWavePatterns, 
    takeSelectedColor, 
    setColorAndPartOfTshirt, 
    setMotive, 
    initializeDefaults 
  }
})