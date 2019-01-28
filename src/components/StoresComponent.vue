<template>
  <div>
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
          <router-link :to="{name: 'articles-store', params: {storeId: store.id}}" class="p-2 text-dark">Articles</router-link>
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
      getStoresUrl: 'http://supershoes.test/services/stores',
      stores: [],
      pageNumber: 0
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
    nextPage(){
      this.pageNumber++;
    },
    prevPage(){
      this.pageNumber--;
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
