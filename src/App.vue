<script setup lang="ts">
import Button from './components/Button/Button.vue'
</script>

<template>
    <main>
        <div>
            <Button>Default</Button>
            <Button type="primary">Primary</Button>
            <Button type="success">Success</Button>
            <Button type="info">Info</Button>
            <Button type="warning">Warning</Button>
            <Button type="danger">Danger</Button>
        </div>
        <yt-button type="success" round plain>ytbutton</yt-button>
    </main>
</template>

<style scoped>
.yt-button {
    + & {
        margin-left: 12px;
    }
}
</style>
