<template>
    <div class="create-article">
        <CreateArticleComponent/>
    </div>
</template>

<script>
    import CreateArticleComponent from '@/components/CreateArticleComponent.vue'

    export default{
        name: 'create-store',
        components:{
            CreateArticleComponent
        }
    }
</script>