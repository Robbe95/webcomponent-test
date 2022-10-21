import { defineCustomElement } from 'vue'
import CurrentTime from './CurrentTime.ce.vue'

const TimeElement = defineCustomElement(CurrentTime)
function register() {
  customElements.define('time-element', TimeElement)
}
// export individual elements
export { TimeElement, register }
