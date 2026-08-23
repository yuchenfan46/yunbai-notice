import DefaultTheme from 'vitepress/theme'
import OnlineSection from './components/OnlineSection.vue'
import TimersSection from './components/TimersSection.vue'
import ProjectLinks from './components/ProjectLinks.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('OnlineSection', OnlineSection)
    app.component('TimersSection', TimersSection)
    app.component('ProjectLinks', ProjectLinks)
  }
}
