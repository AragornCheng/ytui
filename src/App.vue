<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Button from './components/Button/Button.vue'

const buttonRef = ref(null)

onMounted(() => {
    console.log(buttonRef.value)
})
</script>

<template>
    <main>
        <Button ref="buttonRef" type="primary" plain>Test Button</Button>
    </main>
</template>

<style scoped></style>
