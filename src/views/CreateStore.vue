<template>
    <div class="create-store">
        <CreateStoreComponent/>
    </div>
</template>

<script>
    import CreateStoreComponent from '@/components/CreateStoreComponent.vue'

    export default{
        name: 'create-store',
        components:{
            CreateStoreComponent
        }
    }
</script>