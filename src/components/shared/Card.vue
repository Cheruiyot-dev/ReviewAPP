<template>
    <div class="card border border-4 border-red-500" :class=" {reverse: reverse}">
       <slot></slot> 

    </div>
</template>

<script setup>


defineProps({
    reverse: {
        type: Boolean,
        default: false
    }
})

</script>

<style  scoped>
.Card{
    background-color: #fff;
    color: #212121;
}

.Card.reverse{
    background-color: #212121;
    color: #fff;
}

</style>