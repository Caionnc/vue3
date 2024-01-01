<script setup lang="ts">
import { ref } from "vue";
import GoalsCounter from "./components/GoalsCounter.vue";
import GoalsList from "./components/GoalsList.vue";
import GoalsItem from "./components/GoalsItem.vue";

const number = ref<number>(0);
const enteredValue = ref<string>("");

const goalsArray = <string[]>[];

// const goalsArray = [
//   "Learn a new skill",
//   "Read a book",
//   "Exercise regularly",
//   "Travel to a new place",
//   "Start a hobby",
//   "Spend time with family",
//   "Eat healthier",
//   "Save money",
//   "Volunteer for a cause",
//   "Improve time management",
// ];

const addGoals = () => {
  goalsArray.push(enteredValue.value);
};
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <input type="text" id="goal" v-model="enteredValue" />
      <button @click="addGoals()">{{ enteredValue }}</button>
      <GoalsCounter></GoalsCounter>
      <GoalsList>
        <GoalsItem :goals-arr="goalsArray"></GoalsItem>
      </GoalsList>
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
