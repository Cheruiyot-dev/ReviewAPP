<script setup>
import ReviewList from '../components/ReviewList.vue';
import ReviewStats from '../components/ReviewStats.vue';
import ReviewsForm from '../components/ReviewsForm.vue';


</script>

<template>
  <div class="home">
    <div class="container border border-red-500">
      <!-- Reviews Form -->
      <ReviewsForm/>
      <!-- Reviews Stats -->
      <ReviewStats/>
      <!-- Reviews List -->
      <ReviewList/>
    </div>
  </div>
</template>
