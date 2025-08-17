import { useDesignerStore } from "~/stores/designer"

export const useNavigation = () => {
  const router = useRouter()

  const goToDesign = () => {
    router.replace('/')
  }

  const goToCheckout = () => {
    router.push('/checkout')
  }

  const goToAbout = () => {
    router.push('/about')
  }

  const goToOrderSuccess = () => {
    router.push('/order-success')
  }

  const designAnotherProduct = () => {
    // Reset the design to initial state
    const designerStore = useDesignerStore()
    designerStore.resetDesign()
    router.replace('/')
  }

  const goBack = () => {
    router.back()
  }

  return {
    goToDesign,
    goToCheckout,
    goToAbout,
    goToOrderSuccess,
    designAnotherProduct,
    goBack
  }
}