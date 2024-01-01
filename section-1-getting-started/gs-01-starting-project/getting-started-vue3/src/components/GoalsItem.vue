<script setup lang="ts">
import { ref, type PropType } from "vue";

const props = defineProps({
  title: String,
  goalsArr: Array as PropType<string[]>,
});
</script>

<template>
  <li v-for="goals in goalsArr">{{ goals }}</li>
</template>

<style scoped></style>
