<template>
  <div class="home">
      Edit page
      <div>Task name:</div>
      <div>  <input type="text" v-model="newName"/></div>
     <div><button @click="editValue()">Update</button> </div>
  </div>
</template>


<script>
import { taskRepository } from "@/repositories/taskRepositories.js";
export default {
  name: 'Update',
  data(){
    return {
      newName:'',
      id: 0
    }
  
  },
  mounted() {
    this.id = this.$route.params.id;
    this.newName = taskRepository.findbyid(this.id).name;
  },
  methods: {
    editValue() {
        taskRepository.editTask({
            id: this.id,
            name: this.newName
        });
    }
  }
}
</script>
