<template>
    <div>
        <p>No Reviews yet</p>
        <div class="reviewList">
            <ReviewItem   
            v-for="(item, index) in reviewsContent"
            :key="index"
            :item="item"
            />
        </div>

    </div>
</template>

<script setup>
import ReviewItem from './ReviewItem.vue';
import {useReviewsStore} from '../stores/reviews'
import { computed } from 'vue'; 

const store = useReviewsStore();

// const reviewsContent = computed(() => store.getReviewsContent());

// Destructure the method from the store
const { getReviewsContent } = store;

// Use computed to make the reviewsContent reactive
const reviewsContent = getReviewsContent();

</script>

<style  scoped>

</style>
