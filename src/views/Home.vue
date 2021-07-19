<template>
  <div class="home">
    <div class="search-box"></div>
    <input type="text" v-model="datainput" />
    <button>Search</button>

    <div>
      <ToDoList :datalist="dataTaskView" @deleteTaskAtParent="deleteTaskById"/>
    </div>
  </div>
</template>

<script>
import { taskRepository } from "@/repositories/taskRepositories.js";
import ToDoList from '@/components/ToDoList.vue'

export default {
  name: "Home",
  components: {
    ToDoList
  },
  data() {
    return {
      dataTaskView: [],
      datainput: "",
    };
  },
  methods: {
    deleteTaskById(id){
      if (confirm("Are you sure you want to delete")) {
        taskRepository.deleteTask(id);
      }
    }
  },
  mounted() {
    this.dataTaskView = taskRepository.getDataList();
    console.log(this.dataTaskView);
  },
  watch: {
    datainput(newVal) {
      this.dataTaskView = taskRepository.searchByName(newVal);
    },
  },
};
</script>

<style scoped></style>
