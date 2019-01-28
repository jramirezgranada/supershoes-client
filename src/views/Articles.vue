<template>
    <div class="articles">
        <ArticlesComponent/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import ArticlesComponent from '@/components/ArticlesComponent.vue'

    export default {
        name: 'home',
        components: {
            ArticlesComponent
        }
    }
</script>
