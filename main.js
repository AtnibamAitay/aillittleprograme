import App from './App'
import VueDirectiveImagePreviewer from 'vue-directive-image-previewer'

Vue.use(VueDirectiveImagePreviewer)  

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
uni.loadFontFace({
  family: 'ysbth',
  source: 'url("https://tuanzi-images.oss-cn-guangzhou.aliyuncs.com/106/ysbth.ttf")',
  global: true,
  success() {
	  // console.log('success')
  }
})

app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif