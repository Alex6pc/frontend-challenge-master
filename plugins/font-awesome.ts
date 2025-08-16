import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faUser, faCog, faHeart, faStar } from '@fortawesome/free-solid-svg-icons'

// Add icons to the library
library.add(faHome, faUser, faCog, faHeart, faStar)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('Faicon', FontAwesomeIcon)
})  