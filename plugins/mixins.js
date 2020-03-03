import Vue from 'vue'
import DeviceDetector from 'device-detector-js'
// const pd = require('parse-domain')
// const hostConfig = require('@/config/host')
const dd = new DeviceDetector()

const host = function () {
  return window.location.hostname
}

const device = function () {
  const _deviceMap = {
    Android: 'android',
    iOS: 'ios'
  }
  return _deviceMap[dd.parse(navigator.userAgent).os.name] || 'web'
}

Vue.mixin({
  computed: {
    host,
    device
  }
})
