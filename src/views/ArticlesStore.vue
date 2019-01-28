<template>
    <div class="articles">
        <ArticlesStoreComponent/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import ArticlesStoreComponent from '@/components/ArticlesStoreComponent.vue'

    export default {
        name: 'home',
        components: {
            ArticlesStoreComponent
        }
    }
</script>
