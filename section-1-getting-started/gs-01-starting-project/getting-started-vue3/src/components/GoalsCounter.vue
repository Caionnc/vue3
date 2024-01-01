<script setup lang="ts">
import { ref } from 'vue';



const goalCounter = ref<number>(0);

const updateCounter = () => {
  goalCounter.value++;
};
</script>

<template>
  <div class="greetings">
    <label
      >Goals counter <span>{{ goalCounter }}</span></label
    >
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
