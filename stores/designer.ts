import { defineStore } from 'pinia'
import type { Color, Motive } from '~/types'
import { PartOfTshirt } from '~/types'

export const useDesignerStore = defineStore('designer', () => {
  // API data fetching with useFetch
  const { data: colors, pending: colorsPending } = useFetch<Color[]>('/api/colors', {
    key: 'api/colors'
  })
  
  const { data: motives, pending: motivesPending } = useFetch<Motive[]>('/api/motives', {
    key: 'api/motives'
  })

  // Combined loading state
  const isDataLoaded = computed(() => Boolean(!colorsPending.value && !motivesPending.value))

  // design state
  const selectedColor = ref<Color>()
  const selectedColorTshirt = ref<Color>()
  const selectedColorNeckLining = ref<Color>()
  const selectedColorWavePatterns = ref<Color>()
  const selectedMotive = ref<Motive | undefined>(undefined)
  const selectedPartOfTshirt = ref<PartOfTshirt>(PartOfTshirt.Tshirt)
  // getters
  const totalPrice = computed(() => {
    const colorPrice = selectedColor.value?.price || 0
    const motivePrice = selectedMotive.value?.price || 0

    return colorPrice + motivePrice
  })

  const takeSelectedColor = (partOfTshirt: PartOfTshirt) => {

    switch (partOfTshirt) {
      case PartOfTshirt.Tshirt:
        return selectedColorTshirt.value
      case PartOfTshirt.NeckLining:
        return selectedColorNeckLining.value
      case PartOfTshirt.WavePatterns:
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
        // we use it for the price calculation in the totalPrice getter
        selectedColor.value = color
        break
        
      case PartOfTshirt.NeckLining:
        selectedColorNeckLining.value = color
        break
        
      case PartOfTshirt.WavePatterns:
        selectedColorWavePatterns.value = color
        break
    }
  }

  const setMotive = (motive: Motive) => {
    selectedMotive.value = motive
  }


  const initializeDefaults = () => {
    if (!colors.value?.length || !motives.value?.length) {
      return
    }
    selectedColor.value = colors.value[0]
    selectedColorTshirt.value = colors.value[0]
    selectedColorNeckLining.value = colors.value[0]
    selectedColorWavePatterns.value = colors.value[0]
    selectedMotive.value = motives.value[0]
    selectedPartOfTshirt.value = PartOfTshirt.Tshirt
  }

  const resetToDefault = () => {
    initializeDefaults()
  }

  return { 
    // API data
    colors, 
    motives, 
    isDataLoaded, 
    resetToDefault,
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