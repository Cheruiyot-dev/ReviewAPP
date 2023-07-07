<template>
    <div class="border border-red-500">
        <p v-if="!store.reviews">No Reviews yet</p>
        <!-- <div class="reviewList">
            <ReviewItem   
            v-for="(item, index) in reviewsContent"
            :key="index"
            :item="item"
            />
        </div> -->
        <div v-for="review in store.reviews" :key="review.id">
            {{ review.rating }} {{ review.text }}
        </div>

    </div>
</template>

<script setup>
import { onMounted } from "vue";
import ReviewItem from './ReviewItem.vue';
import {useReviewsStore} from '../stores/reviews'
import { computed } from 'vue'; 

const store = useReviewsStore();

// const reviewsContent = computed(() => store.getReviewsContent());

// Destructure the method from the store
const { getReviewsContent } = store;

// Use computed to make the reviewsContent reactive
const reviewsContent = getReviewsContent();

// fetch reviews when the component is loaded (onMounted)
onMounted(() => {
    getReviewsContent();
});

</script>

<style  scoped>

</style>
