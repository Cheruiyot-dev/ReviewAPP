<template>
    <Card>
        <button class="close">
            <i class="fas fa-times"></i>
        </button>

        <button class="edit">
            <i class="fas fa-edit"></i>
        </button>
        <div class="num-display">{{ rating }}</div>
        
    <div class="text-display"> {{ text }}</div>
   
    </Card>
</template>

<script setup>
import Card from './shared/Card.vue';


const props = defineProps({
  items: {
    type: Object,
  },
});

const rating = props.items.rating;
const text = props.items.text;



</script>

<style  scoped>

</style>