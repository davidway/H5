import Vue from 'vue'
import TIM from 'tim-js-sdk'
import COS from 'cos-js-sdk-v5'

const tim = TIM.create({
    SDKAppID: 0 // 你的SDKAppID
})
tim.setLogLevel(4) // 普通级别，日志量较多，接入时建议使用
// tim.setLogLevel(1) // release级别， SDK输出关键信息，生产环境时建议使用
tim.registerPlugin({ 'cos-js-sdk': COS })
window.tim = tim
window.TIM = TIM
Vue.prototype.tim = tim
Vue.prototype.TIM = TIM
