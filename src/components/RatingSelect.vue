<template>
    <ul class="rating">
        <li v-for="n in 10" :key="`rating-${n}`">
            <input type="radio" :id="`num${n}`" name="rating" :value="n" :checked="selected === n" v-model="selected" />
            <label :for="`num${n}`">
                {{ n }}
            </label>
        </li>

    </ul>
</template>

<script setup>
import { watch, ref } from 'vue';

const emit = defineEmits(['setRating'])


defineProps({
    rating: Number,


})

const selected = ref(null);
const rating = ref(0)

watch(selected, (newVal) => {
    emit('setRating', newVal);
});


watch(() => rating, (newVal) => {
    selected.value = newVal;
})

</script>


<style  scoped></style>


