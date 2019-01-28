<template>
    <div class="row">
        <div class="col-md-6 offset-3">
            <h3>Create New Store</h3>
            <hr>
            <form @submit.prevent="store()">
                <div class="form-group">
                    <label for="sotre-name">Store Name</label>
                    <input type="text" class="form-control" id="sotre-name" placeholder="Store Name" name="name" v-model="name">
                </div>
                <div class="form-group">
                    <label for="address">Address</label>
                    <input type="text" class="form-control" id="address" placeholder="Address" name="address" v-model="address">
                </div>
                <button type="submit" class="btn btn-primary" @click="store">Submit</button>
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
                createStoreUrl: 'http://supershoes.test/services/stores/create'
            }
        },
        methods: {
            store(){
                let data = {
                    'name': this.name,
                    'address': this.address
                };

                let headers = {
                    'headers':  {'Accept' : 'application/json'}
                };

                axios.post(this.createStoreUrl, data, headers)
                    .then(response => {
                        console.log(response)
                    })
            }
        }
    }
</script>

