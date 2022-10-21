import { defineCustomElement } from 'vue'
import CurrentTime from './CurrentTime.ce.vue'

const TimeElement = defineCustomElement(CurrentTime)

// export individual elements
export { TimeElement }

export function register() {
  customElements.define('time-element', TimeElement)
}
