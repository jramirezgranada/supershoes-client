<template>
    <div class="row">
        <div class="col-md-6 offset-3">
            <div class="alert alert-success alert-dismissible fade show" role="alert" v-if="successfulAlert">
                <strong v-if="edit">Article Updated successfully.</strong>
                <strong v-else>Article Created successfully.</strong>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div v-if="showErrors">
                <div class="alert alert-danger alert-close alert-dismissable" role="alert">
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <p v-for="error in errors">{{ error[0] }}</p>
                </div>
            </div>
            <h3 v-if="edit">Update Article</h3>
            <h3 v-else>Create New Article</h3>
            <hr>
            <form @submit.prevent="store()">
                <div class="form-group">
                    <label for="article-store">Store</label>
                    <select name="store_id" id="article-store" v-model="store_id" class="form-control">
                        <option v-for="store in stores" :value="store.id" selected="">
                            {{ store.name }}
                        </option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="article-name">Name</label>
                    <input type="text" class="form-control" id="article-name" placeholder="Name" name="name" v-model="name">
                </div>
                <div class="form-group">
                    <label for="article-description">Description</label>
                    <textarea name="description" id="article-description" cols="30" rows="10" class="form-control" v-model="description"></textarea>
                </div>
                <div class="form-group">
                    <label for="article-price">Price</label>
                    <input type="text" class="form-control" id="article-price" placeholder="Price" name="price" v-model="price">
                </div>
                <div class="form-group">
                    <label for="article-total-in-shelf">Total in Shelf</label>
                    <input type="text" class="form-control" id="article-total-in-shelf" placeholder="Total in Shelf" name="totalInShelf" v-model="totalInShelf">
                </div>
                <div class="form-group">
                    <label for="article-total-in-vault">Total in Vault</label>
                    <input type="text" class="form-control" id="article-total-in-vault" placeholder="Total in Vault" name="totalInVault" v-model="totalInVault">
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default{
        name: "CreateStoreComponent",
        data(){
            return {
                name: '',
                description: '',
                price: '',
                totalInShelf: '',
                totalInVault: '',
                store_id: 0,
                createStoreUrl: 'http://127.0.0.1:8000/services/articles',
                getStoresUrl: 'http://127.0.0.1:8000/services/stores',
                successfulAlert: false,
                showErrors: false,
                errors: [],
                stores: [],
                edit: false,
                articleId: 0,
                article: []
            }
        },
        mounted(){
            this.articleId = this.$route.params.articleId

            if(this.articleId > 0){
                this.edit = true
                this.getArticleDetail(this.articleId)
            }

            this.getStores(this.getStoresUrl)
        },
        methods: {
            store(){
                this.showErrors = false

                let data = {
                    'name': this.name,
                    'description': this.description,
                    'price': this.price,
                    'total_in_shelf': this.totalInShelf,
                    'total_in_vault': this.totalInVault,
                    'store_id': this.store_id
                };

                let headers = {
                    'headers':  {'Content-Type' : 'application/json', 'Accept': 'application/json'}
                };

                if(this.edit){
                    let updateArticleUrl = 'http://127.0.0.1:8000/services/articles/' + this.articleId
                    axios.patch(updateArticleUrl, data, headers)
                        .then(response => {
                            console.log(response)
                            this.successfulAlert = true
                        })
                        .catch(error => {
                            console.log(error.response.data.errors)
                            this.showErrors = true
                            this.errors = error.response.data.errors
                        })
                } else {
                    axios.post(this.createStoreUrl, data, headers)
                        .then(response => {
                            console.log(response)
                            this.successfulAlert = true
                            this.name = ''
                            this.description = ''
                            this.price = ''
                            this.totalInShelf = ''
                            this.totalInVault = ''
                            this.store_id=0
                        })
                        .catch(error => {
                            console.log(error.response.data.errors)
                            this.showErrors = true
                            this.errors = error.response.data.errors
                        })
                }
            },
            getStores(getStoresUrl){
                axios.get(getStoresUrl).then(response => {
                    this.stores = response.data.stores
                })
            },
            getArticleDetail(articleId){
                let articleDetailUrl = 'http://127.0.0.1:8000/services/articles/' + articleId

                axios.get(articleDetailUrl).then(response => {
                    this.article = response.data.articles
                    this.name = this.article.name
                    this.description = this.article.description
                    this.totalInShelf = this.article.total_in_shelf
                    this.totalInVault = this.article.total_in_vault
                    this.store_id = this.article.store_id
                    this.price = this.article.price
                }).catch(error => {
                    if(error.response.status == 404){
                        this.$router.push({name: "404"})
                    }
                })
            }
        }
    }
</script>

