<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">1</RouterLink>
      <RouterLink to="/2">2</RouterLink>
      <RouterLink to="/3">3</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped lang="sass">
nav
  width: 100%
  font-size: 14px
  text-align: center
  margin-top: 2rem

nav a.router-link-exact-active
  color: black
  font-weight: bold

nav a
  display: inline-block
  padding: 0 1rem
  text-decoration: none
  border-left: 1px solid gray

nav a:first-of-type
  border: 0

@media (min-width: 1024px)
  nav
    text-align: left
    font-size: 1rem
    padding: 1rem 0
    margin-top: 1rem
</style>
