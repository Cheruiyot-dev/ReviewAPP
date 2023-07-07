<template>
    <div class="feedback-stats border border-red-500">
       
        <h4> {{ reviewsCount ? reviewsCount : "No" }}
             Reviews</h4>
        <h4>Average rating : {{ isNaN(averageRating) ? 0 : averageRating }}</h4>

    </div>
</template>

<script setup>


import { useReviewsStore } from '../stores/reviews';
import { computed } from 'vue';



const store = useReviewsStore();

const averageRating = computed(() => store.getAverageRating());

const reviewsCount = computed (() => store.getReviewsCount());

</script>

