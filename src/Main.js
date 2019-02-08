import Vue from 'vue'
import App from './components/App'

new Vue({
  render: x => x(App)
}).$mount('#root')