
import qs from 'query-string'

export default ({ app }, inject) => {
  inject('qs', qs)
}
