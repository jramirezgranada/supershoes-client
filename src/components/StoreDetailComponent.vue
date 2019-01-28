<template>
    <div>
        <div class="card">
            <div class="card-header">
                {{store.name}}
            </div>
            <div class="card-body">
                <h5 class="card-title">Address</h5>
                <p class="card-text">{{ store.address }}</p>
                <router-link :to="{name: 'articles-store', params: {storeId: store.id}}" class="btn btn-primary">Articles</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default{
        name: 'StoreDetailComponent',
        props: {},
        data(){
            return {
                getStoreDetailUrl: 'http://supershoes.test/services/stores/' + this.$route.params.storeId,
                store: []
            }
        },
        mounted() {
            this.getStoreDetail(this.getStoreDetailUrl)
        },
        methods: {
            getStoreDetail(storeDetailUrl){
                axios.get(storeDetailUrl).then(response => {
                    this.store = response.data.stores
                }).catch(error => {
                    if(error.response.status == 404){
                        this.$router.push({name: "404"})
                    }
                })
            }
        }
    }
</script>