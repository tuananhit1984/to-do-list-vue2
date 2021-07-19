<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/add">Add</router-link> |
      <router-link to="/edit/9">Edit</router-link> | 
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
</style>
