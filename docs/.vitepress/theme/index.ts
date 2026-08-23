import DefaultTheme from 'vitepress/theme'
import TimersSection from './components/TimersSection.vue'
import ProjectLinks from './components/ProjectLinks.vue'
import OnlineNotice from './components/OnlineNotice.vue'
import SponsorSection from './components/SponsorSection.vue'
import FriendLinks from './components/FriendLinks.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('TimersSection', TimersSection)
    app.component('ProjectLinks', ProjectLinks)
    app.component('OnlineNotice', OnlineNotice)
    app.component('SponsorSection', SponsorSection)
    app.component('FriendLinks', FriendLinks)
  }
}
