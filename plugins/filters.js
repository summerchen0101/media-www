import Vue from 'vue'
import moment from 'moment'

Vue.filter('date', val => moment(val).format('YYYY-MM-DD'))
