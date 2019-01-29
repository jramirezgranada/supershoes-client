<template>
    <div class="article-detail">
        <ArticleDetailComponent/>
    </div>
</template>

<script>
    import ArticleDetailComponent from '@/components/ArticleDetailComponent.vue'

    export default{
        name: 'article-detail',
        components: {
            ArticleDetailComponent
        }
    }
</script>