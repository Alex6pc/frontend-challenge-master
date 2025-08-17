import { defineStore } from 'pinia'
import type { Color, Motive } from '~/types'
import { PartOfTshirt } from '~/types'

export const useDesignerStore = defineStore('designer', () => {
  // state
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

  const hasSelections = computed(() => {
    return selectedColor.value !== null && selectedMotive.value !== null
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
    console.log('color', color)
    console.log('partOfTshirt', partOfTshirt)
    
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
        console.log('neck lining color', color)
        break
        
      case PartOfTshirt.WavePatterns:
        selectedColorWavePatterns.value = color
        document.documentElement.style.setProperty('--tshirt-wave-patterns', color.color)
        console.log('wave patterns color', color)
        break
    }
  }

  const setMotive = (motive: Motive) => {
    selectedMotive.value = motive
  }

  // const reset = () => {
  //   selectedColor.value = null
  //   selectedMotive.value = null

  //   // do i need this?
  //   document.documentElement.style.removeProperty('--tshirt-color')
  // }

  const initializeDefaults = async (colors: Color[], motives: Motive[]) => {
    selectedColor.value = colors[0]

    selectedColorTshirt.value = colors[0]
    selectedColorNeckLining.value = colors[0]
    selectedColorWavePatterns.value = colors[0]

    selectedMotive.value = motives[0]
    selectedPartOfTshirt.value = PartOfTshirt.Tshirt

    document.documentElement.style.setProperty('--tshirt-color', selectedColor.value?.color || '')
    document.documentElement.style.setProperty('--tshirt-neck-lining', selectedColorNeckLining.value?.color || '')
    document.documentElement.style.setProperty('--tshirt-wave-patterns', selectedColorWavePatterns.value?.color || '')
  }

  return { selectedColor, selectedMotive, totalPrice, selectedPartOfTshirt, selectedColorTshirt, selectedColorNeckLining, selectedColorWavePatterns, takeSelectedColor, setColorAndPartOfTshirt, setMotive, hasSelections, initializeDefaults }
  })