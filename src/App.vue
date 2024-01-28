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
        <div>
            <Button plain>Plain</Button>
            <Button type="primary" plain>Primary</Button>
            <Button type="success" plain>Success</Button>
            <Button type="info" plain>Info</Button>
            <Button type="warning" plain>Warning</Button>
            <Button type="danger" plain>Danger</Button>
        </div>
        <div>
            <Button round>Round</Button>
            <Button type="primary" round>Primary</Button>
            <Button type="success" round>Success</Button>
            <Button type="info" round>Info</Button>
            <Button type="warning" round>Warning</Button>
            <Button type="danger" round>Danger</Button>
        </div>
        <div>
            <Button circle></Button>
            <Button type="primary" circle></Button>
            <Button type="success" circle></Button>
            <Button type="info" circle></Button>
            <Button type="warning" circle></Button>
            <Button type="danger" circle></Button>
        </div>

        <div>
            <Button disabled>Default</Button>
            <Button type="primary" disabled>Primary</Button>
            <Button type="success" disabled>Success</Button>
            <Button type="info" disabled>Info</Button>
            <Button type="warning" disabled>Warning</Button>
            <Button type="danger" disabled>Danger</Button>
        </div>
        <div>
            <Button plain disabled>Plain</Button>
            <Button type="primary" plain disabled>Primary</Button>
            <Button type="success" plain disabled>Success</Button>
            <Button type="info" plain disabled>Info</Button>
            <Button type="warning" plain disabled>Warning</Button>
            <Button type="danger" plain disabled>Danger</Button>
        </div>

        <div>
            <Button size="large">Large</Button>
            <Button>Default</Button>
            <Button size="small">Small</Button>
        </div>
    </main>
</template>

<style scoped>
.yt-button {
    + & {
        margin-left: 12px;
    }
}
</style>
