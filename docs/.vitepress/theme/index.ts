import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import TimersSection from './components/TimersSection.vue'
import ProjectLinks from './components/ProjectLinks.vue'
import OnlineNotice from './components/OnlineNotice.vue'
import SponsorSection from './components/SponsorSection.vue'
import FriendLinks from './components/FriendLinks.vue'
import VisitorInfo from './components/VisitorInfo.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => h(VisitorInfo)
    })
  },
  enhanceApp({ app }) {
    app.component('TimersSection', TimersSection)
    app.component('ProjectLinks', ProjectLinks)
    app.component('OnlineNotice', OnlineNotice)
    app.component('SponsorSection', SponsorSection)
    app.component('FriendLinks', FriendLinks)
    app.component('VisitorInfo', VisitorInfo)
  }
}
