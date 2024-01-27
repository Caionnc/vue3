<script setup lang="ts">
import { onMounted, ref } from "vue";
import GoalsCounter from "./components/GoalsCounter.vue";
import GoalsList from "./components/GoalsList.vue";
import GoalsItem from "./components/GoalsItem.vue";

const enteredValue = ref<string>("");
const goalsArray = ref<string[]>([]);

const addGoals = () => {
  goalsArray.value.push(enteredValue.value);
  console.log("Goal pushed:", enteredValue.value);
  enteredValue.value = "";
};

onMounted(() => {
  addGoals(); // Example: Adding an initial item when the component is mounted
});
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
      <input
        type="text"
        id="goal"
        v-model="enteredValue"
        placeholder="Write a goal"
      />
      <button @click="addGoals()">Add a Goal</button>
      <GoalsCounter>{{ goalsArray.length }}</GoalsCounter>
      <GoalsList>
        <GoalsItem :goals-arr="goalsArray"></GoalsItem>
      </GoalsList>
    </div>
  </header>
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

  button {
    background-color: brown;
    padding: 10px;
    width: 100%;
    height: 100%;
    border-radius: 1 solid #fff;
    text-align: center;
    white-space: nowrap;
  }
}
</style>