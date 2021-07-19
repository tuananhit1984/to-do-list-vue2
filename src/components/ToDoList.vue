<template>
  <div class="hello">
    <ul id="example-1">
        <li v-for="item in datalist" :key="item.id">
          {{ item.id }}. {{ item.name }}
          <!-- <button @click.prevent="edit()">edit</button> -->
          <router-link :to="'/edit/' + item.id">Edit</router-link>
          <button @click="deleteTaskFromChild(item.id)">delete</button>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'ToDoList',
  props: { 
    datalist:  [],
  },
  methods: {
    deleteTaskFromChild(id) {
      this.$emit('deleteTaskAtParent', id);
    }
  }
}
</script>

