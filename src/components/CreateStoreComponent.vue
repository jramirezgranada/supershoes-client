<template>
    <div class="row">
        <div class="col-md-6 offset-3">
            <div class="alert alert-success alert-dismissible fade show" role="alert" v-if="successfulAlert">
                <strong v-if="edit">Store Updated successfully.</strong>
                <strong v-else>Store Created successfully.</strong>
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
            <h3 v-if="edit">Update Store</h3>
            <h3 v-else>Create New Store</h3>
            <hr>
            <form @submit.prevent="saveStore()">
                <div class="form-group">
                    <label for="sotre-name">Store Name</label>
                    <input type="text" class="form-control" id="sotre-name" placeholder="Store Name" name="name" v-model="name">
                </div>
                <div class="form-group">
                    <label for="address">Address</label>
                    <input type="text" class="form-control" id="address" placeholder="Address" name="address" v-model="address">
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
                address: '',
                createStoreUrl: 'http://supershoes.test/services/stores/create',
                successfulAlert: false,
                showErrors: false,
                errors: [],
                storeId: 0,
                store: [],
                edit: false
            }
        },
        mounted(){
            this.storeId = this.$route.params.storeId

            if(this.storeId > 0){
                this.edit = true
                this.getStoreDetail(this.storeId)
            }
        },
        methods: {
            saveStore(){
                this.showErrors = false
                let data = {
                    'name': this.name,
                    'address': this.address
                };

                let headers = {
                    'headers':  {'Content-Type' : 'application/json', 'Accept': 'application/json'}
                };

                if(this.edit){
                    let updateStoreUrl = 'http://supershoes.test/services/stores/update/' + this.storeId
                    axios.patch(updateStoreUrl, data, headers)
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
                            this.address = ''
                        })
                        .catch(error => {
                            console.log(error.response.data.errors)
                            this.showErrors = true
                            this.errors = error.response.data.errors
                        })
                }
            },
            getStoreDetail(storeId){
                let storeDetailUrl = 'http://supershoes.test/services/stores/' + storeId

                axios.get(storeDetailUrl).then(response => {
                    this.store = response.data.stores
                    this.name = this.store.name
                    this.address = this.store.address
                }).catch(error => {
                    if(error.response.status == 404){
                        this.$router.push({name: "404"})
                    }
                })
            }
        }
    }
</script>

