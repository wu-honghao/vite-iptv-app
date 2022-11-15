<template>
  <div>{{ index }} - {{ source.text }}</div>
</template>
  
<script setup>
const props = defineProps({
  index: {
    type: Number,
  },
  source: {
    type: Object,
    default() {
      return {};
    },
  },
});
</script>