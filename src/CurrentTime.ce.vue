<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps({
  timeZone: {
    type: String,
    default: 'America/Los_Angeles',
  },
})

const currentDateTime = ref(new Date())
const displayTime = computed(() =>
  currentDateTime.value.toLocaleString('en-US', {
    timeZone: props.timeZone,
  }),
)

setInterval(() => {
  currentDateTime.value = new Date()
})
</script>

<template>
  <div>
    {{ displayTime }}
  </div>
</template>
