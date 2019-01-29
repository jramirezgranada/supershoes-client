<template>
  <div>
    <div class="alert alert-success alert-dismissible fade show" role="alert" v-if="deleted">
      <strong>{{message}}</strong>
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <table class="table table-striped">
      <thead>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Name</th>
        <th scope="col">Address</th>
        <th scope="col">Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="store in stores">
        <th scope="row">{{ store.id }}</th>
        <td>{{ store.name }}</td>
        <td>{{ store.address }}</td>
        <td>
          <router-link :to="{name: 'store-detail', params: {storeId: store.id}}" class="p-2 text-dark">Detail</router-link> |
          <router-link :to="{name: 'articles-store', params: {storeId: store.id}}" class="p-2 text-dark">Articles</router-link> |
          <a href="#" @click="deleteStore(store.id)">Delete</a>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'StoresComponent',
  props: {
    msg: String
  },
  data() {
    return {
      getStoresUrl: 'http://127.0.0.1:8000/services/stores',
      stores: [],
      pageNumber: 0,
      deleted: false,
      message: ''
    }
  },
  mounted() {
    this.getAllStores(this.getStoresUrl)
  },
  methods: {
    getAllStores(getStoresUrl){
      axios.get(getStoresUrl).then(response => {
        this.stores = response.data.stores
      })
    },
    deleteStore(storeId){
      let deleteStoreUrl = 'http://127.0.0.1:8000/services/stores/' + storeId
      axios.delete(deleteStoreUrl).then(response => {
        this.deleted = true
        this.message = response.data.message
        this.getAllStores(this.getStoresUrl)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
