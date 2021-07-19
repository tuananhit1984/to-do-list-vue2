<template>
  <div class="home">
      Add page
      <div>Task name:</div>
      <div>  <input type="text" v-model="taskName"/></div>
     <div><button @click="addTask">Submit</button> </div>
  </div>
</template>

<script>
import { taskRepository } from "@/repositories/taskRepositories.js";

export default {
  name: 'Add',
  data() {
    return {
      taskName: '',
    }
  },
  methods: {
    addTask() {
      this.taskName.trim() != '' && taskRepository.addTask(this.taskName);
      this.$router.push({ name: 'Home' });
    },
  },
}
</script>
