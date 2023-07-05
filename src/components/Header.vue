<template>
    <header>
        <div class="container">
            <div class="nav-inner">
                <h2>Review UI</h2>
                <nav>
                    <RouterLink to="/">Home</RouterLink>
                    <RouterLink to="/about">About</RouterLink>
                </nav>
            </div>

        </div>
    </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'

</script>

<style scoped>
.nav-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

nav {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
}
nav a {
  margin: 0px 20px;
  color: #fff;
  transition: .3s;
}
nav a:hover {
  color: #4ecca3;
}

</style>