<template>
    <div class="articles">
        <ArticlesComponent/>
    </div>
</template>

<script>
    // @ is an alias to /src
    import ArticlesComponent from '@/components/ArticlesComponent.vue'

    export default {
        name: 'articles-list',
        components: {
            ArticlesComponent
        }
    }
</script>
