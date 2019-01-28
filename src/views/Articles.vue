<template>
    <div class="articles">
        <router-link :to="{name: 'create-article'}" class="btn btn-success">Create Article</router-link>
        <div style="margin: 15px"></div>
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
