import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueScrollTo from 'vue-scrollto'
import VueMeta from 'vue-meta'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faNarwhal as fadNarwhal,
  faTrash as fadTrash,
  faSun as fadSun,
  faMoon as fadMoon,
  faCloudsSun as fadCloudsSun,
  faCloudsMoon as fadCloudsMoon,
  faClouds as fadClouds,
  faCloudDrizzle as fadCloudDrizzle,
  faCloudShowersHeavy as fadCloudShowersHeavy,
  faThunderstorm as fadThunderstorm,
  faSnowflakes as fadSnowflakes,
  faSmoke as fadSmoke,
  faLightbulbOn as fadLightbulbOn,
  faLightbulbSlash as fadLightBulbSlash,
} from '@fortawesome/pro-duotone-svg-icons'
import { faHeart as fasHeart } from '@fortawesome/pro-solid-svg-icons'
import {
  faEgg as farEgg,
  faCheck as farCheck,
  faArrowRight as farArrowRight,
} from '@fortawesome/pro-regular-svg-icons'
import {
  faLinkedinIn as fabLinkedinIn,
  faGithub as fabGithub,
  faTwitter as fabTwitter,
  faFacebookF as fabFacebookF,
  faInstagram as fabInstagram,
} from '@fortawesome/free-brands-svg-icons'

library.add(
  fabFacebookF,
  fabGithub,
  fabInstagram,
  fabLinkedinIn,
  fabTwitter,
  fadLightbulbOn,
  fadLightBulbSlash,
  fadNarwhal,
  fadTrash,
  fadSun,
  fadMoon,
  fadCloudsSun,
  fadCloudsMoon,
  fadClouds,
  fadCloudDrizzle,
  fadCloudShowersHeavy,
  fadThunderstorm,
  fadSnowflakes,
  fadSmoke,
  farArrowRight,
  farCheck,
  farEgg,
  fasHeart
)

Vue.component('fa-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(VueMeta)
Vue.use(VueScrollTo)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
